<template>
  <div>
    <header class="hero-header">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Proyectos</router-link>
        <router-link to="/cv">Curriculum</router-link>
      </nav>
    </header>

    <div class="cv-container">
      <img :src="cvImage" alt="CV Miriam Durán" class="cv-img" />
      <a :href="cvFile" download class="cv-download-btn" title="Descargar CV">
        📄 Descargar CV
      </a>
    </div>

    <footer class="footer scroll-fade">
      <p>© 2025 Miriam Durán Reyes. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import cvImage from '@/assets/cvMD.jpg';
import cvFile from '@/assets/Currículum_MIRIAM_DURAN_DAW.pdf';
import '@/assets/styles/home.css';
import '@/assets/styles/projects.css';
</script>

<style scoped>
.cv-container {
  width: 100%;
  margin: 10rem auto 2rem auto;
  position: relative;
  max-width: 900px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 40px;
  overflow: hidden;
  padding: 1rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cv-download-btn {
  display: inline-block;
  margin-top: 0rem;
  padding: 1rem 2.4rem;
  background-color: #d4af37;
  color: white;
  font-weight: 600;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 30px;
  text-decoration: none;
  box-shadow:
    0 4px 8px rgba(212, 175, 55, 0.3);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.cv-download-btn:hover {
  background-color: #b8860b;
  box-shadow:
    0 6px 14px rgba(184, 134, 11, 0.5);
  color: white;
}

.cv-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  user-select: none;
}
</style>
