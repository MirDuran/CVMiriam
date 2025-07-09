<script setup>
import '@/assets/styles/home.css';
import '@/assets/styles/projects.css';
import diagramaPDF from '@/assets/DIAGRAMA1.PDF';

import { ref } from 'vue';
const modalVisible = ref(false);


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
      <h1 class="project-title">Proyecto Online Store</h1>

      <section class="project-description-box">
        <p class="project-intro">
El proyecto <span class="highlight1">"Online Store"</span> surge como respuesta a la necesidad de una empresa de comercio electrónico de contar con
una herramienta eficaz para gestionar sus operaciones principales: <span class="highlight1">artículos, clientes y pedidos</span>. 
Parto del diseño inicial del modelo de datos y los requisitos funcionales siguiendo principios de programación orientada a objetos. </p>
        <p>
Incorporo la persistencia de datos mediante <span class="highlight1">bases de datos relacionales</span> y se utiliza tecnologías <span class="highlight1">ORM</span> para optimizar la gestión de
entidades. Finalmente, cierro el proyecto con el desarrollo de <span class="highlight1">una interfaz gráfica en entorno de escritorio</span>, logrando
una aplicación robusta y modular (gracias al patrón MVC) que responde a los objetivos planteados y está
preparada para su uso real.            
        </p>
      </section>
                    <div class="pdf-container">
                    <iframe
                        :src="diagramaPDF"
                        type="application/pdf"
                        width="100%"
                        height="600px"
                        style="border: none;"
                    >
                    </iframe>
                    </div>

      <hr class="section-separator" />

                      <div class="box-style">
                    <section class="project-details2">
                        <h3>Paso 1: Implementación Java</h3>
                        <p>
                        Implementar estructuras dinámicas de datos y el modelo estático de clases en lenguaje <code>Java</code>, aplicar el patrón de diseño MVC, y realizar pruebas unitarias utilizando <code>JUnit</code>, todo ello utilizando un sistema de control de versiones.                         </p>

                        <h3>Paso 2: Persistencia de datos</h3>
                        <p>Aplicar la persistencia en bases de datos usando los patrones de diseño DAO y Factory. Se diseña la estructura de base de datos con <code>MySQL</code></p>

                        <h3>Paso 3: Implementación mediante ORM</h3>
                        <p>
                        Aplicar la persistencia en bases de datos mediante mapeo ORM manteniendo el patrón de diseño MVC. Utilización de <code>Hibernate</code> y definición de nuevas dependencias Maven

                        </p>

                        <h3>Paso 4:  Implementación de la aplicación de escritorio con interfaz gráfica</h3>
                        <p>
                        Implementar una aplicación de escritorio con interfaz gráfica utilizando <code>JavaFX</code> y manteniendo el patrón de diseño MVC
                        </p>
                    </section>
                </div>
     <hr class="section-separator" />

<section class="project-details">
  <h3>1. Implementación Java</h3>

  <p>
    En este proyecto he trabajado en la <strong>implementación de clases en Java</strong> para simular una tienda online. Para el control de versiones, creé un repositorio en <strong>GitHub</strong> y seguí una estructura basada en Git Flow para organizar las ramas del desarrollo.
  </p>

  <p>
    A partir del <strong>diagrama de clases UML</strong> proporcionado, implementé un modelo estático adaptando y simplificando algunos aspectos para que fueran más prácticos y funcionales. <strong>Utilicé el patrón de diseño MVC</strong> para organizar el código, separando claramente la lógica del modelo, la vista y el controlador.
  </p>

  <p>
    Hice uso de <strong>Java Generics</strong> para crear métodos reutilizables y flexibles, como los de impresión de listas o conversión de datos. También implementé un <strong>control de excepciones</strong> robusto mediante bloques <code>try/catch</code> y condicionales,  para evitar errores críticos.
  </p>
</section>

<div class="box-style3">
  <section class="project-details2">
    <h3>Desarrollé tres clases principales:</h3>
    <ul>
      <li><strong>Artículo:</strong> código, descripción, precio y stock.</li>
      <li><strong>Cliente:</strong> nombre, domicilio, NIF, email y categoría.</li>
      <li><strong>Pedido:</strong> número, cliente, artículo, cantidad, fecha, envío, precio y días de preparación.</li>
    </ul>
  </section>
</div>

<section class="project-details">
  <p>
    Precargué datos de ejemplo en memoria usando colecciones como <strong>ArrayList y LinkedHashMap</strong> para gestionar artículos, clientes y pedidos. Además, diseñé menús interactivos para gestionar cada tipo de entidad. <strong>(CRUD)</strong>
  </p>

  <p>
    Finalmente, realicé pruebas unitarias con <strong>JUnit</strong> para asegurar el correcto funcionamiento de los modelos.
</p>
      <p>Aquí dejo un vídeo de demostración del código:</p>
