import React, { useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

// Função para validar e sanitizar URLs
const sanitizeUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // Permite apenas URLs do WhatsApp
    if (urlObj.hostname !== 'wa.me') {
      throw new Error('URL inválida');
    }
    return urlObj.toString();
  } catch (error) {
    console.error('URL inválida:', error);
    return '#';
  }
};

// Função para enviar evento para o Pinterest
const sendPinterestEvent = async (eventName: string, eventData: any) => {
  try {
    const response = await fetch(`https://api.pinterest.com/v5/ad_accounts/${process.env.NEXT_PUBLIC_PINTEREST_AD_ACCOUNT_ID}/events`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PINTEREST_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        data: [{
          event_name: eventName,
          action_source: 'web',
          event_time: Math.floor(Date.now() / 1000),
          event_id: `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`,
          user_data: {
            client_ip_address: window.location.hostname,
            client_user_agent: navigator.userAgent,
            em: [],
            ph: []
          },
          custom_data: {
            currency: 'BRL',
            value: 997.00,
            content_name: 'Gestão Pluma',
            content_type: 'product',
            ...eventData
          }
        }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Erro ao enviar evento para o Pinterest: ${data.message || response.statusText}`);
    }

    console.log('Evento enviado com sucesso para o Pinterest:', eventName);
  } catch (error) {
    console.error('Erro ao enviar evento para o Pinterest:', error);
  }
};

const SalesContent = () => {
  // URL do WhatsApp sanitizada
  const whatsappUrl = sanitizeUrl('https://wa.me/+5511967336619');

  // Rastrear visualização da página
  useEffect(() => {
    try {
      sendPinterestEvent('page_view', {
        page_name: 'sales_page',
        content_name: 'Carta de Venda Pluma'
      });
    } catch (error) {
      console.error('Erro ao rastrear visualização da página:', error);
    }
  }, []);

  const handlePurchaseClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      // Prevenir o clique padrão para garantir que o evento seja enviado
      e.preventDefault();

      // Enviar evento de compra
      await sendPinterestEvent('add_to_cart', {
        content_name: 'Gestão Pluma',
        content_type: 'product'
      });

      // Redirecionar para a página de pagamento
      window.open('https://payment.ticto.app/O5114D5AA', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erro ao processar clique de compra:', error);
      // Em caso de erro, ainda permite o redirecionamento
      window.open('https://payment.ticto.app/O5114D5AA', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-8">
      <AnimatedSection className="mb-16">
        <h1 className="font-serif text-3xl md:text-4xl mb-10 text-center text-primary">
          Querida Psicóloga,
        </h1>
        
        <p className="paragraph mb-8">
          Eu sei que você escolheu essa profissão pela <strong>missão</strong> de ajudar as pessoas e <strong>transformar vidas.</strong>
        </p>
        <p className="paragraph mb-8">
          Sei que você ama estudar e está sempre buscando <strong>entregar o melhor de si para seus pacientes.</strong>
        </p>
        <p className="paragraph mb-8">
          Sei que você é apaixonada pelo que faz e que cada evolução, cada atendimento, <strong>reacende a chama do propósito</strong> no seu coração, resgatando a <strong>força que te faz seguir todos os dias</strong>, mesmo entre tantos desafios.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="rounded-2xl overflow-hidden mb-12">
          <img 
            src="/lovable-uploads/4d09ca83-1a10-4f94-8be6-98b0934cd470.png" 
            alt="Psicóloga organizando documentos e realizando tarefas administrativas" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <p className="paragraph mb-8">
          Mas eu sei também que boa parte do seu <strong>tempo</strong> é <strong>consumida</strong> por outras tarefas que <strong>não refletem a sua essência.</strong>
        </p>
        <p className="paragraph mb-8">
          Que você gasta horas mexendo em papéis, documentos e planilhas que te deixam <strong>estressada e exausta.</strong>
        </p>
        <p className="paragraph mb-8">
          <strong>Ninguém te preparou</strong> para lidar com burocracias, finanças, captação de pacientes, gestão, marketing… É tanta coisa que às vezes você se dedica mais a essas tarefas do que à sua própria profissão.
        </p>
        <p className="paragraph mb-8">
          E o pior: fazendo tudo sozinha e tendo que <strong>se virar pra dar conta.</strong>
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <h2 className="heading-md mb-8 text-plena-700">
          Afinal, a outra opção é desistir.
        </h2>
        <p className="paragraph mb-8">
          Mas você sabe que <strong>não chegou aqui por acaso.</strong>
        </p>
        <p className="paragraph mb-8">
          Se você veio parar nessa página e leu esse texto até aqui, é porque a força e a vontade de <strong>mudar o mundo</strong> continuam vivas em você, e <strong>eu sei como é difícil.</strong>
        </p>
        <p className="paragraph mb-8">
          Sei como é se sentir <strong>perdida, sobrecarregada e desvalorizada</strong>, vendo sua motivação definhar.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="p-6 md:p-8 glass mb-12">
          <p className="paragraph italic">
            "Eu sei porque, por muito tempo, <strong>também trabalhei em meio ao caos</strong>, sem clareza de onde queria chegar e como fazer para alcançar meus objetivos, presa em tarefas que eu não queria fazer e <strong>sem tempo pra me dedicar ao que eu amava.</strong>"
          </p>
        </div>
        
        <p className="paragraph mb-8">
          Até eu entender uma coisa:
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <h2 className="heading-md mb-8 text-plena-700">
          A verdade é que o que não alimenta nossa essência, mata nossa energia.
        </h2>
        
        <p className="paragraph mb-8">
          Percebi que as horas que eu passava mexendo em <strong>planilhas e papéis</strong>, eram horas que eu <strong>deixava de investir no meu desenvolvimento,</strong> em leituras, estudos e especializações.
        </p>
        <p className="paragraph mb-8">
          Percebi que se eu não decidisse mudar, nunca sairia desse ciclo vicioso.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="rounded-2xl overflow-hidden mb-12">
          <img 
            src="/lovable-uploads/b47c4861-eb5c-435b-927c-57d05983f682.png" 
            alt="Psicóloga durante sessão de atendimento com paciente" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <h2 className="heading-md mb-8 text-plena-700">
          Então, escolhi a mudança.
        </h2>
        <p className="paragraph mb-8">
          Hoje <strong>tenho tempo</strong> para conversar com clientes e entender como entregar o meu melhor, como <strong>fazer a diferença.</strong>
        </p>
        <p className="paragraph mb-8">
          Tenho a <strong>paz</strong> de saber que todas as informações que eu preciso estão reunidas em um lugar só, organizadas e automatizadas para que eu possa <strong>cuidar do que realmente importa.</strong>
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <p className="paragraph mb-8">
          Hoje, trabalho guiada e focada na minha <strong>essência</strong>, no que realmente me move.
        </p>
        <p className="paragraph mb-8">
          As <strong>dúvidas e a ansiedade</strong> deram lugar à <strong>clareza e à tranquilidade.</strong>
        </p>
        <p className="paragraph mb-8">
          Hoje eu sei o que preciso fazer, quando preciso fazer, e o melhor: o que eu <strong>não</strong> quero fazer e a tecnologia pode fazer por mim.
        </p>
        <p className="paragraph mb-8">
          E foi essa <strong>virada de chave</strong> que me inspirou a levar a mesma possibilidade para mais pessoas.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <p className="paragraph mb-8">
          Decidi embarcar em uma jornada para ajudar outras mulheres que transformam o mundo e sabem o quanto <strong>seu potencial é desperdiçado em tarefas sem sentido.</strong>
        </p>
        <p className="paragraph mb-8">
          Iniciei essa aventura conversando com dezenas de psicólogas empreendedoras para entender de verdade a rotina e os desafios de cada uma.
        </p>
        <p className="paragraph mb-8">
          Muitas entrevistas, pesquisas e desabafos depois, algumas coisas ficaram óbvias:
        </p>
        <ul className="mb-8 pl-6 list-disc space-y-3">
          <li className="paragraph">A <strong>graduação não prepara</strong> psicólogas para o empreendedorismo</li>
          <li className="paragraph">As psicólogas hoje são <strong>obrigadas</strong> a serem mais administradoras, contadoras, publicitárias e vendedoras do que psicólogas</li>
          <li className="paragraph">Tarefas burocráticas consomem muuuito tempo (e a <strong>desorganização só piora</strong> esse problema).</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <p className="paragraph mb-8">
          Olhando pra esse cenário, nasceu a GestãoPluma:
        </p>
        <h2 className="heading-md mb-8 text-plena-700">
          Uma plataforma 100% personalizada para colocar a sua clínica em ordem e ganhar seu tempo de volta.
        </h2>
        <p className="paragraph mb-8">
          A GestãoPluma não é só um aplicativo de anotações, mas um sistema completo de centralização e gestão.
        </p>
        <p className="paragraph mb-8">
          Chega de se perder entre <strong>pastas, arquivos e planilhas espalhadas.</strong>
        </p>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <p className="paragraph mb-8">
          Aqui, você gerencia <strong>fichas de pacientes</strong>, agendamento de <strong>sessões</strong>, <strong>prontuários</strong>, evolução clínica, <strong>financeiro</strong> e tudo que é importante para facilitar o seu trabalho e te permitir <strong>focar nos atendimentos.</strong>
        </p>
        <ul className="mb-8 pl-6 list-disc space-y-3">
          <li className="paragraph"><strong>Controle tudo em qualquer lugar</strong>, pelo computador ou pelo celular.</li>
          <li className="paragraph">Estruture sua clínica como uma <strong>empresa</strong> e construa o caminho para crescer</li>
          <li className="paragraph">Evite problemas com <strong>pagamentos</strong> e inadimplência</li>
          <li className="paragraph"><strong>Economize</strong> tempo gasto com tarefas manuais e repetitivas</li>
          <li className="paragraph">Melhore sua prática clínica <strong>acompanhando a ficha de cada paciente</strong> com rapidez</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <div className="p-8 md:p-10 glass mb-12">
          <p className="paragraph mb-8">
            E não é só uma ferramenta para você preencher e usar. Meu objetivo é simplificar o seu dia-a-dia, <strong>proporcionando leveza e potencializando sua missão.</strong>
          </p>
          <p className="paragraph mb-8">
            Todo esse trabalho só faz sentido pra mim se fizer sentido e <strong>funcionar pra você</strong>, e é por isso que além do sistema, você vai receber:
          </p>
          <ul className="mb-4 space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-plena-600 text-xl">•</span>
              <span className="paragraph"><strong>Tutoriais</strong> em vídeo sobre como preencher e personalizar o sistema</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-plena-600 text-xl">•</span>
              <span className="paragraph">Capas, ícones e elementos visuais pra deixar tudo <strong>com a sua cara</strong></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-plena-600 text-xl">•</span>
              <span className="paragraph">Modelos pré-configurados de <strong>anotações, prontuários e fichas de anamnese</strong></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-plena-600 text-xl">•</span>
              <span className="paragraph">Suporte humanizado pra tirar suas dúvidas e <strong>te ajudar em qualquer dificuldade</strong></span>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mb-16">
        <h2 className="heading-md mb-8 text-plena-700 text-center">
          Chegou a hora de dar um passo em direção ao seu futuro.
        </h2>
        <p className="paragraph mb-8 text-center">
          Não dá pra mudar de fase repetindo as mesmas ações.
        </p>
        <p className="paragraph mb-8 text-center">
          Escolha profissionalizar seu trabalho e veja o poder de ganhar tempo e organização.
        </p>
        
        <div className="text-center mb-16">
          <a 
            href="https://payment.ticto.app/O5114D5AA"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary inline-block mx-auto mb-8"
            onClick={handlePurchaseClick}
          >
            QUERO UMA ROTINA PLUMA
          </a>
        </div>
        
        <p className="paragraph mb-8 text-center">
          Estou torcendo para que você consiga <strong>se libertar do caos.</strong>
        </p>
        <p className="paragraph mb-8 text-center">
          Se tiver alguma dúvida ou insegurança, quiser mais informações ou ver a ferramenta em ação:
        </p>
        
        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-3 mx-auto px-8 py-4 text-lg"
            onClick={(e) => {
              // Previne comportamento padrão se a URL for inválida
              if (whatsappUrl === '#') {
                e.preventDefault();
              }
            }}
          >
            <MessageCircle size={24} className="animate-pulse" />
            Fale comigo no WhatsApp
          </a>
          
          <p className="paragraph opacity-80 italic text-center mt-8">
            Um beijo, nos vemos do outro lado.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SalesContent;
