/* ============================================================
   PARA TI — Lógica principal
   ------------------------------------------------------------
   Este archivo lee el contenido de config.js y da vida a la
   página: pantalla de bienvenida, contador, galería, cartas,
   línea de tiempo, música, libro de recuerdos, corazones y
   partículas.

   Está organizado por bloques (busca los comentarios en
   MAYÚSCULAS) para que sea fácil ubicar cada función.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     PANTALLA DE BIENVENIDA
     ============================================================ */
  const welcomeScreen = document.getElementById('welcome-screen');
  const enterBtn = document.getElementById('enter-btn');

  document.getElementById('welcome-title').textContent = SITE_CONFIG.bienvenida.titulo;
  document.getElementById('welcome-message').textContent = SITE_CONFIG.bienvenida.mensaje;
  enterBtn.textContent = SITE_CONFIG.bienvenida.textoBoton;

  enterBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    // Un pequeño gesto del usuario (el clic) nos permite intentar
    // reproducir la música de fondo automáticamente.
    playCurrentTrack(true);
  });

  /* ============================================================
     ENCABEZADO / HERO
     ============================================================ */
  document.getElementById('hero-names').textContent =
    `${SITE_CONFIG.pareja.nombreTuyo} & ${SITE_CONFIG.pareja.nombreElla}`;
  document.getElementById('hero-phrase').textContent = SITE_CONFIG.pareja.fraseAmor;

  const inicio = new Date(SITE_CONFIG.fechaInicio);
  document.getElementById('hero-date').textContent =
    'Juntos desde el ' + inicio.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

  /* ============================================================
     GALERÍA DE FOTOS
     ============================================================ */
  const galleryGrid = document.getElementById('gallery-grid');
  SITE_CONFIG.fotos.forEach((foto, i) => {
    const card = document.createElement('div');
    card.className = 'photo-card reveal';
    card.style.transitionDelay = (i % 3) * 0.1 + 's';
    card.innerHTML = `
      <div class="photo-fallback"><span class="icon">📷</span><span>${foto.caption}</span></div>
      <img src="${foto.src}" alt="${foto.alt}" loading="lazy" onerror="this.style.display='none'">
      <div class="caption">${foto.caption}</div>
    `;
    card.addEventListener('click', () => openLightbox(foto));
    galleryGrid.appendChild(card);
  });

  function openLightbox(foto){
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const probe = new Image();
    probe.onload = () => { img.src = foto.src; img.alt = foto.alt; img.style.display = ''; };
    probe.onerror = () => { img.removeAttribute('src'); img.style.display = 'none'; };
    probe.src = foto.src;
    caption.textContent = foto.caption;
    lightbox.classList.add('active');
  }
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  function closeLightbox(){ document.getElementById('lightbox').classList.remove('active'); }

  /* ============================================================
     CARTAS / SOBRES
     ============================================================ */
  const lettersGrid = document.getElementById('letters-grid');
  SITE_CONFIG.cartas.forEach((carta, i) => {
    const envelope = document.createElement('div');
    envelope.className = 'envelope reveal';
    envelope.style.transitionDelay = (i % 3) * 0.1 + 's';
    envelope.innerHTML = `
      <div class="envelope-body"><div class="envelope-title">${carta.titulo}</div></div>
      <div class="envelope-flap"></div>
      <div class="envelope-seal">💌</div>
    `;
    envelope.addEventListener('click', () => {
      envelope.classList.add('open');
      setTimeout(() => openLetter(carta, envelope), 500);
    });
    lettersGrid.appendChild(envelope);
  });

  function openLetter(carta, envelope){
    document.getElementById('letter-title').textContent = carta.titulo;
    document.getElementById('letter-date').textContent = carta.fecha;
    document.getElementById('letter-body').textContent = carta.cuerpo;
    document.getElementById('letter-modal').classList.add('active');
    document.getElementById('letter-modal').dataset.envelope = '';
    document.getElementById('letter-modal')._envelope = envelope;
  }
  function closeLetter(){
    const modal = document.getElementById('letter-modal');
    modal.classList.remove('active');
    const envelope = modal._envelope;
    if (envelope) setTimeout(() => envelope.classList.remove('open'), 300);
  }
  document.getElementById('letter-close').addEventListener('click', closeLetter);
  document.getElementById('letter-modal').addEventListener('click', (e) => {
    if (e.target.id === 'letter-modal') closeLetter();
  });

  /* Cerrar cualquier modal con la tecla Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){ closeLightbox(); closeLetter(); }
  });

  /* ============================================================
     LÍNEA DE TIEMPO
     ============================================================ */
  const timelineEl = document.getElementById('timeline');
  SITE_CONFIG.timeline.forEach((momento, i) => {
    const item = document.createElement('div');
    item.className = `timeline-item reveal ${i % 2 === 0 ? 'left' : 'right'}`;
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card glass">
        <span class="timeline-date">${momento.fecha}</span>
        <h4>${momento.titulo}</h4>
        <p>${momento.texto}</p>
      </div>
    `;
    timelineEl.appendChild(item);
  });

  /* ============================================================
     CONTADOR DE TIEMPO JUNTOS
     ============================================================ */
  function updateCounter(){
    const start = new Date(SITE_CONFIG.fechaInicio);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0){ seconds += 60; minutes--; }
    if (minutes < 0){ minutes += 60; hours--; }
    if (hours < 0){ hours += 24; days--; }
    if (days < 0){
      const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonthLastDay;
      months--;
    }
    if (months < 0){ months += 12; years--; }

    setCounterValue('counter-years', years);
    setCounterValue('counter-months', months);
    setCounterValue('counter-days', days);
    setCounterValue('counter-hours', hours);
    setCounterValue('counter-minutes', minutes);
    setCounterValue('counter-seconds', seconds);
  }
  function setCounterValue(id, value){
    const el = document.getElementById(id);
    if (el) el.textContent = String(Math.max(0, value)).padStart(2, '0');
  }
  updateCounter();
  setInterval(updateCounter, 1000);

  /* ============================================================
     FRASES ROMÁNTICAS ROTATIVAS
     ============================================================ */
  const quoteText = document.getElementById('quote-text');
  let quoteIndex = 0;
  if (SITE_CONFIG.frases.length){
    quoteText.textContent = SITE_CONFIG.frases[0];
    setInterval(() => {
      quoteText.classList.add('quote-fade-out');
      setTimeout(() => {
        quoteIndex = (quoteIndex + 1) % SITE_CONFIG.frases.length;
        quoteText.textContent = SITE_CONFIG.frases[quoteIndex];
        quoteText.classList.remove('quote-fade-out');
        quoteText.classList.add('quote-fade-in');
        setTimeout(() => quoteText.classList.remove('quote-fade-in'), 650);
      }, 480);
    }, 5000);
  }

  /* ============================================================
     BOTÓN "TE AMO" — EXPLOSIÓN DE CORAZONES
     ============================================================ */
  const loveBtn = document.getElementById('love-btn');
  const burstLayer = document.getElementById('heart-burst-layer');
  const burstEmojis = ['💗', '💖', '❤️', '💕', '💘', '💞'];

  loveBtn.addEventListener('click', (e) => {
    const originX = e.clientX;
    const originY = e.clientY;
    const total = 26;
    for (let i = 0; i < total; i++){
      const heart = document.createElement('span');
      heart.className = 'burst-heart';
      heart.textContent = burstEmojis[Math.floor(Math.random() * burstEmojis.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = 90 + Math.random() * 220;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance - 40;
      heart.style.left = originX + 'px';
      heart.style.top = originY + 'px';
      heart.style.setProperty('--tx', tx + 'px');
      heart.style.setProperty('--ty', ty + 'px');
      heart.style.setProperty('--tr', (Math.random() * 360 - 180) + 'deg');
      heart.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
      burstLayer.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    }
  });

  /* ============================================================
     RAZONES POR LAS QUE TE AMO
     ============================================================ */
  const reasonsGrid = document.getElementById('reasons-grid');
  SITE_CONFIG.razones.forEach((razon, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card glass reveal';
    card.style.transitionDelay = (i % 3) * 0.1 + 's';
    card.innerHTML = `<span class="reason-icon">${razon.icono}</span><p>${razon.texto}</p>`;
    reasonsGrid.appendChild(card);
  });

  /* ============================================================
     SUEÑOS Y METAS JUNTOS
     ============================================================ */
  const dreamsGrid = document.getElementById('dreams-grid');
  SITE_CONFIG.sueños.forEach((sueno, i) => {
    const card = document.createElement('div');
    card.className = 'dream-card glass reveal';
    card.style.transitionDelay = (i % 3) * 0.1 + 's';
    card.innerHTML = `
      <span class="dream-icon">${sueno.icono}</span>
      <div><h4>${sueno.titulo}</h4><p>${sueno.texto}</p></div>
    `;
    dreamsGrid.appendChild(card);
  });

  /* ============================================================
     LIBRO DE RECUERDOS (se guarda en este navegador)
     ============================================================ */
  const MEMORY_KEY = 'paraTiRecuerdos';
  const memoryGrid = document.getElementById('memory-grid');
  const memoryForm = document.getElementById('memory-form');

  function loadMemories(){
    try{
      const raw = localStorage.getItem(MEMORY_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(err){ return []; }
  }
  function saveMemories(list){
    try{ localStorage.setItem(MEMORY_KEY, JSON.stringify(list)); }catch(err){ /* almacenamiento no disponible */ }
  }
  function renderMemories(){
    const memories = loadMemories();
    memoryGrid.innerHTML = '';
    if (!memories.length){
      memoryGrid.innerHTML = '<p class="memory-empty">Aún no hay recuerdos escritos aquí. Sé el primero en agregar uno ✍️</p>';
      return;
    }
    memories.forEach((memo, i) => {
      const note = document.createElement('div');
      note.className = 'memory-note glass reveal visible';
      note.innerHTML = `
        <button class="memory-delete" title="Eliminar recuerdo" aria-label="Eliminar recuerdo">✕</button>
        <span class="memory-date">${memo.fecha}</span>
        <h4>${memo.titulo}</h4>
        <p>${memo.texto}</p>
      `;
      note.querySelector('.memory-delete').addEventListener('click', () => {
        const updated = loadMemories();
        updated.splice(i, 1);
        saveMemories(updated);
        renderMemories();
      });
      memoryGrid.appendChild(note);
    });
  }
  memoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('memory-title').value.trim();
    const texto = document.getElementById('memory-text').value.trim();
    if (!titulo || !texto) return;
    const memories = loadMemories();
    memories.unshift({
      titulo, texto,
      fecha: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    });
    saveMemories(memories);
    memoryForm.reset();
    renderMemories();
  });
  renderMemories();

  /* ============================================================
     PIE DE PÁGINA
     ============================================================ */
  document.getElementById('footer-frase').textContent = SITE_CONFIG.footer.frase;
  document.getElementById('footer-dedicatoria').textContent = SITE_CONFIG.footer.dedicatoria;
  document.getElementById('footer-firma').textContent = SITE_CONFIG.footer.firma;

  /* ============================================================
     REPRODUCTOR DE MÚSICA
     ============================================================ */
  const audio = document.getElementById('bg-audio');
  const musicToggle = document.getElementById('music-toggle');
  const musicNext = document.getElementById('music-next');
  const trackNameEl = document.getElementById('track-name');
  const trackArtistEl = document.getElementById('track-artist');
  let trackIndex = 0;
  let isPlaying = false;

  function loadTrack(index, autoplayIfWasPlaying){
    const track = SITE_CONFIG.canciones[index];
    if (!track) return;
    audio.src = track.src;
    trackNameEl.textContent = track.titulo;
    trackArtistEl.textContent = track.artista;
    if (autoplayIfWasPlaying) playCurrentTrack(true);
  }
  function playCurrentTrack(silentIfFails){
    if (!SITE_CONFIG.canciones.length) return;
    if (!audio.src) loadTrack(trackIndex, false);
    const playPromise = audio.play();
    if (playPromise && playPromise.then){
      playPromise.then(() => {
        isPlaying = true;
        musicToggle.textContent = '❚❚';
      }).catch(() => {
        // El navegador bloqueó la reproducción automática o falta el
        // archivo de audio: no pasa nada, el usuario puede darle play.
        isPlaying = false;
        musicToggle.textContent = '▶';
        if (!silentIfFails) trackNameEl.textContent = 'Agrega tu canción en config.js';
      });
    }
  }
  function togglePlay(){
    if (isPlaying){
      audio.pause();
      isPlaying = false;
      musicToggle.textContent = '▶';
    } else {
      playCurrentTrack(false);
    }
  }
  musicToggle.addEventListener('click', togglePlay);
  musicNext.addEventListener('click', () => {
    trackIndex = (trackIndex + 1) % SITE_CONFIG.canciones.length;
    loadTrack(trackIndex, isPlaying);
  });
  audio.addEventListener('error', () => {
    trackNameEl.textContent = 'Agrega tu canción en config.js';
    trackArtistEl.textContent = 'assets/musica/';
  });
  if (SITE_CONFIG.canciones.length) loadTrack(0, false);

  /* ============================================================
     BOTÓN "VOLVER ARRIBA"
     ============================================================ */
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 700);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ============================================================
     REVELADO SUAVE AL HACER SCROLL
     ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ============================================================
     LLUVIA DE CORAZONES DE FONDO
     ============================================================ */
  const heartsRain = document.getElementById('hearts-rain');
  const heartSymbols = ['♥', '❤'];
  function spawnFallingHeart(){
    const heart = document.createElement('span');
    heart.className = 'falling-heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    const left = Math.random() * 100;
    const size = 12 + Math.random() * 22;
    const duration = 9 + Math.random() * 9;
    const drift = (Math.random() * 160 - 80) + 'px';
    heart.style.left = left + 'vw';
    heart.style.fontSize = size + 'px';
    heart.style.animationDuration = duration + 's';
    heart.style.setProperty('--drift', drift);
    heartsRain.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000 + 200);
  }
  setInterval(spawnFallingHeart, 750);
  for (let i = 0; i < 8; i++) setTimeout(spawnFallingHeart, i * 300);

  /* ============================================================
     PARTÍCULAS BRILLANTES
     ============================================================ */
  const sparklesLayer = document.getElementById('sparkles-layer');
  function spawnSparkle(){
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    const duration = 2 + Math.random() * 2.5;
    sparkle.style.animationDuration = duration + 's';
    sparklesLayer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), duration * 1000 + 100);
  }
  setInterval(spawnSparkle, 500);

});
