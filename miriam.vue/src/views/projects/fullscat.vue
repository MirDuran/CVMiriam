<script setup>
import '@/assets/styles/home.css';
import '@/assets/styles/projects.css';
</script>

<template>
  <div class="project-page">
    <header class="hero-header2">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Proyectos</router-link>
        <router-link to="/cv">Curriculum</router-link>
      </nav>
    </header>

    <main class="project-main">
      <h1 class="project-title">Proyecto Fullscat</h1>

      <section class="project-description-box">
        <p class="project-intro">
          Este proyecto tiene como objetivo desarrollar una aplicación colaborativa, diseñando una plataforma que se centra en el <strong>voluntariado</strong>.
        </p>
        <p>
          Los voluntarios pueden participar en diferentes contextos, como organizaciones benéficas, ONGs, hospitales, refugios de animales, entre otros.
        </p>
      </section>

      <hr class="section-separator" />

            <section class="project-details">
                <h3>Aplicación de cliente (FRONTEND):</h3>
                <p>
                En esta sección, me encargo del desarrollo del frontend de la aplicación utilizando <strong>HTML5</strong> y <strong>JavaScript</strong>. La interfaz se diseñará con el framework CSS <strong>Bootstrap</strong>, que asegura una correcta presentación y experiencia de usuario. Además, se mejorará la interacción del cliente mediante el uso de diversas APIs de HTML5, que enriquecerán las funcionalidades de la plataforma.
                </p>
            </section>
                    <div class="box-style2">
                    <h3>Demostración Frontend</h3>
                    <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/drqxrN6or0Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                </div>
                <hr class="section-separator" />
            
                <div class="box-style">
                    <section class="project-details2">
                        <h3>Interfaz 1: Panel principal</h3>
                        <p>
                        Se muestran tarjetas diferenciadas por colores con las peticiones y ofertas de los voluntarios. Cada tarjeta presenta un resumen generado desde un array definido en <code>datos.js</code>, dependiendo de si se trata de una solicitud o una oferta.
                        </p>

                        <h3>Interfaz 2: Iniciar sesión</h3>
                        <p>
                        Se implementa un formulario sencillo para introducir el correo o usuario y contraseña. Se valida en el frontend si las credenciales coinciden con un usuario del archivo <code>datos.js</code>. Al iniciar sesión correctamente, el menú de navegación se actualiza para mostrar al usuario activo.
                        </p>

                        <h3>Interfaz 3: Gestión de usuarios</h3>
                        <p>
                        Incluye un formulario para registrar nuevos usuarios y una visualización de todos los usuarios existentes. Se permite también eliminar usuarios. La interacción es dinámica con JavaScript: los formularios no recargan la página y actualizan directamente los arrays en memoria.
                        </p>

                        <h3>Interfaz 4: Gestión de voluntarios</h3>
                        <p>
                        Similar a la interfaz de usuarios, esta sección cuenta con un formulario para crear nuevas peticiones u ofertas de voluntariado. Los datos se almacenan en el array <code>voluntariados</code> en <code>datos.js</code>. Se listan todos los voluntariados existentes junto al formulario con opción de eliminarlos.
                        </p>
                    </section>
                </div>

      <hr class="section-separator" />

      <section class="project-details">
        <h3>Aplicación de servidor (BACKEND):</h3>
        <p>
          El backend implementará una API REST utilizando <strong>NodeJS</strong> con <strong>ExpressJS</strong>, y se garantizará la persistencia de datos mediante una base de datos NoSQL (<strong>MongoDB</strong>). Se desarrolla a través de servicios web, lo que permite desacoplar el frontend. De esta forma, el cliente podría ser una web, una aplicación móvil, un smartTV, etc.
        </p>
                    <div class="box-style2">
                    <h3>Demostración Backend</h3>
                    <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/YYNQY7uvt7E"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
              </div>

                <hr class="section-separator" />  
              <h3>Implementación FullStack:</h3>
              <p>
                En esta fase, combino el frontend y el backend en una única solución. Además, se integrarán APIs de comunicación asíncrona entre el cliente y el servidor. Mediante el uso de <strong>Fetch</strong> y <strong>WebSockets</strong>, los usuarios podrán registrar su disponibilidad para ofrecer voluntariado (por ejemplo, acompañar a una persona mayor a caminar) y ver, en tiempo real, quién está interesado en recibir o prestar estos servicios voluntarios.
             </p>
               </section>
                  <hr class="section-separator" />  
               <p>  <div class="tech-used">🛠️ Tecnologías utilizadas: HTML5, CSS, Bootstrap, JavaScript, MongoDB, Node.js/Express.js, GraphQL, Postman, WebSockets Socket.io...</div>
                 </p>  
        
        <a href="https://github.com/MirDuran/Online-Store" target="_blank" rel="noopener noreferrer" class="github-link">
            Enlace a GitHub
        </a>
        
    </main>

    <footer class="footer scroll-fade">
      <p>© 2025 Miriam Durán Reyes. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>