</section>
 <div class="box-style2">
                    <h3>Demostración por consola</h3>
                    <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/ncGhkoodUj8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
              </div>
                <p> 
                    <div class="tech-used">🛠️ Tecnologías utilizadas: Java, JDBC, MVC, Git, JUnit</div>
                </p>  
        <hr class="section-separator" />
      <section class="project-details">
   
            <h3>2. Persistencia de datos:</h3>
            <p>
                Implementé la persistencia de datos en una base de datos <strong>MySQL</strong> usando <strong>Java</strong> y <strong>JDBC</strong>. Diseñé la estructura con claves autonuméricas y restricciones <code>UNIQUE</code>, y utilicé <code>PreparedStatement</code> para evitar inyecciones SQL.
            </p>
            <p>
                Apliqué los patrones <strong>DAO</strong> y <strong>Factory</strong> para organizar el acceso a datos y facilitar la configuración del programa. Gracias a la <strong>fábrica de conexiones y modelos</strong>, puedo alternar fácilmente entre trabajo local o con base de datos.
            </p>
            <p>
                También desarrollé <strong>transacciones</strong> para asegurar la integridad en operaciones como pedidos y stock, y programé <strong>procedimientos almacenados</strong> como otra alternativa a las consultas desde Java.
            </p>
            <p>
                Finalmente, os dejo un vídeo para demostrar el funcionamiento del programa.
            </p>
        
                    <div class="box-style2">
                    <h3>Demostración persistencia en Artículos</h3>
                    <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/Y1qnv2-6Pyo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
              </div>
                              <p> 
                    <div class="tech-used"><strong>🛠️ Tecnologías utilizadas: Java, JDBC, MySQL, MVC, Patrón DAO</strong></div>
                </p>  

                <hr class="section-separator" />  

                <h3>3. Implementación con ORM (JPA + Hibernate)</h3>
                    <p>
                    En esta fase del proyecto migré completamente la lógica de persistencia desde <strong>JDBC</strong> hacia el uso de un <strong>ORM</strong>, utilizando <strong>JPA (Java Persistence API)</strong> como especificación y <strong>Hibernate</strong> como proveedor de implementación. Este cambio me permitió <strong>reducir la complejidad del código</strong> y mejorar la mantenibilidad.
                    </p>

                    <p>
                    Reemplacé las operaciones manuales con SQL por <strong>entidades Java</strong> anotadas, como <code>@Entity</code>, <code>@Id</code> o <code>@OneToMany</code>, y configuré adecuadamente el archivo <code>persistence.xml</code> para definir la unidad de persistencia y los parámetros de conexión a la base de datos.
                    </p>
                    <div class="box-style3">
                    <section class="project-details2">
                        <h3>Mejoras implementadas:</h3>
                            <ul>
                            <li>Creación de <strong>DAOs específicos para JPA</strong>, conservando compatibilidad con los DAO anteriores mediante interfaces comunes.</li>
                            <li>Desarrollo de un <strong>EntityManagerProvider</strong> y un gestor de transacciones para asegurar operaciones coherentes.</li>
                            <li>Uso del patrón <strong>Factory</strong> para seleccionar entre JDBC o JPA de forma flexible.</li>
                            <li>Optimización de los <strong>logs y configuraciones</strong> de Hibernate para una experiencia más clara en consola.</li>
                            </ul>
                    </section>
                    </div>
                <p>
                    Esta transición permitió que la aplicación fuese más <strong>modular y escalable</strong>, respetando los principios del patrón <strong>MVC</strong> y favoreciendo la separación de responsabilidades.
                </p>

                <p>
                    Grabé un vídeo de demostración donde muestro cómo funciona el sistema usando Hibernate como motor de persistencia.
                </p>
   
                    <div class="box-style2">
                            <h3>Implementación mediante ORM</h3>
                            <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/SHzVHk2hAe0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                 <p> 
                    <div class="tech-used"><strong>🛠️ Tecnologías utilizadas: JPA, Hibernate, Java, ORM, MVC</strong></div>
                </p>  
                  <hr class="section-separator" />  
       
                <h3>4.  Implementación de la aplicación de escritorio con interfaz gráfica</h3>
                    <p>
                     En este producto migré mi aplicación desde consola hacia una interfaz gráfica utilizando <strong>JavaFX</strong>, con el objetivo de ofrecer una experiencia más visual para el usuario.
                    </p>

                    <p>
                     En primer lugar, configuré las dependencias necesarias en el archivo <code>pom.xml</code> para trabajar con JavaFX dentro de un entorno <strong>Maven</strong>. A continuación, desarrollé nuevas clases, controladores y archivos <code>FXML</code> para las distintas vistas, manteniendo el patrón de diseño <strong>MVC</strong> que ya había aplicado en versiones anteriores.
                    </p>

                    <div class="box-style3">
                        <h4>Aspectos técnicos destacados:</h4>
                        <ul>
                        <li>Implementé un <strong>gestor de escenas</strong> que me permite cambiar de ventana de forma eficiente.</li>
                        <li>Desarrollé una <strong>fábrica de vistas</strong> (<code>FactoryVista</code>) para lanzar la aplicación en modo consola o gráfico según necesidad.</li>
                        <li>Diseñé interfaces gráficas para gestionar clientes, artículos y pedidos.</li>
                        <li>Utilicé <strong>diálogos gráficos</strong> para mostrar alertas, formularios e información al usuario de forma clara.</li>
                        </ul>
                    </div>

                    <p>
                     Mantengo la <strong>persistencia con JPA e Hibernate</strong> implementada previamente, integrándola en la nueva interfaz sin necesidad de modificar la lógica del modelo o los controladores existentes. Esto asegura una migración limpia.
                    </p>

                    <p>
                     Finalmente, os dejo un vídeo demostrativo en el que muestro el funcionamiento de la aplicación en su versión de escritorio.
                    </p>
                    <div class="box-style2">
                            <h3>Interfaz gráfica JavaFX</h3>
                            <iframe width="100%" height="315"
                            src="https://www.youtube.com/embed/FG4_L2b7rW4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                        <p> 
                            <div class="tech-used"><strong>  🛠️ Tecnologías utilizadas: JavaFX, FXML, JPA, Hibernate, Maven, MVC
                            </strong></div>
                        </p> 
             </section>
        
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
  background-image: url('@/assets/jv2.PNG');
  background-size: left;
  background-position: right;
  height: 300px;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  position: relative;
  border-radius: 14px;
  box-shadow: 0 0 15px #1d1a0ecc;
}

