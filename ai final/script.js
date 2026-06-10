/* =====================================================
   CLOSED — 1985 | Project Website JavaScript
   Ellie Dalseg | AI + Design
   ===================================================== */

/* -------------------------------------------------------
   UTILITY — sleep for N milliseconds (used in the loader)
   ------------------------------------------------------- */
function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

/* -------------------------------------------------------
   1. FILM GRAIN NOISE OVERLAY
   Draws random pixels on a canvas every frame to simulate
   analog film grain — same effect as the game's #noise div.
   ------------------------------------------------------- */
(function initNoise() {
  const canvas = document.getElementById('noise');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width  = 320;
  canvas.height = 240;

  function drawNoise() {
    const w = canvas.width;
    const h = canvas.height;
    const img = ctx.createImageData(w, h);
    const data = img.data;
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() * 255) | 0;
      data[i] = data[i+1] = data[i+2] = n;
      data[i+3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    requestAnimationFrame(drawNoise);
  }

  drawNoise();
})();

/* -------------------------------------------------------
   2. LANDING STATIC CANVAS
   VHS noise behind the title screen.
   ------------------------------------------------------- */
(function initLandingStatic() {
  const canvas = document.getElementById('landing-static');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawStatic() {
    const w = canvas.width;
    const h = canvas.height;
    const img = ctx.createImageData(w, h);
    const data = img.data;
    for (let i = 0; i < data.length; i += 4) {
      const lit = Math.random() < 0.3;
      const n   = lit ? ((Math.random() * 160) | 0) : 0;
      data[i] = data[i+1] = data[i+2] = n;
      data[i+3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    requestAnimationFrame(drawStatic);
  }

  window.addEventListener('resize', resize);
  resize();
  drawStatic();
})();

/* -------------------------------------------------------
   3. LOADING SCREEN
   Full security-camera sequence before the site appears.
   Sequence:
     Phase 1 — Static fills, camera UI appears
     Phase 2 — Security log lines type out
     Phase 3 — Static burst
     Phase 4 — Warning tape lines type out
     Phase 5 — Static burst
     Phase 6 — CLOSED title crashes in
     Phase 7 — Wait for user click / keypress to dismiss
   ------------------------------------------------------- */
(function initLoader() {
  const loader     = document.getElementById('loader');
  const loaderStatic = document.getElementById('loader-static');
  const linesEl    = document.getElementById('loader-lines');
  const titleEl    = document.getElementById('loader-main-title');
  const subEl      = document.getElementById('loader-main-sub');
  const enterEl    = document.getElementById('loader-enter');
  const burstEl    = document.getElementById('static-burst');

  if (!loader || !linesEl) return;

  /* --- Draw animated VHS static on the loader canvas --- */
  let loaderRunning = true;

  function drawLoaderStatic() {
    if (!loaderRunning) return;
    if (!loaderStatic) return;
    const ctx = loaderStatic.getContext('2d');
    const w = loaderStatic.width;
    const h = loaderStatic.height;
    const img = ctx.createImageData(w, h);
    const data = img.data;
    for (let i = 0; i < data.length; i += 4) {
      const lit = Math.random() < 0.4;
      const n   = lit ? ((Math.random() * 200) | 0) : 0;
      data[i] = data[i+1] = data[i+2] = n;
      data[i+3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    requestAnimationFrame(drawLoaderStatic);
  }

  function resizeLoader() {
    if (!loaderStatic) return;
    loaderStatic.width  = window.innerWidth;
    loaderStatic.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeLoader);
  resizeLoader();

  /* Setup static-burst canvas (full-screen flash) */
  if (burstEl) {
    burstEl.style.cssText =
      'position:fixed;inset:0;z-index:1999;pointer-events:none;opacity:0;width:100%;height:100%;';
    function resizeBurst() {
      burstEl.width  = window.innerWidth;
      burstEl.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeBurst);
    resizeBurst();
  }

  /* Trigger a full-screen static burst (like a VHS glitch) */
  async function staticBurst(duration) {
    if (!burstEl) return;
    const ctx = burstEl.getContext('2d');
    const w = burstEl.width;
    const h = burstEl.height;
    burstEl.style.opacity = '1';
    const img = ctx.createImageData(w, h);
    const data = img.data;
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() * 255) | 0;
      data[i] = data[i+1] = data[i+2] = n;
      data[i+3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    await sleep(duration || 120);
    burstEl.style.opacity = '0';
  }

  /* Type a single line of text into the log area */
  async function typeLine(text, className) {
    const span = document.createElement('span');
    span.className = 'log-line' + (className ? ' ' + className : '');
    span.textContent = '';
    linesEl.appendChild(span);

    for (let i = 0; i < text.length; i++) {
      span.textContent += text[i];
      await sleep(28 + Math.random() * 18);
    }
    await sleep(120);
  }

  /* Clear the log lines */
  function clearLines() {
    linesEl.innerHTML = '';
  }

  /* Dismiss loader — fade out and remove */
  let dismissed = false;
  function dismiss() {
    if (dismissed) return;
    dismissed = true;
    loaderRunning = false;

    /* Start the ambient hum on first user interaction */
    startAmbientHum();

    loader.classList.add('fade-out');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1300);
  }

  /* Run the full sequence */
  async function runSequence() {
    drawLoaderStatic();
    await sleep(600);

    /* Phase 2 — Security camera log */
    await typeLine('[MOTION DETECTED — SERVICE CORRIDOR B]');
    await typeLine('TIMESTAMP: 11/14/1985  23:47:14');
    await typeLine('SUBJECT: UNIDENTIFIED. MAINTENANCE STAFF.');
    await sleep(400);

    /* Phase 3 — Static burst */
    await staticBurst(200);
    clearLines();
    await sleep(300);

    /* Phase 4 — Warning tape */
    await typeLine('——————————————————————————');
    await typeLine('IF YOU ARE VIEWING THIS TAPE:', 'warn');
    await sleep(200);
    await typeLine('DO NOT STAY AFTER CLOSING.', 'warn');
    await typeLine('DO NOT SPEAK TO THE JANITOR.', 'warn');
    await typeLine('HE HAS NOT BEEN SEEN SINCE 11/14/1983.', 'warn');
    await sleep(300);
    await typeLine('HE NEVER LEFT.', 'warn');
    await sleep(600);

    /* Phase 5 — Static burst */
    await staticBurst(300);
    clearLines();
    await sleep(200);

    /* Phase 6 — Title crashes in */
    titleEl.classList.add('show');
    await sleep(500);
    subEl.classList.add('show');
    await sleep(600);

    /* Phase 7 — Show enter prompt, wait for interaction */
    enterEl.classList.add('show');

    document.addEventListener('keydown', dismiss, { once: true });
    document.addEventListener('click', dismiss, { once: true });
  }

  runSequence();
})();

/* -------------------------------------------------------
   4. AMBIENT HUM
   Replicates the game's low 55Hz sawtooth drone.
   Must start after a user gesture (browser policy).
   ------------------------------------------------------- */
let humStarted = false;

function startAmbientHum() {
  if (humStarted) return;
  humStarted = true;

  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;

  const ctx    = new Ctx();
  const osc    = ctx.createOscillator();
  const gain   = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  /* Match the game's exact audio setup */
  osc.type             = 'sawtooth';
  osc.frequency.value  = 55;     /* 55Hz — sub bass drone */

  filter.type          = 'lowpass';
  filter.frequency.value = 200;  /* Cut harshness above 200Hz */

  gain.gain.value = 0;           /* Start silent, fade in */

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start();

  /* Fade in gently so it doesn't startle */
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.055, ctx.currentTime + 3);
}

/* -------------------------------------------------------
   5. NAVIGATION — show after scrolling past landing
   ------------------------------------------------------- */
(function initNav() {
  const nav     = document.getElementById('site-nav');
  const landing = document.getElementById('landing');
  if (!nav || !landing) return;

  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          nav.classList.remove('visible');
        } else {
          nav.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(landing);
})();

/* -------------------------------------------------------
   6. SCROLL REVEAL
   Adds .visible to .reveal and .reveal-left elements
   when they enter the viewport.
   ------------------------------------------------------- */
(function initScrollReveal() {
  const items = document.querySelectorAll('.reveal, .reveal-left');
  if (items.length === 0) return;

  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          /* Stop observing once revealed */
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach(function(el) {
    observer.observe(el);
  });
})();

/* -------------------------------------------------------
   7. GLITCH EFFECT on section titles
   Randomly fires on each .section-title every 8–20 seconds.
   ------------------------------------------------------- */
(function initGlitch() {
  const titles = document.querySelectorAll('.section-title');
  if (titles.length === 0) return;

  titles.forEach(function(title) {
    function scheduleGlitch() {
      const delay = 8000 + Math.random() * 12000;
      setTimeout(function() {
        title.classList.add('glitching');
        setTimeout(function() {
          title.classList.remove('glitching');
          scheduleGlitch();
        }, 500);
      }, delay);
    }
    scheduleGlitch();
  });
})();

/* -------------------------------------------------------
   8. HAROLD GHOST EASTER EGG
   Harold's silhouette briefly appears in a random corner
   every 2–4 minutes. Blinks once, then vanishes.
   ------------------------------------------------------- */
(function initHarold() {
  const harold = document.getElementById('harold-ghost');
  if (!harold) return;

  const positions = [
    { bottom: '0', right: '40px',  left: 'auto' },
    { bottom: '0', left:  '40px',  right: 'auto' },
    { bottom: '0', right: '15vw',  left: 'auto' },
    { bottom: '0', left:  '15vw',  right: 'auto' },
  ];

  function showHarold() {
    /* Pick a random corner */
    const pos = positions[Math.floor(Math.random() * positions.length)];
    harold.style.bottom = pos.bottom;
    harold.style.right  = pos.right;
    harold.style.left   = pos.left;

    harold.classList.add('visible');

    /* Stay for 2.5–4 seconds, then vanish */
    const stayTime = 2500 + Math.random() * 1500;
    setTimeout(function() {
      harold.classList.remove('visible');

      /* Schedule next appearance: 2–4 minutes */
      const nextDelay = 120000 + Math.random() * 120000;
      setTimeout(showHarold, nextDelay);
    }, stayTime);
  }

  /* First appearance: 45–90 seconds after page load */
  const firstDelay = 45000 + Math.random() * 45000;
  setTimeout(showHarold, firstDelay);
})();

/* -------------------------------------------------------
   9. LIGHTBOX — click images to enlarge
   ------------------------------------------------------- */
(function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;

  const selectors = [
    '.research-images img',
    '.screenshot-grid img',
    '.notes-grid img',
  ].join(', ');

  document.querySelectorAll(selectors).forEach(function(img) {
    img.addEventListener('click', function() {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', function() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
    }
  });
})();

/* -------------------------------------------------------
   10. SMOOTH SCROLL for anchor links
   ------------------------------------------------------- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = link.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* -------------------------------------------------------
   11. ROOM LABEL FLICKER
   Room labels occasionally flicker — like fluorescent lights.
   ------------------------------------------------------- */
(function initFlicker() {
  const labels = document.querySelectorAll('.room-label');
  labels.forEach(function(label) {
    setInterval(function() {
      if (Math.random() < 0.12) {
        label.style.opacity = '0.2';
        setTimeout(function() {
          label.style.opacity = '1';
        }, 60 + Math.random() * 100);
      }
    }, 2500 + Math.random() * 4000);
  });
})();
