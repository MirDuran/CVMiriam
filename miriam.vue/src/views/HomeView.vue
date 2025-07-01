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
    <!-- Lado izquierdo: imagen + CV -->
    <div class="about-left">
  <img src="@/assets/Miriam.png" alt="Miriam" class="about-img" />
      <a
        href="/src/assets/Currículum_MIRIAM_DURAN_DAW.pdf"
        download
        class="cv-btn"
      >
        📄 Descargar CV Miriam Durán
      </a>
    </div>

    <!-- Lado derecho: texto -->
    <div class="about-text">
      <p>
        Soy desarrolladora web con formación en Desarrollo de Aplicaciones Web (DAW).
        Me encanta aprender cosas nuevas, programar interfaces bonitas y funcionales, y trabajar en equipo.
      </p>
      <p>
        En mi tiempo libre disfruto dibujar, explorar herramientas creativas y mejorar mis habilidades técnicas.
      </p>
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
        <li><span> 📌 Metodología Scrum</span></li>
        <li><span> 🤝 Trabajo en equipo</span></li>
        <li><span> 🧠 Resolución de problemas</span></li>
        <li><span> 🔧 Control de versiones (Github)</span></li>
        <li><span> 💬 Comunicación</span></li>
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
          <a href="mailto:miriam.duranreyes@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Miriam,">miriam.duranreyes@gmail.com</a>
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
    </div>
  </section>

    <footer class="footer scroll-fade">
      <p>© 2024 Miriam Durán Reyes. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

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

<style scoped>
/* HERO SECTION */
.hero {
  width: 100vw;
  height: auto;
  min-height: 60vh;
  background-image: url('@/assets/opc5.png');
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center center; 
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
}



.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 50px;
}

.nav {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 0.6rem 1.4rem;
  border-radius: 999px;

  display: flex;
  gap: 1.2rem;
}

.nav a {
  background-color: #f0e07b;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 1.1rem;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
}

.nav a:hover {
  background-color: #f8d848;
  color: #1b190f;
  transform: scale(1.05) translateY(-1px);
}

.hero-content {
  
  text-align: left;
  padding-bottom: 2rem;
}

.hero-content h1 {
  font-size: 3rem;
  font-family: 'Pacifico', cursive;
  margin: 0;
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.hero-content p {
  font-size: 1.3rem;
  margin-top: 1rem;
  color: rgb(12, 6, 6);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.hero-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-links a {
  color: white;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
}

.hero-links a:hover {
  background-color: white;
  color: #cf2b85;
}

.highlight {
  font-family: 'DM Serif Display', serif;
  font-weight: 700;
  font-size: 3.5rem;
  color: #111;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.15);
}




.hero-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-links a {
  color: rgb(0, 0, 0);
  font-weight: 600;
  text-decoration: none;
  padding: 0.6rem 1.4rem;
  border: 2px solid #ffffff;
  border-radius: 30px;
  background-color: transparent;
  text-shadow: 0 0 5px #fff;
  box-shadow:
    0 0 5px #ffd70088,
    0 0 10px #ffd70055;
  transition: all 0.3s ease;
}

.hero-links a:hover {
  background-color: #ffd9009a;
  color: #000;
  text-shadow: none;
  box-shadow:
    0 0 10px #ffffffcc,
    0 0 20px #ecda73aa,
    0 0 30px #ffd70077;
}



/* SECCIONES */
.section {
  padding: 6rem 2rem;
  text-align: center;
  background: white;
  color: #222;
  border-top: 4px solid #f0f0f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease
  
}

#about {
  background: linear-gradient(180deg, #000000 0%, #000000 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-top: 4px solid #f0f0f0;
  
}

#skills {
  background: #000;
  padding: 5rem 2rem;
  color: white;
  display: flex;
  justify-content: center;
}

#contact {
  background: linear-gradient(180deg, #000000, #000000);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

#about h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: #f0c742;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(240, 199, 66, 0.4);
  letter-spacing: 1px;
  position: relative;
}

#about h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #f0c742;
  margin: 0.5rem auto 0;
  border-radius: 4px;
}


  #skills h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: rgb(12, 7, 7);;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(240, 199, 66, 0.4);
  letter-spacing: 1px;
  position: relative;
}

#skills h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #000000;
  margin: 0.5rem auto 0;
  border-radius: 4px;
}
#contact h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: #f0c742;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(240, 199, 66, 0.3);
  letter-spacing: 1px;
  position: relative;
}

#contact h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #f0c742;
  margin: 0.5rem auto 0;
  border-radius: 4px;
}

