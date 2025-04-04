// Tipos globais para as APIs de analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
    ttq: any;
    pintrk: any;
    TiktokAnalyticsObject: string;
  }
}

// Configurações
const config = {
  google: {
    measurementIds: ['G-766KC1DRRL', 'G-BP9Z0961BC']
  },
  meta: {
    pixelId: '1768268140412454'
  },
  tiktok: {
    pixelId: 'CVNGK5BC77U34F1TM1U0'
  },
  pinterest: {
    tagId: '2613740629600'
  }
};

// Google Analytics
export const trackGoogleEvent = (eventName: string, params: any = {}) => {
  try {
    if (!window.gtag) return;
    config.google.measurementIds.forEach(id => {
      window.gtag('event', eventName, {
        ...params,
        send_to: id
      });
    });
  } catch (error) {
    console.error('[Google Analytics] Erro:', error);
  }
};

// Meta Pixel
export const trackMetaEvent = (eventName: string, params: any = {}) => {
  try {
    if (!window.fbq) return;
    window.fbq('track', eventName, params);
  } catch (error) {
    console.error('[Meta Pixel] Erro:', error);
  }
};

// TikTok Pixel
export const trackTikTokEvent = (eventName: string, params: any = {}) => {
  try {
    if (!window.ttq) return;
    window.ttq.track(eventName, params);
  } catch (error) {
    console.error('[TikTok Pixel] Erro:', error);
  }
};

// Pinterest Tag
export const trackPinterestEvent = (eventName: string, params: any = {}) => {
  try {
    if (!window.pintrk) return;
    window.pintrk('track', eventName, {
      ...params,
      event_id: `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`
    });
  } catch (error) {
    console.error('[Pinterest Tag] Erro:', error);
  }
};

// Função unificada para rastrear eventos em todas as plataformas
export const trackEvent = (eventType: 'pageview' | 'contact' | 'purchase', data: any = {}) => {
  const defaultData = {
    currency: 'BRL',
    value: 997.00,
    content_name: 'Gestão Pluma',
    content_type: 'product'
  };

  const eventData = { ...defaultData, ...data };

  // Page View
  if (eventType === 'pageview') {
    trackGoogleEvent('page_view', eventData);
    trackMetaEvent('PageView', eventData);
    trackTikTokEvent('PageView', eventData);
    trackPinterestEvent('pagevisit', eventData);
  }
  
  // Contact (WhatsApp)
  else if (eventType === 'contact') {
    trackGoogleEvent('contact', eventData);
    trackMetaEvent('Contact', eventData);
    trackTikTokEvent('Contact', eventData);
    trackPinterestEvent('lead', eventData);
  }
  
  // Purchase/Checkout
  else if (eventType === 'purchase') {
    trackGoogleEvent('begin_checkout', eventData);
    trackMetaEvent('InitiateCheckout', eventData);
    trackTikTokEvent('InitiateCheckout', eventData);
    trackPinterestEvent('checkout', eventData);
  }
}; 