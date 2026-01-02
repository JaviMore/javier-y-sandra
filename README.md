# Boda Javier & Sandra - 30 de Abril 2026

Página web de invitación para nuestra boda.

## Cómo usar

La página acepta el parámetro `invitados` en la URL para personalizar la invitación:

- `?invitados=Sandra-y-Javi` - Mostrará "Sandra y Javi"
- `?invitados=Familia-Moreno` - Mostrará "Familia Moreno"

Los guiones (`-`) se convierten automáticamente en espacios.

## Configuración GitHub Pages

1. Ve a Settings > Pages en tu repositorio
2. Selecciona la rama `main` como fuente
3. La página estará disponible en `https://tu-usuario.github.io/nombre-repositorio/`

## Personalización

Para personalizar la página, edita los siguientes archivos:

- **index.html**: Contenido y estructura
- **styles.css**: Estilos y colores
- **script.js**: Funcionalidad JavaScript

### Cambiar enlaces

En `index.html`, actualiza estos enlaces:

- **Ubicación**: Línea 74 - Actualiza el enlace de Google Maps
- **Formulario RSVP**: Línea 129 - Añade tu enlace de Google Forms
- **IBAN**: Línea 139 y en `script.js` línea 11 - Actualiza con tu IBAN real
- **Playlist Spotify**: Línea 153 - Añade tu enlace de playlist

## Estructura del proyecto

```
boda/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── images/             # Imágenes extraídas del PDF
│   ├── extracted-*.jpg
│   └── extracted-*.png
├── invitacion.pdf      # PDF original
└── README.md           # Este archivo
```

## Licencia

Uso personal.
