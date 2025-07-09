<script setup>
import '@/assets/styles/home.css';
import '@/assets/styles/projects.css';
import imagen from '@/assets/nw2.PNG';

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
      <h1 class="project-title">Proyecto Isla Transfers</h1>

      <section class="project-description-box">
        <p class="project-intro">
        Nuestra empresa, <strong>Isla Transfers</strong>, se dedica a realizar traslados de viajeros del aeropuerto a los hoteles de la isla y viceversa. </p>
   
        <p>
        En esta aplicación podrán intervenir los clientes particulares que reservan a través de la web y los clientes corporativos que son los hoteles que reservan en nombre de sus clientes. Los pagos se realizan siempre en efectivo en el momento del trayecto. 
        </p>
        </section>
        <div class="image-wrapper">
            <img :src="imagen" alt="Imagen de proyecto" class="project-img" />
        </div>
        <div class="tech-used2">
        <p>
        Estamos en un importante crecimiento y disponemos de varios vehículos. Como la gestión diaria se está complicando hemos decidido digitalizarnos y permitirnos a través de la web la reserva por parte de los clientes así como la modificaciones pertinentes. 
        </p>
        </div>

      <hr class="section-separator" />

                <div class="box-style">
                    <section class="project-details2">
                        <h3>1. Aplicación de reserva y gestión de traslados</h3>
                        <p>
                        Durante el desarrollo de esta aplicación web “Isla Transfers”, se ha seguido una arquitectura MVC utilizando <code>PHP</code> puro, y una base de datos <code>MySQL</code>, gestionada con Docker y sincronizada más tarde con AWS La finalidad principal del proyecto es proporcionar una plataforma funcional para la gestión de reservas de trayectos entre hoteles y aeropuertos, con distintos tipos de usuarios y funcionalidades según el usuario escogido. </p>

                        <h3>2. Desarrollo de una aplicación de gestión de transferencias con Laravel</h3>
                        <p>
                        <code>Laravel</code> es un framework de PHP que he utilizado en una segunda fase donde sigue el patrón de diseño MVC (Modelo-Vista-Controlador), lo que me permite tener una buena organización  del código y facilitarme el mantenimiento de las aplicaciones web. Se estructura la lógica de negocio, la interfaz del usuario y la gestión de la base de datos.</p>
                        <h3>3. Creación de una web institucional donde se muestran los servicios realizados</h3>
                        <p>
                        Se realiza la instalación de un <code>Wordpress</code> y la creación de una web institucional donde habrá una página que mostrará la información estadística sobre los transfers realizados. </p>
                     </section>
                </div>

      <hr class="section-separator" />
            <section class="project-details">
                <h2>1. Aplicación de reserva y gestión de traslados</h2>
                <h3>PHP</h3>
                            <p>
                                He desarrollado el backend de la aplicación "Isla Transfers" utilizando <strong>PHP puro</strong> con arquitectura <strong>MVC</strong>, además de una base de datos <strong>MySQL</strong> gestionada con <strong>Docker</strong> y sincronizada con <strong>AWS</strong>. Mi objetivo ha sido crear una plataforma funcional para gestionar reservas de transfers entre hoteles y aeropuertos, diferenciando roles de usuario.
                            </p>
                            <p>
                                Realicé cambios importantes en la base de datos: creé tablas específicas para administradores y usuarios corporativos, añadí nuevos campos para personalizar formularios según el tipo de trayecto y aseguré que los datos se adapten a distintos escenarios.
                            </p>
                            <p>
                                Implementé el sistema de <strong>registro</strong> y <strong>login</strong>, asegurando la autenticación según tipo de usuario (administrador, corporativo o cliente). Aseguré validaciones y seguridad en las contraseñas usando <code>password_hash()</code>.
                            </p>
                            <p>
                                Desarrollé el <strong>panel de administrador</strong> desde donde gestiono reservas, usuarios, aeropuertos, zonas, hoteles y vehículos. Cada módulo permite crear, editar y eliminar datos fácilmente.
                            </p>
                            <p>
                                También implementé el <strong>panel de usuario</strong>, que permite ver y crear reservas, así como editar el perfil. Me aseguré de que los usuarios no puedan modificar o eliminar reservas con menos de 48 horas de antelación.
                            </p>
                            <p>
                                En la sección de <strong>perfil</strong>, permití que los usuarios actualicen su información personal de forma segura, sincronizando los cambios con la base de datos y la sesión activa.
                            </p>

            </section>
                    <div class="box-style2">
                    <h3>Aplicación de reserva y gestión de traslados con PHP</h3>
                    <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/PJ9f2F6pXNQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                </div>

                    <p>  
                        <div class="tech-used2">🛠️ Tecnologías utilizadas: PHP, MySQL, Docker, AWS, HTML5, CSS,...</div>
                    </p>  
        
                    <a href="https://github.com/MirDuran/PHP_IslaTransfer" target="_blank" rel="noopener noreferrer" class="github-link">
                        Enlace a GitHub (PHP)
                    </a>
            

    <hr class="section-separator" />
      <section class="project-details">
                <h2>2.  Desarrollo de una aplicación de gestión de transferencias con Laravel</h2>
                <h3>Laravel</h3>
                <p>
                    En el desarrollo de esta aplicación utilicé <strong>Laravel</strong>, un framework de <strong>PHP</strong> que sigue el patrón <strong>MVC</strong> (Modelo-Vista-Controlador), lo que me permitió organizar mejor el código y facilitar su mantenimiento. Implementé toda la lógica del backend utilizando <strong>controladores</strong>, <strong>modelos Eloquent</strong> para el acceso a base de datos <strong>MySQL</strong> y <strong>vistas Blade</strong> para generar HTML dinámico.
                </p>
                <p>
                    Definí las <strong>rutas web</strong> y apliqué <strong>middleware</strong> personalizados para proteger accesos según el tipo de usuario (viajero, corporativo o administrador). También configuré <strong>sesiones</strong> y realicé validaciones de formularios tanto del lado del servidor como en las vistas, mostrando mensajes de error claros.
                </p>
                <p>
                    Para la seguridad, apliqué protección automática contra <strong>CSRF</strong>, usé <strong>bcrypt</strong> para el hashing de contraseñas y configuré <strong>guards</strong> específicos para cada tipo de usuario. Además, implementé <strong>almacenamiento en caché</strong> para mejorar el rendimiento, <strong>Monolog</strong> para la gestión de logs, y generación de respuestas en <strong>JSON</strong> para futuras integraciones con APIs.
                </p>
                <p>
                    También utilicé herramientas como <strong>Str::random</strong> para generar identificadores únicos, y diseñé el sistema teniendo en cuenta la escalabilidad, reutilización de código y facilidad de extensión.
                </p>
            </section>
                    <div class="box-style2">
                    <h3>2. Desarrollo de una aplicación de gestión de transferencias con Laravel</h3>
                    <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/IdM-63d00EI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
              </div>
              
                    <p>  
                        <div class="tech-used2">🛠️ Tecnologías utilizadas: Laravel, MySQL, Docker, AWS, HTML5, CSS,...</div>
                    </p>  
        
                    <a href="https://github.com/MirDuran/PHP_IslaTransfer" target="_blank" rel="noopener noreferrer" class="github-link">
                        Enlace a GitHub (Laravel)
                    </a>

                <hr class="section-separator" />  
              <h3>Implementación FullStack:</h3>
              <p>
                En esta fase, combino el frontend y el backend en una única solución. Además, se integrarán APIs de comunicación asíncrona entre el cliente y el servidor. Mediante el uso de <strong>Fetch</strong> y <strong>WebSockets</strong>, los usuarios podrán registrar su disponibilidad para ofrecer voluntariado (por ejemplo, acompañar a una persona mayor a caminar) y ver, en tiempo real, quién está interesado en recibir o prestar estos servicios voluntarios.
             </p>
          
               <p>  <div class="tech-used2">🛠️ Tecnologías utilizadas: PHP, MySQL, Docker, AWS, CSS,...</div>
                 </p>  
        
                <a href="https://github.com/MirDuran/Fullstack" target="_blank" rel="noopener noreferrer" class="github-link">
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
  background-image: url('@/assets/nw1.PNG');
  background-size: cover;
  background-position: center;
  height: 200px; 
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

/* Imagen con resalte y sombra */
.project-img {
  display: block;
  margin: 0% auto 3rem auto;
  max-width: 100%;
  border-radius: 14px;
  box-shadow:
    0 0 15px #f0c742cc;
  object-fit: cover;
  height: 280px;
  width: auto;
  transition: filter 0.3s ease;
}

.project-img:hover {
  filter: brightness(1.1);
}

.project-img2 {
  display: block;
  margin: 0 auto 3rem auto;
  max-width: 100%;
  border-radius: 14px;
  box-shadow:
    0 0 15px #f0c742cc;
  object-fit: cover;
  height: 780px;
  width: auto;
  transition: filter 0.3s ease;
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
.tech-used2 {
  font-size: 1.1em;
  font-style: italic;
  font-weight: 500;
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
    text-align: center;
}

.github-link {
  display: inline-block;
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

.footer {
  text-align: center;
  color: #888;
  margin-top: 4rem;
  font-size: 0.9rem;
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
