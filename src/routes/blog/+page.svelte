<script>
  import { fly, fade } from 'svelte/transition';
  
  // Mock de posts do blog
  const posts = [
    {
      slug: 'tecnicas-erecao-duradoura',
      title: 'Técnicas Secretas para Ereção Duradoura',
      excerpt: 'Descubra os exercícios e técnicas que transformarão sua performance sexual.',
      author: 'Maikon Weber',
      date: '2024-04-05',
      image: '/portrait-smiling-young-man-rubbing-his-hands.jpg'
    },
    {
      slug: 'alimentacao-potencia-sexual',
      title: 'Alimentação para Potência Sexual',
      excerpt: 'Os alimentos que podem transformar sua performance na cama.',
      author: 'Maikon Weber',
      date: '2024-04-04',
      image: '/young-bearded-man-with-striped-shirt.jpg'
    },
    {
      slug: 'exercicios-pelvicos',
      title: 'Exercícios Pélvicos para Potência Máxima',
      excerpt: 'Aprenda os exercícios que fortificam sua região pélvica e melhoram sua performance.',
      author: 'Maikon Weber',
      date: '2024-04-03',
      image: '/portrait-man-teaching-sign-language.jpg'
    }
  ];
</script>

<svelte:head>
  <title>Blog - Ereção Duradoura</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="blog-list">
  <header class="blog-header" in:fly={{ y: -50, duration: 500 }}>
    <div class="header-content">
      <a href="/" class="logo-link">
        <img src="/logo_new.png" alt="Logo" class="logo" />
      </a>
      <nav class="header-nav">
        <a href="/" class="home-link">Home</a>
      </nav>
    </div>
  </header>

  <div class="blog-content">
    <h1>Blog</h1>
    <p class="subtitle">Artigos exclusivos sobre performance sexual e saúde masculina</p>

    <div class="posts-grid">
      {#each posts as post, index}
        <article class="post-card" in:fly={{ y: 20, duration: 800, delay: 200 * index }}>
          <img src={post.image} alt={post.title} />
          <div class="post-content">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div class="post-meta">
              <span class="author">Por {post.author}</span>
              <span class="date">{post.date}</span>
            </div>
            <a href="/blog/{post.slug}" class="read-more">
              Ler mais
              <span class="arrow">→</span>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
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

.blog-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #121212;
  min-height: 100vh;
  padding-top: 5rem;
}

.blog-header {
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

.home-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: #333333;
  transition: all 0.3s ease;
}

.home-link:hover {
  background: #444444;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.blog-content {
  text-align: center;
  margin-bottom: 4rem;
}

.blog-content h1 {
  color: #ffffff;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.post-card {
  background: #1e1e1e;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid #333333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.post-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  border-color: #444444;
}

.post-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 2rem;
}

.post-content h2 {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.post-content p {
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  color: #8a8a8a;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  background: #333333;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.read-more:hover {
  background: #444444;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.arrow {
  transition: transform 0.3s ease;
}

.read-more:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .blog-content h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style> 