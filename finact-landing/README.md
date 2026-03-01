# Portafolio Personal - Steven Saenz

## 1. Información General
- **Nombre del proyecto:** Portafolio Personal Interactivo
- **Nombre del estudiante:** Steven Saenz
- **Fecha:** Marzo 2026
- **Curso:** Técnico en Plataforma y Aplicaciones

## 2. Descripción del proyecto
**¿Qué hace el proyecto?**
Es una tarjeta de presentación digital interactiva tipo "Link in Bio" o portafolio de una sola página, donde se exponen las habilidades blandas ("Soft Skills") y duras ("Hard Skills") del perfil profesional, en este caso, de Steven Saenz.

**¿Qué problema soluciona?**
Resuelve la necesidad de tener una presencia profesional moderna y rápida en la web que pueda ser compartida mediante un único enlace a reclutadores, ofreciendo un resumen visual e impactante de las capacidades, educación y un método directo de contacto e incluso descarga de Currículum Vitae.

**¿Para quién está pensado?**
Está pensado para reclutadores de talento humano (RRHH), empresas tecnológicas, clientes independientes buscando servicios de desarrollo/diseño/edición de video, o compañeros y educadores del ámbito académico.

## 3. Tecnologías utilizadas
* **HTML5:** Para la estructura semántica de la tarjeta profesional.
* **CSS3:** Para la estilización completa, implementando diseño "Glassmorphism" (vidrio esmerilado oscuro), grillas (CSS Grid), Flexbox y animaciones avanzadas en la interfaz y el fondo (sin utilizar frameworks externos para maximizar el aprendizaje).
* **JavaScript:** Para agregar la funcionalidad de efecto 3D dinámico (Tilt) manejado por el ratón, animaciones de carga progresiva de elementos y estados interactivos de botones.
* **Font Awesome:** Para la iconografía vectorial del perfil profesional.
* **Git y GitHub:** Para el control de versiones, alojamiento (hosting) de código fuente y publicación futura mediante GitHub Pages.

## 4. Estructura del proyecto
```text
/finact-landing
 ├── index.html           # Estructura principal, contiene el "Markup" de la tarjeta de presentación personal.
 ├── style.css            # Archivo de estilos principal. Define colores, animaciones, tipografías y el estilo Glassmorphism.
 ├── script.js            # Archivo de lógica interactiva. Maneja el evento de rotación 3D e interactividad de UI.
 ├── favicon.svg          # Ícono vectorial de la pestaña del navegador diseñado con código SVG.
 ├── img/                 # Directorio de recursos multimedia.
 │   └── WhatsApp Image...# Fotografía de perfil del estudiante.
 └── README.md            # Documentación general y requisitos del proyecto final.
```

## 5. Funcionalidades
1. **Interfaz Multipantalla/Responsiva:** Se adapta inteligentemente y de forma estética tanto a pantallas de escritorio como a teléfonos móviles.
2. **Reacción Interactiva 3D (Tilt Effect):** La tarjeta detecta la posición del ratón en la pantalla y se inclina (rota) creando un efecto 3D inmersivo.
3. **Fondo Animado Complejo:** Elementos visuales (orbes) que flotan y pulsan a baja velocidad utilizando interpolación pura de CSS, agregando dinamismo continuo.
4. **Carga Escalonada (Staggered Load):** Las tarjetas individuales de habilidades aparecen progresivamente en cascada una vez cargada la página gracias a JavaScript.
5. **Simulación de Interacción "Smart Buttons":** Botón de Call-To-Action principal (Demostración de Descarga de CV) que cambia dinámicamente sus estados y texto en respuesta a eventos del usuario.
6. **Integración de Contacto Directo:** Botones configurados para abrir automáticamente el cliente de correo (`mailto:`) apuntando al e-mail facilitado y enlace directo al repositorio de GitHub.

## 6. Capturas de pantalla
*(Nota: Asegúrate de guardar imágenes en la carpeta /img/ y enlazarlas aquí antes de tu entrega si es requerido estrictamente capturas locales, por el momento dejamos una estructura de ejemplo).*

![Vista Inicio](img/captura-inicio.png)
![Vista de Habilidades](img/captura-habilidades.png)

## 7. Cómo ejecutar el proyecto
1. Descargar o clonar el repositorio en la computadora local.
2. Abrir la carpeta raíz del proyecto (`/finact-landing`).
3. Hacer doble clic sobre el archivo `index.html` para abrirlo en el navegador por defecto (Google Chrome, Firefox, Edge, etc.).
*(Opcional: Si usas Visual Studio Code, puedes utilizar la extensión "Live Server" para una visualización con recarga directa en el puerto temporal).*

## 8. Mejoras futuras
* Agregar modo "Light" intercambiable mediante un switch para usuarios que prefieren vistas claras.
* Implementar un formulario completo de contacto directamente en la misma vista o un modal.
* Convertir el botón de descarga del CV en un enganche real a un archivo PDF almacenado en la carpeta web.
* Realizar integraciones de una API de portafolios (como repositorios en GitHub o subidas en plataformas de diseño) para renderizar trabajos dinámicamente en tiempo real en la tarjeta.
