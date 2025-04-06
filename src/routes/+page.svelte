<script>
import { onMount } from 'svelte';
import { fly, fade, slide } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
  
let days = 0, hours = 0, minutes = 0, seconds = 0, email = '';
let countdownFinished = false;
const targetDate = new Date('2025-01-05').getTime();

// Variáveis do chat
let showChat = false;
let newMessage = '';
let messages = [];

const features = [
  {
    title: "Domínio Total",
    description: "Técnicas avançadas para controlar cada momento com maestria",
    icon: "🔥"
  },
  {
    title: "Resultados Explosivos",
    description: "Metodologia que transforma sua performance em algo extraordinário",
    icon: "⚡"
  },
  {
    title: "Conteúdo Proibido",
    description: "Segredos e técnicas que poucos conhecem",
    icon: "🔒"
  }
];

const chapters = [
  {
    title: "O Poder da Anatomia",
    content: "Descubra como dominar seu corpo e alcançar níveis extraordinários de prazer e controle."
  },
  {
    title: "O Segredo da Ereção Perfeita",
    content: "Técnicas avançadas para manter o controle total e proporcionar experiências inesquecíveis."
  },
  {
    title: "Mente e Corpo em Sintonia",
    content: "Aprenda a controlar suas emoções e alcançar níveis supremos de satisfação."
  },
  {
    title: "O Poder dos Músculos Pélvicos",
    content: "Exercícios secretos que transformam sua performance em algo extraordinário."
  },
  {
    title: "A Arte da Respiração",
    content: "Técnicas de respiração que elevam seu prazer a níveis nunca antes experimentados."
  },
  {
    title: "Recuperação e Potência",
    content: "Métodos exclusivos para manter sua energia e disposição sempre no topo."
  }
];


function updateCountdown() {
  const now = new Date().getTime();

  const distance = targetDate - now;
 
  if (distance < 0) {
      countdownFinished = true;
      return;
    }
 
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
}

function handleSubmit() {
  alert('Email cadastrado com sucesso!');
  email = '';
}

function sendMessage() {
  if (newMessage.trim()) {
    messages = [...messages, { text: newMessage, sender: 'user' }];
    newMessage = '';
    
    // Simular resposta do bot após 1 segundo
    setTimeout(() => {
      messages = [...messages, { 
        text: 'Obrigado por sua mensagem! Em breve um de nossos atendentes entrará em contato.', 
        sender: 'bot' 
      }];
    }, 1000);
  }
}

onMount(() => {
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
  return () => clearInterval(interval);
});
</script>

