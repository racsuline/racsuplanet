/* ─── RACSU PLANET CORE LOGIC ─── */

// 1. LIVE MINECRAFT SERVER STATUS (mcsrvstat.us v3)
async function fetchServerStatus() {
  const statusIndicator = document.getElementById('server-status-indicator');
  const playersEl = document.getElementById('server-status-players');
  const versionEl = document.getElementById('server-status-version');
  const dotEl = document.getElementById('status-dot');

  if (!statusIndicator) return;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch('https://api.mcsrvstat.us/3/play.racsu.com', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error('API response not ok');
    const data = await response.json();

    if (data && data.online) {
      if (dotEl) {
        dotEl.className = 'status-dot online';
      }
      if (statusIndicator) {
        statusIndicator.innerHTML = '<span class="status-dot online"></span> <span>Online</span>';
      }
      if (playersEl) {
        const count = (data.players && data.players.online !== undefined) ? data.players.online : 0;
        const max = (data.players && data.players.max !== undefined) ? data.players.max : 100;
        playersEl.innerHTML = `<strong>${count}</strong>/${max} Jugadores`;
      }
      if (versionEl && data.version) {
        // Strip or format internal server engine names if desired
        const cleanVer = data.version.replace('AdvancedSlimePaper', 'MC').trim();
        versionEl.textContent = cleanVer || 'MC 26.2';
      }
    } else {
      if (dotEl) dotEl.className = 'status-dot offline';
      if (statusIndicator) {
        statusIndicator.innerHTML = '<span class="status-dot offline"></span> <span>Offline</span>';
      }
      if (playersEl) playersEl.textContent = 'Servidor reiniciando';
    }
  } catch (err) {
    // Elegant fallback on network or API failure
    if (dotEl) dotEl.className = 'status-dot online';
    if (statusIndicator) {
      statusIndicator.innerHTML = '<span class="status-dot online"></span> <span>play.racsu.com</span>';
    }
    if (playersEl) playersEl.textContent = 'Java & Bedrock';
  }
}

// 2. DISCORD LIVE MEMBERS WIDGET
async function fetchDiscordStatus() {
  const discordEl = document.getElementById('discord-online-count');
  if (!discordEl) return;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch('https://discord.com/api/guilds/1261810581304770610/widget.json', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) return;
    const data = await response.json();

    if (data && data.presence_count !== undefined) {
      discordEl.textContent = `${data.presence_count} en Discord`;
    }
  } catch (e) {
    // Discord widget may be disabled or blocked; fallback gracefully
  }
}

// 3. COPY IP / PORT UTILITY
function copyText(text, elementId, defaultI18nKey = 'hero_ip_text') {
  navigator.clipboard.writeText(text).then(() => {
    const el = document.getElementById(elementId);
    if (!el) return;
    const orig = el.textContent;
    const lang = (window.detectLanguage ? window.detectLanguage() : 'es');
    const copiedMsg = (window.I18N_TRANSLATIONS && window.I18N_TRANSLATIONS[lang] && window.I18N_TRANSLATIONS[lang].copied_text) || '¡Copiado! ✔';

    el.textContent = copiedMsg;
    el.style.color = '#ffffff';
    setTimeout(() => {
      el.textContent = orig;
      el.style.color = '';
    }, 2000);
  }).catch(() => {
    prompt('Copia manualmente:', text);
  });
}

function copyIP() {
  copyText('play.racsu.com', 'ip-text');
}

function copyBedrockPort() {
  copyText('19132', 'port-text');
}

// 4. CONNECTION GUIDE TABS
function switchGuideTab(tabName) {
  const javaContent = document.getElementById('guide-java-content');
  const bedrockContent = document.getElementById('guide-bedrock-content');
  const tabJava = document.getElementById('tab-btn-java');
  const tabBedrock = document.getElementById('tab-btn-bedrock');

  if (tabName === 'bedrock') {
    if (javaContent) javaContent.style.display = 'none';
    if (bedrockContent) bedrockContent.style.display = 'grid';
    if (tabJava) tabJava.classList.remove('active');
    if (tabBedrock) tabBedrock.classList.add('active');
  } else {
    if (javaContent) javaContent.style.display = 'grid';
    if (bedrockContent) bedrockContent.style.display = 'none';
    if (tabJava) tabJava.classList.add('active');
    if (tabBedrock) tabBedrock.classList.remove('active');
  }
}

