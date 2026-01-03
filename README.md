# Boda Javier & Sandra - 30 de Abril 2026

Página web de invitación para nuestra boda.

🌐 **Web:** [http://javierysandra.com](http://javierysandra.com)

## Cómo usar

La página acepta el parámetro `para` en la URL para personalizar la invitación:

- `?para=Sandra_y_Javi` - Mostrará "Sandra y Javi"
- `?para=Familia_Moreno` - Mostrará "Familia Moreno"
- `?para=Juan_%26_María` - Mostrará "Juan & María"

Los guiones bajos (`_`) se convierten automáticamente en espacios y `%26` en `&`.

## Estructura del proyecto

```
boda/
├── index.html          # Página principal
├── assets/
│   ├── styles.css      # Estilos CSS
│   ├── script.js       # JavaScript
│   └── *.svg           # Imágenes SVG
└── README.md           # Este archivo
```

## Personalización

### Archivos principales

- **index.html**: Contenido y estructura
- **assets/styles.css**: Estilos, colores y layout
- **assets/script.js**: Funcionalidad JavaScript (personalización nombre y copiar IBAN)

### Cambiar enlaces y datos

En `index.html`, actualiza estos enlaces:

- **Ubicación** (línea ~31): Actualiza el enlace de Google Maps
  ```html
  <a href="https://maps.app.goo.gl/TU_ENLACE" target="_blank">
  ```

- **Formulario RSVP** (línea ~47): Añade tu enlace de Google Forms
  ```html
  <a href="https://forms.google.com/TU_FORMULARIO" target="_blank">
  ```

- **IBAN** (línea ~59): Actualiza con tu IBAN real
  ```html
  <span id="numero-cuenta">ES77 1465 0100 94 1757946666</span>
  ```

- **Playlist Spotify** (línea ~71): Añade tu enlace de playlist
  ```html
  <a href="https://open.spotify.com/playlist/TU_PLAYLIST" target="_blank">
  ```

### Colores personalizables

En `assets/styles.css` (líneas 2-5):

```css
:root {
    --bg-color: #F8F1E8;    /* Color crema de fondo */
    --red-accent: #CC0000;  /* Color rojo para acentos */
    --text-black: #000000;  /* Color del texto */
}
```

## Optimizaciones implementadas

- **Lazy loading** en imágenes no críticas para carga más rápida
- **Preload** de imágenes principales (cabecera y fecha)
- **SVG optimizados** para mejor rendimiento
- **CSS y JS separados** para mejor organización y cache
- **Responsive design** optimizado para móviles (max-width: 480px)

## Funcionalidades

- ✅ Personalización de invitados por URL
- ✅ Botón para copiar IBAN al portapapeles
- ✅ Enlaces a ubicación, formulario y playlist
- ✅ Diseño responsive optimizado para móvil
- ✅ Carga optimizada de imágenes

## Licencia

Uso personal.
