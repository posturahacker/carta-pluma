# Guia de Integrações de Analytics - GestãoPluma

## 1. IDs e Chaves de Acesso

⚠️ **IMPORTANTE: Nunca compartilhe ou comite tokens de acesso ou chaves de API** ⚠️

As chaves e tokens devem ser armazenados em variáveis de ambiente (.env):

```env
# Google Tag Manager
GTM_ID=seu_id_gtm

# Google Analytics (GA4)
GA4_MEASUREMENT_ID_1=seu_id_ga4_1
GA4_MEASUREMENT_ID_2=seu_id_ga4_2

# Meta Pixel
META_PIXEL_ID=seu_pixel_id
META_ACCESS_TOKEN=seu_access_token

# TikTok Pixel
TIKTOK_PIXEL_ID=seu_pixel_id

# Pinterest Tag
PINTEREST_TAG_ID=seu_tag_id
```

## 2. Configuração do Google Tag Manager

### 2.1 Instalação do Código Base

1. Adicione este código o mais alto possível no `<head>` da página:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',process.env.GTM_ID);</script>
<!-- End Google Tag Manager -->
```

2. Adicione este código imediatamente após a tag de abertura `<body>`:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### 2.2 Configuração no GTM

1. Acesse https://tagmanager.google.com
2. Faça login com sua conta Google
3. Crie um novo container ou use o existente
4. Configure as tags para cada serviço:
   - Google Analytics 4
   - Meta Pixel
   - TikTok Pixel
   - Pinterest Tag

## 3. Implementação dos Serviços de Analytics

### 3.1 Google Analytics (src/services/GoogleAnalytics.ts)
```typescript
const MEASUREMENT_IDS = [
  process.env.GA4_MEASUREMENT_ID_1,
  process.env.GA4_MEASUREMENT_ID_2
];
// ... resto do código ...
```

### 3.2 Meta Pixel (src/services/MetaConversionsAPI.ts)
```typescript
const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
// ... resto do código ...
```

### 3.3 TikTok Pixel (src/services/TikTokPixel.ts)
```typescript
const PIXEL_ID = process.env.TIKTOK_PIXEL_ID;
// ... resto do código ...
```

### 3.4 Pinterest Tag (src/services/PinterestConversionsAPI.ts)
```typescript
const TAG_ID = process.env.PINTEREST_TAG_ID;
// ... resto do código ...
```

## 4. Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione todas as variáveis necessárias
3. Adicione `.env` ao `.gitignore`
4. Crie um arquivo `.env.example` com os nomes das variáveis (sem valores)

## 5. Valores Padrão

- Nome do produto: "GestãoPluma"
- Preço: R$ 997,00
- Moeda: BRL

## 6. Eventos Rastreados

1. **Visualização de Página**
   - Google Analytics: `page_view`
   - Meta: `PageView`
   - TikTok: `page`
   - Pinterest: `pagevisit`

2. **Contato (WhatsApp)**
   - Google Analytics: `contact`
   - Meta: `Contact`
   - TikTok: `Contact`
   - Pinterest: `lead`

3. **Início de Checkout**
   - Google Analytics: `begin_checkout`
   - Meta: `InitiateCheckout`
   - TikTok: `InitiateCheckout`
   - Pinterest: `checkout`

## 7. Debug Mode

Todas as integrações têm um modo de debug ativado (`DEBUG = true`). Para verificar se os eventos estão sendo enviados:

1. Abra o DevTools (F12)
2. Vá para a aba "Console"
3. Você verá logs detalhados de cada evento enviado

## 8. Verificação da Instalação

### 8.1 Google Tag Manager
1. Instale a extensão Tag Assistant do Chrome
2. Visite o site
3. Verifique se o container do GTM está carregando corretamente
4. Confirme se todas as tags estão disparando nos momentos corretos

### 8.2 Depuração de Tags
1. No GTM, clique em "Preview"
2. Digite a URL do seu site
3. Uma nova janela será aberta com o Debug Mode
4. Verifique se todas as tags estão disparando corretamente

### 8.3 Publicação
1. Após confirmar que tudo está funcionando:
   - Volte ao GTM
   - Clique em "Submit"
   - Dê um nome à versão
   - Clique em "Publish"

## 9. Manutenção

1. Monitore regularmente os eventos no console
2. Verifique os painéis de cada plataforma
3. Mantenha os tokens e IDs atualizados
4. Faça testes periódicos de todos os eventos 