// 5. YOUTUBE TRAILER FACADE
function initTrailerFacade() {
  const facade = document.getElementById('trailer-facade');
  if (!facade) return;

  facade.addEventListener('click', () => {
    const videoId = 'ZsAJiZ42qGc';
    facade.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" title="Tráiler de Racsu Planet" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  });
}

// 6. ACCESSIBLE GALLERY
let currentSlide = 0;
let totalSlides = 0;

async function initGallery() {
  const slider = document.getElementById('gallery-slider');
  if (!slider) return;

  try {
    const res = await fetch('/data/galeria.json');
    if (!res.ok) return;
    const items = await res.json();
    if (!items || items.length === 0) return;

    totalSlides = items.length;
    slider.innerHTML = items.map((item, idx) => `
      <div class="gallery-slide" role="group" aria-roledescription="slide" aria-label="${idx + 1} de ${items.length}">
        <img src="${item.src}" alt="${item.alt || item.titulo}" loading="lazy" width="800" height="450">
        <div class="gallery-caption">
          <h4>${item.titulo}</h4>
          <p>${item.descripcion}</p>
        </div>
      </div>
    `).join('');

    updateGallerySlide();
  } catch (e) {
    console.warn('Gallery loading skipped', e);
  }
}

function updateGallerySlide() {
  const slider = document.getElementById('gallery-slider');
  if (!slider) return;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextGallerySlide() {
  if (totalSlides === 0) return;
  currentSlide = (currentSlide + 1) % totalSlides;
  updateGallerySlide();
}

function prevGallerySlide() {
  if (totalSlides === 0) return;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateGallerySlide();
}

// 7. EVENTS & SEASONS (HIDDEN IF EMPTY)
async function initEventos() {
  const section = document.getElementById('eventos-section');
  const container = document.getElementById('eventos-list');
  if (!section || !container) return;

  try {
    const res = await fetch('/data/eventos.json');
    if (!res.ok) {
      section.style.display = 'none';
      return;
    }
    const eventos = await res.json();
    if (!eventos || eventos.length === 0) {
      section.style.display = 'none';
      return;
    }

    eventos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    container.innerHTML = eventos.map(ev => `
      <div class="step-card">
        <span class="step-badge">${ev.fecha}</span>
        <h3>${ev.titulo}</h3>
        <p>${ev.descripcion}</p>
      </div>
    `).join('');
    section.style.display = 'block';
  } catch (e) {
    section.style.display = 'none';
  }
}

// 8. RANKING DE ISLAS
async function initRanking() {
  const tbody = document.getElementById('ranking-tbody');
  if (!tbody) return;

  try {
    const res = await fetch('/data/ranking.json');
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.top_islas) return;

    tbody.innerHTML = data.top_islas.map(isla => {
      let badgeClass = '';
      if (isla.puesto === 1) badgeClass = 'rank-1';
      else if (isla.puesto === 2) badgeClass = 'rank-2';
      else if (isla.puesto === 3) badgeClass = 'rank-3';

      return `
        <tr>
          <td><span class="rank-badge ${badgeClass}">#${isla.puesto}</span></td>
          <td><strong>${isla.nombre}</strong></td>
          <td>${isla.lider}</td>
          <td style="color:var(--ore-gold);">★ ${isla.nivel.toLocaleString()}</td>
          <td>${isla.miembros}</td>
        </tr>
      `;
    }).join('');
  } catch (e) {
    console.warn('Ranking load skipped', e);
  }
}

// 9. NOVEDADES
async function initNovedades(limit = 3) {
  const container = document.getElementById('novedades-list');
  if (!container) return;

  try {
    const res = await fetch('/data/novedades.json');
    if (!res.ok) return;
    let news = await res.json();
    if (!news || news.length === 0) return;

    if (limit > 0) news = news.slice(0, limit);

    container.innerHTML = news.map(item => `
      <article class="news-card">
        <span class="news-date">${item.fecha} · ${item.categoria || 'Servidor'}</span>
        <h3>${item.titulo}</h3>
        <p>${item.resumen}</p>
        ${item.enlace ? `<a href="${item.enlace}" class="btn-secondary" style="margin-top:auto; font-size:1rem; color:var(--ore-sky);">Leer más ➔</a>` : ''}
      </article>
    `).join('');
  } catch (e) {
    console.warn('Novedades load skipped', e);
  }
}

// 10. VOTING PLATFORMS
async function initVotacion() {
  const container = document.getElementById('vote-grid-container');
  if (!container) return;

  try {
    const res = await fetch('/data/votos.json');
    if (!res.ok) return;
    const votos = await res.json();
    if (!votos) return;

    container.innerHTML = votos.map(v => `
      <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="vote-card">
        <div>
          <strong>${v.id}. ${v.name}</strong>
          <span>+${v.reward}</span>
        </div>
        <span class="vote-arrow">➔</span>
      </a>
    `).join('');
  } catch (e) {
    console.warn('Votos load skipped', e);
  }
}

// 11. REGLAS
async function initReglas() {
  const container = document.getElementById('reglas-container');
  if (!container) return;

  try {
    const res = await fetch('/data/reglas.json');
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.categorias) return;

    window._reglasData = data;
    renderReglas(data.categorias);

    const searchInput = document.getElementById('reglas-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
          renderReglas(window._reglasData.categorias);
          return;
        }

        const filtered = window._reglasData.categorias.map(cat => {
          return {
            ...cat,
            reglas: cat.reglas.filter(r =>
              r.texto.toLowerCase().includes(query) ||
              r.numero.toString() === query
            )
          };
        }).filter(cat => cat.reglas.length > 0);

        renderReglas(filtered);
      });
    }
  } catch (e) {
    console.warn('Reglas load skipped', e);
  }
}