<svelte:head>
  <!-- Título e descrição -->
  <title>Ebook Ereção Duradoura - Domine Sua Potência Sexual com Técnicas Exclusivas</title>
  <meta name="description" content="Descubra o guia definitivo para transformar sua performance sexual. Técnicas exclusivas, exercícios secretos e métodos comprovados para alcançar níveis extraordinários de prazer e controle.">

  <!-- Palavras-chave -->
  <meta name="keywords" content="Ereção Duradoura, Potência Sexual, Controle Total, Performance Sexual, Técnicas Secretas, Exercícios Pélvicos, Saúde Sexual, Vida Sexual, Satisfação Sexual, Métodos Exclusivos">

  <!-- Informações do autor -->
  <meta name="author" content="Maikon Weber">

  <!-- Viewport para design responsivo -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Open Graph (Facebook e redes sociais) -->
  <meta property="og:title" content="Ebook Ereção Duradoura - Domine Sua Potência Sexual">
  <meta property="og:description" content="Transforme sua vida sexual com técnicas exclusivas e segredos nunca antes revelados. Aprenda a dominar sua potência sexual.">
  <meta property="og:url" content="https://erecaoduradoura.com.br">
  <meta property="og:image" content="./logo_new.png">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Ebook Ereção Duradoura - Domine Sua Potência Sexual">
  <meta name="twitter:description" content="Descubra técnicas exclusivas para transformar sua performance sexual e alcançar níveis extraordinários de prazer.">
  <meta name="twitter:image" content="./logo_new.png">

  <!-- Favicon -->
  <link rel="icon" href="/logo_new.png" type="image/x-icon">

  <!-- CSS básico -->
  <link rel="stylesheet" href="/styles.css">

  <!-- Estrutura de dados JSON-LD (Rich Snippets) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Ebook Ereção Duradoura",
    "url": "https://erecaoduradoura.com.br",
    "description": "O guia definitivo para transformar sua performance sexual com técnicas exclusivas e segredos nunca antes revelados.",
    "author": {
      "@type": "Person",
      "name": "Maikon Weber"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mutter Corp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://erecaoduradoura.com.br"
      }
    },
    "image": "./logo_new.png",
    "offers": {
      "@type": "Offer",
      "price": "49.69",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    }
  }
  </script>

  <!-- Manifesto para PWA -->
  <link rel="manifest" href="/manifest.json">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="ebook-page">
  <!-- Header com Logo -->
  <header class="main-header" in:fly={{ y: -50, duration: 500 }}>
    <div class="header-content">
      <a href="/" class="logo-link">
        <img src="/logo_new.png" alt="Logo" class="logo" />
      </a>
      <nav class="header-nav">
        <a href="/blog" class="blog-link">Blog</a>
      </nav>
    </div>
  </header>

  <header class="hero" in:fly={{ y: 20, duration: 800, delay: 200 }}>
    <div class="hero-content">
      <h1>A Ereção que Não Acaba Nunca!</h1>
      <p class="subtitle">Uma jornada para transformar sua vida íntima</p>
      <div class="cta-buttons">
        <a href="#comprar" class="cta-button">Compre Agora</a>
        <a href="#preview" class="preview-button">Veja Preview</a>
      </div>
    </div>
  </header>

  <section class="features" in:fly={{ y: 20, duration: 800, delay: 400 }}>
    <div class="feature-card">
      <div class="feature-icon">💪</div>
      <h3>Controle Total</h3>
      <p>Aprenda técnicas avançadas para dominar seus músculos pélvicos</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">✅</div>
      <h3>Resultados Comprovados</h3>
      <p>Metodologia testada e aprovada por especialistas</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🔒</div>
      <h3>Conteúdo Exclusivo</h3>
      <p>Exercícios e técnicas nunca antes revelados</p>
    </div>
  </section>

  <section class="preview" id="preview" in:fly={{ y: 20, duration: 800, delay: 600 }}>
    <h2>Conteúdo do E-book</h2>
    <div class="preview-content">
      <div class="preview-text">
        <h3>Capítulo 1: Fundamentos da Anatomia</h3>
        <p>Explore os aspectos essenciais da anatomia humana, entendendo como o corpo funciona de maneira integrada, com foco nos sistemas musculoesquelético, cardiovascular e nervoso.</p>
        <h3>Capítulo 2: O Mecanismo da Ereção e o Poder do Controle Muscular</h3>
        <p>Descubra como o sistema vascular e os músculos do assoalho pélvico influenciam diretamente o mecanismo da ereção, e aprenda a fortalecer essas áreas para melhorar o desempenho.</p>
        <h3>Capítulo 3: A Mente no Controle – Superando o Estresse e Ansiedade</h3>
        <p>Aprenda técnicas práticas para reduzir o estresse e a ansiedade, com foco no controle emocional e mental para alcançar maior estabilidade e foco em situações desafiadoras.</p>
      </div>
      <div class="preview-image">
        <img src="/logo_new.png" alt="Preview do Ebook" />
      </div>
    </div>
  </section>

  <section class="pricing" id="comprar" in:fly={{ y: 20, duration: 800, delay: 800 }}>
    <h2>Escolha Seu Plano</h2>
    <div class="pricing-cards">
      <div class="pricing-card">
        <h3>Básico</h3>
        <div class="price">
          <span class="original-price">R$ 120,99</span>
          <span class="current-price">R$ 19,69</span>
        </div>
        <ul>
          <li>✓ Acesso imediato ao conteúdo</li>
          <li>✓ Garantia de 30 dias</li>
          <li>✓ Atualizações Gratuitas</li>
        </ul>
        <a href="https://pay.kirvano.com/22eb9534-8479-4dd9-9bb8-a6318fd87d02" class="buy-button">
          Comprar Agora
          <span class="arrow">→</span>
        </a>
      </div>
  </section>

  <section class="testimonials" in:fly={{ y: 20, duration: 800, delay: 1000 }}>
    <h2>Depoimentos</h2>
    <div class="testimonial-cards">
      <div class="testimonial-card">
        <p>"As técnicas são otimas realmente melhoram a desempenho e também fazem diferença, minhas esposa relata que eu vibro dentro dela!"</p>
        <div class="author">- Bruno Toshi</div>
      </div>
      <div class="testimonial-card">
        <p>"Hoje em dia consigo realmente gozar quando eu quero basta reduzir o ritmo e usar a tecnicas de controle."</p>
        <div class="author">- Erick Ramos</div>
      </div>
    </div>
  </section>

  <!-- Chat Button -->
  <button 
    class="chat-button" 
    on:click={() => showChat = !showChat}
    in:fly={{ y: 20, duration: 500 }}
  >
    💬
  </button>

  <!-- Chat Window -->
  {#if showChat}
    <div class="chat-window" in:fade>
      <div class="chat-header">
        <h3>Atendimento</h3>
        <button class="close-chat" on:click={() => showChat = false}>×</button>
      </div>
      <div class="chat-messages">
        {#each messages as message}
          <div class="message {message.sender}">
            {message.text}
          </div>
        {/each}
      </div>
      <div class="chat-input">
        <input 
          type="text" 
          bind:value={newMessage}
          placeholder="Digite sua mensagem..."
          on:keydown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button on:click={sendMessage}>Enviar</button>
      </div>
    </div>
  {/if}
</main>

<style>
:global(body) {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: #121212;
  color: #ffffff;
  min-height: 100vh;
  line-height: 1.6;
}

.ebook-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #121212;
  padding-top: 5rem;
}

/* Header Styles */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #121212;
  padding: 1rem 2rem;
  z-index: 1000;
  border-bottom: 1px solid #333333;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 50px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.header-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.blog-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: #333333;
  transition: all 0.3s ease;
}