.about-section {
  background-color: white;
  color: #222;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.about-left {
  flex: 1;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.about-img {
  position: relative;
  z-index: 1;
  width: 250px;
  height: 250px;
  border-radius: 20%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 0 15px rgb(255, 255, 255);
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease, border-color 0.3s ease;
  will-change: transform, box-shadow, filter, border-color;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

}
.about-img:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.137);
  transition: transform 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  filter: brightness(1.1);
  border-color: #f0c742;
  box-shadow:
    0 0 10px #f0c742,
    0 0 20px #f0c742,
    0 0 30px #f0c742;
  will-change: transform, box-shadow;

}

.cv-btn {
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: #f0c742;
  color: rgb(26, 12, 12);
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cv-btn:hover {
  background-color: #f8bd3e;
  color: #1b190f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow:
    0 0 10px #f0c742,
    0 0 20px #f0c742,
    0 0 30px #f0c742;
  transition: all 0.3s ease;
  will-change: transform, box-shadow;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  font-family: 'Segoe UI', sans-serif;
   
}

.about-text {
  flex: 2;
  max-width: 600px;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.8;
}
/* HABILIDADES  */
.skills-box {
  background-color: #FFDE59;
  border-radius: 40px;
  padding: 4rem 6rem;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  box-shadow: none;
  border: 3px solid white;
}
.skills-box h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffefef;
  font-family: 'DM Serif Display', serif;
  position: relative;
}

.skills-box h2::after {
  content: '';
  width: 60px;
  height: 3px;
  background-color: #111;
  display: block;
  margin: 0.5rem auto 1rem auto;
  border-radius: 999px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-items: center;
}

.skill-card {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 1rem;
  width: 100px;
  height: 100px;
  text-align: center;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.skill-card img {
  width: 40px;
  margin-bottom: 0.5rem;
}

.skill-card:hover {
  background-color: #000;
  box-shadow:
    0 0 10px #ffffff,
    0 0 20px #fdfcf9,
    0 0 30px #f0c742;
  transform: translateY(-4px) scale(1.05);
  color: #ffd700;
}

.split-layout {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

/* COMPETENCIAS */
.skills-column {
  flex: 1;
  min-width: 280px;
}

.competencies-list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.competencies-list li {
  position: relative; /* importante para ::before */
  background-color: #222;
  color: white;
  padding: 0.8rem 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 400;
  overflow: hidden;
  transition: 
    color 0.4s ease,
    font-weight 0.3s ease,
    text-shadow 0.3s ease,
    border-color 0.3s ease;
  border: 2px solid transparent;
  z-index: 1;
}

.competencies-list li::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #f0c742;
  border-radius: 50px;
  z-index: 0;
  transition: left 0.4s ease-in-out;
}

.competencies-list li:hover::before {
  left: 0;
}

.competencies-list li:hover {
  color: #000;
  font-weight: 700;
  border-color: white;
  text-shadow: 0 0 6px #f0c742;
}

.competencies-list li span {
  position: relative;
  z-index: 1;
}

.competencies-list li.show {
  opacity: 1;
  transform: translateX(0);
}

/* CONTACT */
.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: #111;
  padding: 1.2rem 2rem;
  border-radius: 50px;
  box-shadow: 0 0 20px rgba(240, 199, 66, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 500px;
  width: 100%;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 25px rgba(240, 199, 66, 0.35);
}

.icon-circle {
  background-color: #f0c74222;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle img {
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 0 3px #f0c742cc);
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-label {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.contact-info a {
  color: #f0c742;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

/* Hover efecto */
.contact-info a:hover {
  color: white;
  text-shadow: 0 0 5px #f0c742;
}

/* Eliminar fondo verde al seleccionar texto (navegadores modernos) */
.contact-card *::selection {
  background-color: transparent;
  color: inherit;
}

/* Compatibilidad con Firefox */
.contact-card *::-moz-selection {
  background-color: transparent;
  color: inherit;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 600px) {
  .contact-card {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 1.2rem;
    gap: 1rem;
  }

  .icon-circle {
    align-self: center;
  }

  .contact-info {
    align-items: center;
    width: 100%;
  }

  .contact-info a {
    word-break: break-word;
    text-align: center;
  }
}

/* SCROLL FADE */
.scroll-fade {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
  will-change: opacity, transform;
}

.scroll-fade.show {
  opacity: 1;
  transform: translateY(0);
}



/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .nav {
    flex-direction: column;
    gap: 1rem;
  }

  .cv-btn {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Segoe UI', sans-serif;
  scroll-behavior: smooth;
  background-color: white;
}
</style>
