<script setup>
import { onMounted } from 'vue';
import '@/assets/styles/home.css';
import cvPdf from '@/assets/Currículum_MIRIAM_DURAN_DAW.pdf'; // Importa el PDF

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
  <div>
    <div class="hero">
      <header class="hero-header">
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Proyectos</router-link>
          <router-link to="/cv">Curriculum</router-link>
        </nav>
      </header>
      <main class="hero-content">
        <h1><span class="highlight">Soy Miriam</span></h1>
        <p>una <em>programadora</em> web</p>
        <div class="hero-links">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>


        </div>
      </main>
    </div>

    <router-view />

    <!-- SECCIONES -->
    <section id="about" class="section scroll-fade about-section">
      <h2>Sobre mí</h2>
      <div class="about-content">
        <div class="about-left">
          <img src="@/assets/Miriam.png" alt="Miriam" class="about-img" />
          <a :href="cvPdf" download class="cv-btn">📄 Descargar CV Miriam Durán</a>
        </div>
        <div class="about-text">
  <p>
    Hola, soy <span class="highlight1">Míriam</span>, <strong>desarrolladora web en formación</strong> con un gran interés por el 
    <span class="highlight1">diseño</span>, la <span class="highlight1">programación</span> y las 
    <span class="highlight1">tecnologías digitales</span>.
  </p>

  <p>
    Con formación previa en <strong>Pedagogía</strong> y un <strong>máster en Recursos Humanos</strong>, he desarrollado mi carrera 
    en el ámbito administrativo. Sin embargo, mi <span class="highlight1">pasión por la informática</span> —presente desde que era pequeña— 
    me ha llevado a <strong>redireccionar mi camino profesional</strong> hacia el sector tecnológico, donde actualmente 
    curso <em>Desarrollo de Aplicaciones Web (DAW)</em> en la Universitat Oberta de Catalunya (UOC).
  </p>

  <div class="resaltado">
    💡 Me defino como una persona <strong>creativa</strong>, <strong>curiosa</strong> y <strong>persistente</strong>, con un gran interés 
    por el <em>aprendizaje constante</em> y la <em>resolución de problemas</em>.
  </div>
</div>

      </div>
    </section>

    <section id="skills" class="section scroll-fade">
      <div class="skills-box">
        <h2>Habilidades Técnicas</h2>
        <div class="skills-grid">
          <div class="skill-card"><img src="@/assets/html5.svg" alt="HTML"><span>HTML5</span></div>
          <div class="skill-card"><img src="@/assets/css3.svg" alt="CSS3"><span>CSS3</span></div>
          <div class="skill-card"><img src="@/assets/js.svg" alt="JS"><span>JavaScript</span></div>
          <div class="skill-card"><img src="@/assets/logo.svg" alt="Vue.js"><span>Vue.js</span></div>
          <div class="skill-card"><img src="@/assets/18133.png" alt="Git"><span>Git & GitHub</span></div>
          <div class="skill-card"><img src="@/assets/c++.svg" alt="C++"><span>C/C++</span></div>
          <div class="skill-card"><img src="@/assets/php.svg" alt="PHP"><span>PHP</span></div>
          <div class="skill-card"><img src="@/assets/java.png" alt="JAVA"><span>Java</span></div>
        </div>

        <div class="skills-column">
          <h2>Competencias</h2>
          <ul class="competencies-list">
            <li><span>📌 Metodología Scrum</span></li>
            <li><span>🤝 Trabajo en equipo</span></li>
            <li><span>🧠 Resolución de problemas</span></li>
            <li><span>🔧 Control de versiones (GitHub)</span></li>
            <li><span>💬 Comunicación</span></li>
          </ul>
        </div>
      </div>
    </section>
<section id="contact" class="section scroll-fade">
  <h2>Contacto</h2>
  <div class="contact-wrapper">
    <div class="contact-card">
      <div class="icon-circle">
        <img src="@/assets/gmail.svg" alt="Gmail" />
      </div>
      <div class="contact-info">
        <span class="contact-label">Correo</span>
        <a href="mailto:miriam.duranreyes@gmail.com">miriam.duranreyes@gmail.com</a>
      </div>
    </div>

    <div class="contact-card">
      <div class="icon-circle">
        <img src="@/assets/linkedin.svg" alt="LinkedIn" />
      </div>
      <div class="contact-info">
        <span class="contact-label">LinkedIn</span>
        <a href="https://www.linkedin.com/in/miriam-duran-reyes-6a1668101/" target="_blank" rel="noopener noreferrer">
          Miriam Durán Reyes
        </a>
      </div>
    </div>

    <div class="contact-card">
      <div class="icon-circle">
     </div>
      <div class="contact-info">
        <span class="contact-label">Teléfono</span>
        <a href="tel:+34123456789">+34 609 863 720</a>
      </div>
    </div>
  </div>
</section>


    <footer class="footer scroll-fade">
      <p>© 2024 Miriam Durán Reyes. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>