function renderReglas(categorias) {
  const container = document.getElementById('reglas-container');
  if (!container) return;

  if (categorias.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:30px; font-size:1.2rem; color:var(--ore-text-dim);">No se encontraron reglas coincidentes.</p>';
    return;
  }

  container.innerHTML = categorias.map(cat => `
    <div class="rule-category-card">
      <div class="rule-category-header">
        <h3>${cat.icono || ''} ${cat.nombre}</h3>
        <span style="font-size:1.1rem; color:var(--ore-text-dim);">${cat.reglas.length} reglas</span>
      </div>
      <ul class="rule-list">
        ${cat.reglas.map(r => `
          <li class="rule-item">
            <span class="rule-num">#${r.numero}</span>
            <span>${r.texto}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// 12. STAFF (HIDDEN IF EMPTY)
async function initStaff() {
  const section = document.getElementById('staff-section');
  const container = document.getElementById('staff-grid');
  if (!section || !container) return;

  try {
    const res = await fetch('/data/staff.json');
    if (!res.ok) {
      section.style.display = 'none';
      return;
    }
    const staff = await res.json();
    if (!staff || staff.length === 0) {
      section.style.display = 'none';
      return;
    }

    container.innerHTML = staff.map(member => `
      <div class="feat-card" style="text-align:center; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <img src="https://mc-heads.net/avatar/${member.username}/80" alt="${member.username}" width="80" height="80" loading="lazy" style="image-rendering:pixelated; border:2px solid var(--ore-border);">
        <strong style="font-size:1.3rem; color:var(--ore-text-bright);">${member.username}</strong>
        <span style="color:var(--ore-gold);">${member.rol || 'Staff'}</span>
      </div>
    `).join('');
    section.style.display = 'block';
  } catch (e) {
    section.style.display = 'none';
  }
}

// DOM READY INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  fetchServerStatus();
  fetchDiscordStatus();
  // Refresh live server status every 60 seconds politely
  setInterval(fetchServerStatus, 60000);

  initTrailerFacade();
  initGallery();
  initEventos();
  initRanking();
  initNovedades();
  initVotacion();
  initReglas();
  initStaff();
});
