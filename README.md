# Stampato Creativa

Sitio web estático hecho con HTML, CSS y JavaScript puro. Abre `index.html` directamente o súbelo tal cual a cualquier hosting estático.

## Archivos principales

- `index.html`: estructura general de la página.
- `css/styles.css`: estilos, variables de color y responsive.
- `js/content.js`: todo el contenido editable.
- `js/main.js`: render dinámico, menú, WhatsApp, acordeón, lightbox y navegación.
- `images/`: imágenes del sitio.

## Cómo cambiar textos

Edita `js/content.js`. Ahí están el nombre de la empresa, hero, secciones, servicios, galería, FAQ, contacto y enlaces.

## Cómo cambiar imágenes

Reemplaza los archivos dentro de `images/` usando el mismo nombre, o cambia la ruta en `js/content.js`.

## Cómo agregar o eliminar servicios

En `js/content.js`, agrega, quita o reordena objetos dentro de `services` o `gallery`. La página se actualiza sola.

## Cómo cambiar el WhatsApp

Cambia el valor de `whatsapp` en `js/content.js`. Todos los botones usan ese número y limpian automáticamente caracteres innecesarios.

## Cómo cambiar colores

Edita las variables CSS del bloque `:root` en `css/styles.css`, especialmente `--accent`, `--accent-strong`, `--bg` y `--text`.

## Qué subir al hosting

Sube la carpeta completa con estos archivos y directorios:

- `index.html`
- `css/`
- `js/`
- `images/`