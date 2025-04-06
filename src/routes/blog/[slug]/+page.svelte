<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  // Mock de posts do blog
  const posts = [
    {
      slug: 'tecnicas-erecao-duradoura',
      title: 'Técnicas Secretas para Ereção Duradoura',
      excerpt: 'Descubra os exercícios e técnicas que transformarão sua performance sexual.',
      content: `
        <h2>O Poder dos Exercícios Pélvicos</h2>
        <p>Os exercícios pélvicos são fundamentais para desenvolver uma ereção mais forte e duradoura. Quando praticados regularmente, fortalecem os músculos do assoalho pélvico, melhorando o controle e a potência.</p>
        
        <h3>Exercício 1: Kegel Avançado</h3>
        <p>Este exercício é um dos mais eficazes para fortalecer os músculos pélvicos. Contraia os músculos como se estivesse segurando a urina, mantenha por 5 segundos e relaxe. Repita 10 vezes, 3 vezes ao dia.</p>
        
        <h3>Exercício 2: Elevação Pélvica</h3>
        <p>Deite-se de costas com os joelhos dobrados. Eleve a pélvis enquanto contrai os músculos pélvicos. Mantenha por 5 segundos e relaxe. Repita 15 vezes.</p>
      `,
      author: 'Maikon Weber',
      date: '2024-04-05',
      image: '/portrait-smiling-young-man-rubbing-his-hands.jpg'
    },
    {
      slug: 'alimentacao-potencia-sexual',
      title: 'Alimentação para Potência Sexual',
      excerpt: 'Os alimentos que podem transformar sua performance na cama.',
      content: `
        <h2>Superalimentos para Potência Sexual</h2>
        <p>Uma alimentação adequada é crucial para manter níveis elevados de testosterona e melhorar a circulação sanguínea, fatores essenciais para uma ereção forte e duradoura.</p>
        
        <h3>1. Chocolate Amargo</h3>
        <p>Rico em flavonoides, melhora a circulação sanguínea e aumenta a produção de óxido nítrico, essencial para ereções mais fortes.</p>
        
        <h3>2. Ostras</h3>
        <p>Fonte rica em zinco, mineral crucial para a produção de testosterona e saúde sexual masculina.</p>
      `,
      author: 'Maikon Weber',
      date: '2024-04-04',
      image: '/young-bearded-man-with-striped-shirt.jpg'
    }
  ];

  let currentPost = null;
  let showChat = false;
  let messages = [];
  let newMessage = '';

  onMount(() => {
    const slug = $page.params.slug;
    currentPost = posts.find(post => post.slug === slug);
  });

  function sendMessage() {
    if (newMessage.trim()) {
      messages = [...messages, { text: newMessage, sender: 'user' }];
      newMessage = '';
      
      setTimeout(() => {
        messages = [...messages, { 
          text: 'Obrigado por sua mensagem! Nossa equipe entrará em contato em breve.', 
          sender: 'bot' 
        }];
      }, 1000);
    }
  }
</script>

<svelte:head>
  <title>{currentPost?.title || 'Blog - Ereção Duradoura'}</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="blog-container">
  <!-- Header Fixo -->
  <header class="main-header" in:fly={{ y: -50, duration: 500 }}>
    <div class="header-content">
      <a href="/" class="logo-link">
        <img src="/logo_new.png" alt="Logo" class="logo" />
      </a>
      <nav class="header-nav">
        <a href="/" class="home-link">Home</a>
        <a href="/blog" class="blog-link">Blog</a>
      </nav>
    </div>
  </header>

  <div class="post-container">
    {#if currentPost}
      <article class="blog-post" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <header class="post-header">
          <h1>{currentPost.title}</h1>
          <div class="post-meta">
            <span class="author">Por {currentPost.author}</span>
            <span class="date">{currentPost.date}</span>
          </div>
        </header>
        
        <div class="post-content">
          {@html currentPost.content}
        </div>
      </article>
    {:else}
      <div class="not-found" in:fade>
        <h1>Post não encontrado</h1>
        <p>O artigo que você está procurando não existe ou foi removido.</p>
      </div>
    {/if}
  </div>

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

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #121212;
  min-height: 100vh;
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

.home-link, .blog-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: #333333;
  transition: all 0.3s ease;
}

.home-link:hover, .blog-link:hover {
  background: #444444;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.post-container {
  max-width: 800px;
  margin: 0 auto;
}

.blog-post {
  background: #1e1e1e;
  border-radius: 15px;
  padding: 3rem;
  border: 2px solid #333333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.post-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333333;
}

.post-header h1 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.post-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #8a8a8a;
  font-size: 0.9rem;
}

.post-content {
  line-height: 1.8;
}

.post-content h2 {
  color: #ffffff;
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  font-weight: 600;
}

.post-content h3 {
  color: #ffffff;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem;
  font-weight: 500;
}

.post-content p {
  color: #ffffff;
  margin: 1rem 0;
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

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.not-found h1 {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.not-found p {
  color: #8a8a8a;
}

@media (max-width: 768px) {
  .blog-post {
    padding: 2rem;
  }

  .post-header h1 {
    font-size: 2rem;
  }

  .chat-window {
    width: 90%;
    right: 5%;
  }
}
</style> 