.blog-link:hover {
  background: #444444;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.hero {
  background: #1e1e1e;
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 4rem;
  border: 2px solid #333333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: 4rem;
  margin: 0;
  color: #ffffff;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 1.8rem;
  color: #ffffff;
  margin: 1.5rem 0 3rem;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.cta-button, .preview-button {
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.cta-button {
  background: #333333;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.preview-button {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover, .preview-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: #1e1e1e;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #333333;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  color: #ffffff;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  border-color: #444444;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  color: #ffffff;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feature-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ffffff;
}

.preview {
  background: #1e1e1e;
  padding: 4rem 2rem;
  border-radius: 15px;
  margin-bottom: 4rem;
  border: 2px solid #333333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.preview h2 {
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.preview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.preview-text h3 {
  color: #ffffff;
  font-size: 1.8rem;
  margin-top: 2.5rem;
  font-weight: 600;
}

.preview-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ffffff;
  margin-top: 1rem;
}

.preview-image img {
  width: 100%;
  border-radius: 12px;
  border: 2px solid #333333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.pricing {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing h2 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.pricing-card {
  background: #1e1e1e;
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid #333333;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.pricing-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.pricing-card h3 {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.price {
  font-size: 3rem;
  color: #ffffff;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.original-price {
  text-decoration: line-through;
  color: #8a8a8a;
  font-size: 1.4rem;
}

.current-price {
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 2.5rem 0;
}

.pricing-card li {
  margin: 1rem 0;
  color: #ffffff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.buy-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  background: #333333;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.buy-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.arrow {
  transition: transform 0.3s ease;
}

.buy-button:hover .arrow {
  transform: translateX(4px);
}

.testimonials {
  background: #1e1e1e;
  padding: 4rem 2rem;
  border-radius: 15px;
  border: 2px solid #333333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.testimonials h2 {
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.testimonial-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.testimonial-card {
  background: #121212;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid #333333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.testimonial-card p {
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.author {
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
}

/* Chat Styles */
.chat-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #333333;
  color: #ffffff;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.chat-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.chat-window {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  width: 380px;
  height: 550px;
  background: #1e1e1e;
  border: 2px solid #333333;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  z-index: 999;
}

.chat-header {
  padding: 1.2rem;
  background: #333333;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 13px 13px 0 0;
}

.chat-header h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
}

.chat-messages {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.message {
  margin: 0.8rem 0;
  padding: 1rem;
  border-radius: 12px;
  max-width: 85%;
  font-size: 1.1rem;
  line-height: 1.5;
}

.message.user {
  background: #333333;
  color: #ffffff;
  margin-left: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.message.bot {
  background: #121212;
  color: #ffffff;
  border: 1px solid #333333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.chat-input {
  padding: 1.2rem;
  display: flex;
  gap: 0.8rem;
  border-top: 1px solid #333333;
}

.chat-input input {
  flex: 1;
  padding: 1rem;
  border: 1px solid #333333;
  background: #121212;
  color: #ffffff;
  border-radius: 8px;
  font-size: 1.1rem;
}

.chat-input button {
  padding: 1rem 1.8rem;
  background: #333333;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.chat-input button:hover {
  background: #444444;
  transform: translateY(-2px);
}

.close-chat {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.8rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.close-chat:hover {
  transform: rotate(90deg);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .preview-content {
    grid-template-columns: 1fr;
  }

  .pricing-card {
    padding: 2rem;
  }

  .current-price {
    font-size: 2.8rem;
  }

  .chat-window {
    width: 90%;
    right: 5%;
  }
}
</style>