<script setup>
import { onMounted } from 'vue';
import '@/assets/styles/home.css';
import '@/assets/styles/projects.css';
import fc1 from '@/assets/fc1.PNG';
import nw1 from '@/assets/nw1.PNG';
import jv1 from '@/assets/jv1.PNG';

const projects = [
  {
    title: 'Fullscat',
    description: 'Descripción del proyecto Fullscat.',
    image: fc1,
    link: '/projects/fullscat',
  },
  {
    title: 'Online Store',
    description: 'Descripción del proyecto Javalinos.',
    image: jv1,
    link: '/projects/javalinos',
  },
  {
    title: 'Isla Transfers',
    description: 'Descripción del proyecto New Titans.',
    image: nw1,
    link: '/projects/newtitans',
  },
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  const elements = document.querySelectorAll('.scroll-fade, .competencies-list li');
  elements.forEach((el) => observer.observe(el));
});
</script>

<template>
  <div class="projects-page">
    <div class="hero-banner">
      <header class="hero-header">
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Proyectos</router-link>
          <router-link to="/cv">Curriculum</router-link>
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
          <img :src="project.image" :alt="project.title" class="project-img" />
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <router-link :to="project.link" class="btn">
          🔗 Ver proyecto
        </router-link>

        </div>
      </div>
    </section>
    <footer class="footer scroll-fade">
      <p>© 2025 Miriam Durán Reyes. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
.project-img {
  width: 100%;
  max-width: 300px;
  height: 200px; 
  object-fit: cover; 
  border-radius: 14px;
  margin-bottom: 1rem;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
  transition: filter 0.3s ease;
}

.project-img:hover {
  filter: brightness(1.05);
}
</style>