.project-page {
  background-color: #f0c742e1;
    background-image: linear-gradient(to bottom, #f0c742e1, #ffffff);
  color: #111;
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
  background-color: #111;
  border-radius: 20px;
  padding: 30px 40px;
  max-width: 700px;
  margin: 40px auto;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
  font-family: 'Georgia', serif;
  color: #f0c742;
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
  background-color: #f0c742;
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
  color: #f0c742;
}

.box-style2 {
  background-color: #ffffff;
  border-radius: 20px;
  border: 2px solid #1d1a0e;
  padding: 30px 40px;
  max-width: 700px;
  margin: 40px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Georgia', serif;
  color: #111;
}

.box-style2 h3 {
  color: #1d1a0e;
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
  background-color: #1d1a0e;
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
  color: #1d1a0e;
}


.box-style3 {
  background-color: #f0c74288;
  border-color: #000000;
    border-style: solid;
  border-radius: 20px;
  padding: 30px 40px;
  max-width: 700px;
  margin: 40px auto;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
  font-family: 'Georgia', serif;
  color: #030301;
}

.box-style3 h3 {
  text-align: center;
  font-weight: 700;
  font-size: 1.8em;
  margin-bottom: 0.2em;
  position: relative;
}

.box-style3 h3::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background-color: #000000;
  margin: 0.5em auto 1.5em;
  border-radius: 2px;
}

.box-style3 p {
  font-size: 1.05em;
  line-height: 1.5;
  margin-bottom: 25px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: #f0c742;
}

code {
  background-color: #ffffff;
  color: #302a18;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}

.project-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #111;
  text-align: center;
  margin-bottom: 2rem;
}

.project-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background-color: #111;
  margin: 1rem auto;
  border-radius: 2px;
}

.section-separator {
  width: 100%;
  border: none;
  border-top: 1px solid #000000;
  margin: 2rem 0;
}


/* Recuadro de descripción invertido */
.project-description-box {
  background-color: #111;
  color: #ffffff;
  border-radius: 20px;
  border-color: #e4c745;
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
  margin: 0 auto 3rem auto;
  max-width: 100%;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 0 15px #1d1a0ecc;
  object-fit: cover;
  height: 200px; /* miniatura */
  
  cursor: zoom-in;
  transition: filter 0.3s ease;
}
.img-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex; 
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.pdf-container {
  margin: 2rem auto;
  max-width: 900px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
}


/* Detalles del proyecto */
.project-details {
  color: #111;
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
  color: #1d1a0e;
  margin: 1.5rem 0 0.8rem 0;
  font-weight: 700;
}

.tech-used {
  font-size: 0.95em;
  font-style: italic;
  color: #f0c311;
  background-color:  rgba(0, 0, 0, 0.856);
  padding: 20px 12px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-left: 4px solid #f0c311;
  border-radius: 6px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.github-link {
  display: inline-block;
  background-color: #111;
  color: #f0c742;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 40px;
  box-shadow: 0 0 15px #1d1a0ecc;
  transition: all 0.3s ease;
  text-align: center;
  margin: 0 auto 3rem auto;
  display: block;
  width: max-content;
}

.github-link:hover {
  background-color: #fcd944;
  box-shadow: 0 0 25px #cabf25;
  color: #080806;
}

.footer {
  text-align: center;
  color: #333;
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