<style scoped>
.hero-header2 {
  background-image: url('@/assets/fc3.PNG');
  background-size: cover;
  background-position: center;
  height: 300px; 
  display: flex;
  align-items: flex-end; 
  padding: 1rem;
  position: relative;
 border-radius: 14px;
  box-shadow:
    0 0 15px #f0c742cc;;
    
}
.project-page {
  background-color: #000;
  color: #eee;
  min-height: 100vh;
  padding-bottom: 4rem;
  font-family: 'Segoe UI', sans-serif;
}

.project-main {
  max-width: 900px;
  margin: 6rem auto 2rem auto;
  padding: 0 1.5rem;
}

 .box-style {
    background-color: #fcd944; 
    border-radius: 20px;
    padding: 30px 40px;
    max-width: 700px;
    margin: 40px auto;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    font-family: 'Georgia', serif;
    color: #222;
  }

  .box-style h3 {
    text-align: center;
    font-weight: 700;
    font-size: 1.8em;
    margin-bottom: 0.2em;
    position: relative;
  }

  .box-style h3::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: #222;
    margin: 0.5em auto 1.5em;
    border-radius: 2px;
  }

  .box-style p {
    font-size: 1.05em;
    line-height: 1.5;
    margin-bottom: 25px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

    .box-style2 {
        background-color:rgb(29, 26, 14); 
        border-radius: 20px;
        border-color: #f0c742;
        border-style: solid;
        padding: 30px 40px;
        max-width: 700px;
        margin: 40px auto;
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        font-family: 'Georgia', serif;
        color: #222;
    }
    
  .box-style2 h3 {
    color: #f0c742; 
    text-align: center;
    font-weight: 700;
    font-size: 1.8em;
    margin-bottom: 0.2em;
    position: relative;
  }

  .box-style2 h3::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: #f0c742;
    margin: 0.5em auto 1.5em;
    border-radius: 2px;
  }


  .box-style2 p {
    font-size: 1.05em;
    line-height: 1.5;
    margin-bottom: 25px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

  }


  code {
    background-color: #222;
    color: #fcd944;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
  }

  .project-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #f0c742;
  text-align: center;
  margin-bottom: 2rem;
}

.project-title::after
{
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background-color: #f0c742;
  margin: 1rem auto;
  border-radius: 2px;
}
.section-separator {
  width: 100%;
  border: none;
  border-top: 1px solid #ccc; 
  margin: 2rem 0; 
}


/* Recuadro amarillo para la descripción */
.project-description-box {
  background-color: #f0c742;
  color: #000;
  border-radius: 20px;
  border-color: white;
  border-style: solid;
  padding: 2rem 2rem;
  margin-bottom: 3rem;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.6;
  text-align: justify;
  
}

/* Detalles del proyecto */
.project-details {
  color: #eee;
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 3rem; 
}

.project-details p {
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.project-details h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #f0c742;
  margin: 1.5rem 0 0.8rem 0;
  font-weight: 700;

}
.tech-used {
  font-size: 0.95em;
  font-style: italic;
  color: #f0c742;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 40px 12px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-left: 4px solid #f0c742;
  border-radius: 6px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.github-link {
  background-color: #f0c742;
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 40px;
  box-shadow: 0 0 15px #f0c742cc;
  transition: all 0.3s ease;
  text-align: center;
  margin: 0 auto 3rem auto;
  display: block;
  width: max-content;
}

.github-link:hover {
  background-color: #d4af37;
  box-shadow: 0 0 25px #d4af37cc;
  color: #000;
}




/* Responsive */
@media (max-width: 768px) {
  .project-title {
    font-size: 2.5rem;
  }

  .project-img {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 2rem;
  }

  .project-description-box,
  .project-details {
    font-size: 1rem;
  }

  .project-img {
    height: 160px;
  }
}
</style>
