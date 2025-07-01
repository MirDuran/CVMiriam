<template>
  <div>
    <div class="hero-banner">
      <header class="hero-header">
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Proyectos</router-link>
        </nav>
      </header>
    </div>

    <!-- Sección de Proyectos -->
    <section class="section projects scroll-fade">
      <h2 class="section-title">Proyectos</h2>
      <div class="projects-grid">
        <div
          class="project-card"
          v-for="(project, index) in projects"
          :key="index"
        >
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="btn">
            🔗 Ver proyecto
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'Mi primer sitio web',
    description: 'Un proyecto hecho en HTML y CSS.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://ejemplo.com/proyecto1'
  },
  {
    title: 'ToDo App con Vue',
    description: 'Una aplicación para gestionar tareas.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://ejemplo.com/proyecto2'
  },
  {
    title: 'Sitio responsive',
    description: 'Diseñado para verse bien en móviles y escritorio.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://ejemplo.com/proyecto3'
  }
]
</script>

<style scoped>
/* Banner estilo cabecera */
.hero-banner {
  height: 80px;
  background-image: url('@/assets/nuv.avif');
    display: flex;
  align-items: center;
  padding: 0 2rem;
}

.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  width: 40px;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav a:hover {
  text-decoration: underline;
}

/* Sección de proyectos */
.projects {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.project-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.project-card h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
}

.project-card p {
  font-size: 0.95rem;
  color: #555;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.2rem;
  background-color: #111;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #444;
}
</style>
