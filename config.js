/* ============================================================
   PARA TI — Archivo de configuración
   ------------------------------------------------------------
   ¡EDITA SOLO ESTE ARCHIVO para personalizar la página!
   No necesitas tocar el HTML, el CSS ni el resto del JS: todo
   el contenido (nombres, fecha, fotos, cartas, línea de
   tiempo, razones, sueños, frases y canciones) vive aquí.

   Sigue los comentarios de cada bloque — son una guía paso a
   paso de qué cambiar y cómo.
   ============================================================ */

const SITE_CONFIG = {

  /* ---------- 1. NOMBRES Y MENSAJE DE BIENVENIDA ---------- */
  pareja: {
    // Tu nombre y el de tu pareja, tal como quieres que aparezcan
    nombreTuyo: "Yo",
    nombreElla: "Mi Amor",
    // Frase debajo del nombre en el encabezado principal
    fraseAmor: "Desde que te encontré, cada día tiene un motivo más para sonreír.",
  },

  bienvenida: {
    titulo: "Antes de entrar...",
    mensaje: "Preparé este pequeño rincón con todo lo que siento por ti. Tómate tu tiempo para recorrerlo.",
    textoBoton: "Entrar",
  },

  /* ---------- 2. FECHA DE INICIO (para el contador) ----------
     Formato: "AAAA-MM-DDTHH:MM:SS"
     Cambia esto por la fecha y hora exacta en que empezaron
     su relación. */
  fechaInicio: "2025-08-10T20:00:00",

  /* ---------- 3. GALERÍA DE FOTOS ----------
     Agrega o quita objetos de esta lista. "src" debe apuntar
     a una imagen dentro de la carpeta assets/fotos/. Si el
     archivo todavía no existe, se muestra automáticamente un
     degustado bonito en su lugar, así que puedes dejar la
     lista lista y agregar las fotos reales después. */
  fotos: [
    { src: "assets/fotos/Screenshot_20251130_222258_Instagram.jpg", alt: "Nuestro primer día", caption: "Nuestro primer dia juntos" },
    { src: "assets/fotos/IMG-20251129-WA0022.jpg", alt: "Un viaje juntos", caption: "Ese tarde inolvidable" },
    { src: "assets/fotos/IMG-20251230-WA0009.jpg", alt: "Una tarde cualquiera", caption: "Las tardes contigo saben distinto" },
    { src: "assets/fotos/IMG-20260102-WA0104.jpg", alt: "Riendo juntos", caption: "Tu risa es mi lugar favorito" },
    { src: "assets/fotos/IMG-20251129-WA0012.jpg", alt: "Nosotros", caption: "Simplemente, nosotros" }, 
],

  /* ---------- 4. CARTAS (se muestran como sobres) ----------
     Agrega tantas cartas como quieras. "cuerpo" admite saltos
     de línea normales. */
  cartas: [
    {
      titulo: "Para cuando nos conocimos",
      fecha: "20 de julio, 2025",
      cuerpo: "Todavía recuerdo ese día como si fuera ayer.\n\nNo sabía que estaba a punto de conocer a la persona con la que querría compartir cada pequeño momento de mi vida.\n\nGracias por llegar.",
    },
    {
      titulo: "Un día cualquiera",
      fecha: "10 de agosto, 2025",
      cuerpo: "el dia que decidi ser parte de vos .",
    },
    {
      titulo: "Para nuestro futuro",
      fecha: "Hoy",
      cuerpo: "Quiero seguir escribiéndote cartas como esta por muchos años más.\n\nGracias por elegirme todos los días. Te amo.",
    },
  ],

  /* ---------- 5. LÍNEA DE TIEMPO ----------
     Cada objeto es un momento especial. Se muestran en el
     orden en que los escribas aquí. */
  timeline: [
    { fecha: "junio 2025", titulo: "Nos conocimos", texto: "El día en que nuestros caminos se cruzaron por primera vez." },
    { fecha: "agosto 2025", titulo: "saliendo junto", texto: "Nervios, risas y la sensación de que algo especial empezaba." },
    { fecha: "enero 2025", titulo: "creciendo juntos", texto: "aprendiendo juntos conociendonos." },
    { fecha: "Hoy", titulo: "Y seguimos escribiendo esta historia", texto: "Cada día es una página más de nosotros." },
  ],
 
/* ---------- 6. FRASES ROMÁNTICAS ROTATIVAS ----------
     Aparecen una tras otra en la sección de frases. */
  frases: [
    "Contigo aprendí que el amor también es calma.",
    "Eres mi lugar favorito en cualquier ciudad del mundo.",
    "De todas las historias, elijo la nuestra una y otra vez.",
    "Tu risa es mi canción favorita.",
    "Contigo, hasta lo simple se siente único.",
  ],

  /* ---------- 7. RAZONES POR LAS QUE TE AMO ---------- */
  razones: [
    { icono: "💗", texto: "Por la forma en la que te ríes de tus propios chistes." },
    { icono: "🌙", texto: "Por acompañarme incluso en los días difíciles." },
    { icono: "☕", texto: "Por hacer especiales hasta las mañanas más comunes." },
    { icono: "🎶", texto: "Por cantar mal a propósito solo para hacerme reír." },
    { icono: "🤍", texto: "Por ser mi persona segura." },
    { icono: "✨", texto: "Por creer en nosotros, incluso cuando dudo yo." },
  ],

  /* ---------- 8. SUEÑOS Y METAS JUNTOS ---------- */
  sueños: [
    { icono: "🏡", titulo: "Nuestro hogar", texto: "Construir un lugar que sea completamente nuestro." },
    { icono: "✈️", titulo: "Viajar juntos", texto: "Conocer al menos un país nuevo cada año." },
    { icono: "🐾", titulo: "Una mascota", texto: "Adoptar a un pequeño integrante más para la familia." },
    { icono: "🎓", titulo: "Crecer juntos", texto: "Apoyarnos en cada meta profesional y personal." },
    { icono: "💍", titulo: "Seguir eligiéndonos", texto: "Cada año, cada etapa, siempre juntos." },
  ],

  /* ---------- 9. LISTA DE CANCIONES ----------
     Coloca tus archivos de música dentro de assets/musica/ con
     estos mismos nombres (o cambia "src" por el nombre que
     uses). Si el archivo no existe todavía, el reproductor lo
     indica sin romperse. */
  canciones: [
    { titulo: "Nuestra canción", artista: "Cambia este nombre", src: "assets/musica/true love.mp3" },

  ],

  /* ---------- 10. PIE DE PÁGINA ---------- */
  footer: {
    frase: "Gracias por ser mi hoy y todos mis mañanas",
    dedicatoria: "Esta página existe porque tú existes en mi vida. Cada línea de código tiene un poco del amor que siento por ti. Te amo, hoy y siempre.",
    firma: "Hecho con amor, para ti",
  },
};
