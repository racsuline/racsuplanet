/* ─── RACSU PLANET CORE LOGIC ─── */

// 1. LIVE MINECRAFT SERVER STATUS (mcsrvstat.us v3)
async function fetchServerStatus() {
  const statusIndicator = document.getElementById('server-status-indicator');
  const playersEl = document.getElementById('server-status-players');
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
    } else {
      if (dotEl) dotEl.className = 'status-dot offline';
      if (statusIndicator) {
        statusIndicator.innerHTML = '<span class="status-dot offline"></span> <span>Offline</span>';
      }
      if (playersEl) playersEl.textContent = 'Servidor reiniciando';
    }
  } catch (err) {
    // Fallback gracefully on network timeout or failure
    if (dotEl) dotEl.className = 'status-dot online';
    if (statusIndicator) {
      statusIndicator.innerHTML = '<span class="status-dot online"></span> <span>Online</span>';
    }
    if (playersEl) playersEl.textContent = 'play.racsu.com';
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
    // Discord widget may be blocked; fallback silently
  }
}

// 3. COPY IP / PORT UTILITY
function copyText(text, elementId) {
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
  const tabs = ['java', 'bedrock', 'console'];
  tabs.forEach(t => {
    const content = document.getElementById(`guide-${t}-content`);
    const btn = document.getElementById(`tab-btn-${t}`);
    const isTarget = (t === tabName);
    if (content) {
      content.style.display = isTarget ? 'block' : 'none';
      content.hidden = !isTarget;
    }
    if (btn) {
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    }
  });
}

function initGuideTabs() {
  const tablist = document.querySelector('.guide-tabs');
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll('.tab-btn'));
  tablist.addEventListener('keydown', (e) => {
    let index = tabs.indexOf(document.activeElement);
    if (index === -1) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      index = (index + 1) % tabs.length;
      tabs[index].focus();
      tabs[index].click();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      index = (index - 1 + tabs.length) % tabs.length;
      tabs[index].focus();
      tabs[index].click();
    }
  });
}

// 5. YOUTUBE TRAILER FACADE
function initTrailerFacade() {
  const facade = document.getElementById('trailer-facade');
  if (!facade) return;

  facade.addEventListener('click', () => {
    const videoId = 'ZsAJiZ42qGc';
    facade.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" title="Tráiler de Racsu Planet" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  });

  // Accessible keyboard activation (Enter / Space)
  facade.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      facade.click();
    }
  });
}

// 6. VOTING PLATFORMS (/votar)
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

// 7. REGLAS (/reglas)
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

// 8. MOBILE MENU NAVIGATION TOGGLE
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const navLinks = document.getElementById('nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('nav-links-open');
  });

  // Close menu on link click (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-links-open');
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('nav-links-open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-links-open');
      toggleBtn.focus();
    }
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('nav-links-open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-links-open');
    }
  });
}

// DOM READY INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  fetchServerStatus();
  fetchDiscordStatus();
  setInterval(fetchServerStatus, 60000);

  initMobileNav();
  initGuideTabs();
  initTrailerFacade();
  initVotacion();
  initReglas();
});
