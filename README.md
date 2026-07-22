# Para ti 💗 — Página romántica

Un regalo web hecho con HTML, CSS y JavaScript puro (sin frameworks).

## Cómo verla

Abre `index.html` haciendo doble clic, o con clic derecho → "Abrir con"
→ tu navegador. No necesita instalación ni servidor.

## Cómo personalizarla (todo en un solo archivo)

Edita **`js/config.js`**. Ahí están, bien comentados, todos los textos
y datos:

1. Nombres y frase de amor del encabezado
2. Mensaje de la pantalla de bienvenida
3. Fecha y hora en que empezaron (para el contador)
4. Fotos de la galería
5. Cartas (se muestran como sobres)
6. Momentos de la línea de tiempo
7. Frases románticas rotativas
8. Razones por las que la amas
9. Sueños y metas juntos
10. Lista de canciones
11. Texto del pie de página

No hace falta tocar `index.html`, `css/` ni el resto de `js/` para
cambiar el contenido.

## Cómo agregar tus fotos

1. Copia tus imágenes dentro de `assets/fotos/`.
2. En `js/config.js`, en el bloque `fotos`, ajusta el campo `src` de
   cada una para que apunte al nombre real del archivo.

Si todavía no agregaste una foto, se muestra un degradado rosa en su
lugar, así que puedes compartir la página igual y completarla después.

## Cómo agregar tu música

1. Copia tus archivos MP3 dentro de `assets/musica/`.
2. En `js/config.js`, en el bloque `canciones`, ajusta `src`, `titulo`
   y `artista` de cada pista.

El botón ‹›› del reproductor (esquina inferior derecha) cambia de
canción, y el botón redondo la reproduce o pausa.

## Libro de recuerdos

La sección "Libro de recuerdos" tiene un formulario: quien la visite
puede escribir un recuerdo nuevo sin tocar el código. Se guarda en el
navegador (localStorage), así que quedará ahí cada vez que se abra la
página desde ese mismo dispositivo y navegador.

## Estructura del proyecto

```
pagina-romantica/
├── index.html          → estructura de la página
├── css/
│   ├── style.css        → variables, tipografía y layout
│   ├── animations.css    → animaciones y efectos
│   └── responsive.css    → ajustes para celular y tablet
├── js/
│   ├── config.js         → EDITA AQUÍ tu contenido
│   └── main.js            → lógica del sitio (no hace falta tocarlo)
├── assets/
│   ├── fotos/             → coloca aquí tus imágenes
│   └── musica/             → coloca aquí tus canciones
└── README.md
```

## Publicarla / enviarla

- Para enviarla como regalo, comparte toda la carpeta (o un .zip de
  ella) — necesita las carpetas `css/`, `js/` y `assets/` junto al
  `index.html`.
- Para publicarla en internet, puedes subir la carpeta tal cual a un
  servicio gratuito de hosting estático (por ejemplo Netlify, Vercel
  o GitHub Pages) y compartir el enlace.
