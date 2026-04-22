const DEFAULT_ASSETS = [
  { id:'free-duck', title:'Duck Classic', description:'Prop limpio y ligero para pruebas y escenas básicas.', category:'props', badge:'Free', tier:'free', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Duck/glTF-Binary/Duck.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Duck/screenshot/screenshot.png' },
  { id:'free-helmet', title:'Flight Helmet Lite', description:'Asset de gear con materiales bien definidos.', category:'gear', badge:'Popular', tier:'free', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/FlightHelmet/glTF-Binary/FlightHelmet.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/FlightHelmet/screenshot/screenshot.png' },
  { id:'free-lantern', title:'Lantern', description:'Prop ambiental ideal para escenas oscuras o medievales.', category:'props', badge:'New', tier:'free', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Lantern/glTF-Binary/Lantern.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Lantern/screenshot/screenshot.png' },
  { id:'free-sponza', title:'Sponza Sample', description:'Entorno clásico para mostrar composición y escala.', category:'environment', badge:'Scene', tier:'free', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Sponza/glTF-Binary/Sponza.glb', posterUrl:'' },
  { id:'free-avocado', title:'Avocado Pack', description:'Modelo sencillo con carácter y acabado brillante.', category:'props', badge:'Starter', tier:'free', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Avocado/glTF-Binary/Avocado.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Avocado/screenshot/screenshot.png' },

  { id:'pro-boombox', title:'Boom Box', description:'Prop retro de más peso visual para colecciones Pro.', category:'props', badge:'Pro', tier:'pro', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/BoomBox/glTF-Binary/BoomBox.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/BoomBox/screenshot/screenshot.png' },
  { id:'pro-waterbottle', title:'Water Bottle', description:'Producto estilizado para visualización y prototipado.', category:'props', badge:'Clean', tier:'pro', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/WaterBottle/glTF-Binary/WaterBottle.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/WaterBottle/screenshot/screenshot.png' },
  { id:'pro-cesium', title:'Cesium Milk Truck', description:'Vehículo completo con presencia premium.', category:'vehicles', badge:'Vehicle', tier:'pro', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/CesiumMilkTruck/glTF-Binary/CesiumMilkTruck.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/CesiumMilkTruck/screenshot/screenshot.png' },
  { id:'pro-office', title:'Office Chair', description:'Asset funcional de interior para escenas de producto.', category:'environment', badge:'Interior', tier:'pro', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/OfficeChair/glTF-Binary/OfficeChair.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/OfficeChair/screenshot/screenshot.png' },
  { id:'pro-rigged', title:'Rigged Figure', description:'Figura articulada para presentaciones y bloques de animación.', category:'characters', badge:'Rigged', tier:'pro', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/RiggedSimple/glTF-Binary/RiggedSimple.glb', posterUrl:'' },

  { id:'ul-robot', title:'Robot Expressive', description:'Modelo showcase con fuerte identidad visual.', category:'characters', badge:'Ultimate', tier:'ultimate', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/RobotExpressive/glTF-Binary/RobotExpressive.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/RobotExpressive/screenshot/screenshot.png' },
  { id:'ul-fish', title:'Barramundi Fish', description:'Pieza de showcase orgánica para biblioteca avanzada.', category:'showcase', badge:'Organic', tier:'ultimate', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/BarramundiFish/glTF-Binary/BarramundiFish.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/BarramundiFish/screenshot/screenshot.png' },
  { id:'ul-litigator', title:'Litigator', description:'Vehicle / craft de alto impacto para portada o demo.', category:'showcase', badge:'High-end', tier:'ultimate', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/LittlestTokyo/glTF-Binary/LittlestTokyo.glb', posterUrl:'' },
  { id:'ul-damaged', title:'Damaged Helmet', description:'Asset hero con mucho detalle para renders y campañas.', category:'characters', badge:'Hero', tier:'ultimate', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/screenshot/screenshot.png' },
  { id:'ul-antique', title:'Antique Camera', description:'Prop premium con aire editorial y acabado elegante.', category:'environment', badge:'Editorial', tier:'ultimate', modelUrl:'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/AntiqueCamera/glTF-Binary/AntiqueCamera.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/AntiqueCamera/screenshot/screenshot.png' }
];

const STORAGE_KEY = 'real3d_assets_v3';
const ADMIN_KEY = 'real3d_admin_session';

function getAssets() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return DEFAULT_ASSETS;
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_ASSETS;
  } catch {
    return DEFAULT_ASSETS;
  }
}
function saveAssets(assets) { localStorage.setItem(STORAGE_KEY, JSON.stringify(assets)); }
function safeFilename(text) { return (text || 'asset').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view')), { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('open'));
}

function createBadge(text, cls = '') {
  const span = document.createElement('span');
  span.className = `badge ${cls}`.trim();
  span.textContent = text;
  return span;
}

function assetCard(asset, downloadable) {
  const card = document.createElement('article');
  card.className = 'glass asset-card glow-card';
  card.dataset.category = (asset.category || 'asset').toLowerCase();
  const tierLabel = asset.tier === 'free' ? 'Free' : asset.tier === 'pro' ? 'Pro' : 'Ultimate';
  card.innerHTML = `
    <model-viewer class="asset-viewer" src="${asset.modelUrl}" poster="${asset.posterUrl || ''}" camera-controls auto-rotate exposure="1.1" environment-image="neutral"></model-viewer>
    <div class="asset-meta">
      <div>
        <h3 class="asset-title">${asset.title}</h3>
        <p class="asset-description">${asset.description || ''}</p>
      </div>
    </div>
    <div class="badges"></div>
    <div class="asset-actions"></div>
  `;
  const badges = card.querySelector('.badges');
  badges.appendChild(createBadge(tierLabel, `tier-${asset.tier}`));
  badges.appendChild(createBadge(asset.category || 'asset'));
  if (asset.badge) badges.appendChild(createBadge(asset.badge));

  const actions = card.querySelector('.asset-actions');
  if (downloadable) {
    const btn = document.createElement('button');
    btn.className = 'btn btn-small btn-primary';
    btn.textContent = 'Descargar .glb';
    btn.dataset.downloadUrl = asset.modelUrl;
    btn.dataset.downloadName = safeFilename(asset.title) + '.glb';
    actions.appendChild(btn);
  } else {
    const note = document.createElement('div');
    note.className = 'locked-note';
    note.textContent = asset.tier === 'pro' ? 'Disponible con suscripción Pro.' : 'Disponible con suscripción Ultimate.';
    actions.appendChild(note);
  }
  return card;
}

function renderLibrary() {
  const freeGrid = document.getElementById('free-grid');
  const proGrid = document.getElementById('pro-grid');
  const ultimateGrid = document.getElementById('ultimate-grid');
  if (!freeGrid && !proGrid && !ultimateGrid) return;

  const assets = getAssets();
  const tiers = { free: [], pro: [], ultimate: [] };
  assets.forEach(a => tiers[a.tier]?.push(a));

  if (freeGrid) tiers.free.forEach(asset => freeGrid.appendChild(assetCard(asset, true)));
  if (proGrid) tiers.pro.forEach(asset => proGrid.appendChild(assetCard(asset, false)));
  if (ultimateGrid) tiers.ultimate.forEach(asset => ultimateGrid.appendChild(assetCard(asset, false)));
}

function initFilters() {
  document.querySelectorAll('[data-filter-bar]').forEach((bar) => {
    const tier = bar.dataset.filterBar;
    const section = document.querySelector(`[data-tier-section="${tier}"]`);
    if (!section) return;
    const cards = () => [...section.querySelectorAll('.asset-card')];
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-chip');
      if (!btn) return;
      bar.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
      btn.classList.add('active');
      const value = btn.dataset.filter;
      cards().forEach(card => {
        const ok = value === 'all' || card.dataset.category.includes(value);
        card.classList.toggle('hidden', !ok);
      });
    });
  });
}

async function forceDownload(url, filename) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename || 'model.glb';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);
    showToast('Descarga iniciada.');
  } catch {
    window.open(url, '_blank');
    showToast('Se abrió el archivo en otra pestaña.');
  }
}

function initDownloads() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-download-url]');
    if (!btn) return;
    forceDownload(btn.dataset.downloadUrl, btn.dataset.downloadName);
  });
}

function showToast(msg) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const div = document.createElement('div');
  div.className = 'toast';
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3200);
}

function initCommissionForm() {
  const form = document.getElementById('commission-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Solicitud enviada correctamente.');
    form.reset();
    document.querySelectorAll('.custom-select').forEach(resetCustomSelect);
  });
}

function resetCustomSelect(select) {
  const trigger = select.querySelector('.custom-select-trigger');
  const hidden = select.querySelector('input[type="hidden"]');
  const placeholder = select.dataset.placeholder || 'Seleccionar';
  if (hidden) hidden.value = hidden.id === 'asset-tier' ? 'free' : '';
  trigger.textContent = hidden?.id === 'asset-tier' ? 'Free' : placeholder;
  select.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
  if (hidden?.id === 'asset-tier') {
    const first = select.querySelector('.custom-option[data-value="free"]');
    first?.classList.add('selected');
  }
}

function initCustomSelects() {
  const selects = document.querySelectorAll('.custom-select');
  if (!selects.length) return;

  selects.forEach((select) => {
    const trigger = select.querySelector('.custom-select-trigger');
    const hidden = select.querySelector('input[type="hidden"]');
    const options = select.querySelectorAll('.custom-option');

    trigger?.addEventListener('click', () => {
      document.querySelectorAll('.custom-select.open').forEach(other => other !== select && other.classList.remove('open'));
      select.classList.toggle('open');
    });

    options.forEach((option) => {
      option.addEventListener('click', () => {
        const value = option.dataset.value || option.textContent.trim();
        if (hidden) hidden.value = value;
        trigger.textContent = option.textContent.trim();
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        select.classList.remove('open');
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
      document.querySelectorAll('.custom-select.open').forEach(select => select.classList.remove('open'));
    }
  });
}

function renderAdminList() {
  const box = document.getElementById('admin-assets-list');
  if (!box) return;
  const assets = getAssets();
  box.innerHTML = '';
  assets.forEach(asset => {
    const row = document.createElement('div');
    row.className = 'admin-list-item';
    row.innerHTML = `
      <div class="admin-list-meta">
        <h4>${asset.title}</h4>
        <p>${asset.tier.toUpperCase()} · ${asset.category || 'asset'}</p>
      </div>
      <button class="mini-btn danger" data-delete-id="${asset.id}">Eliminar</button>
    `;
    box.appendChild(row);
  });
}

function initAdmin() {
  const loginBox = document.getElementById('admin-login-box');
  const panel = document.getElementById('admin-panel');
  if (!loginBox && !panel) return;

  const setPanelState = (logged) => {
    if (loginBox) loginBox.classList.toggle('hidden', logged);
    if (panel) panel.classList.toggle('hidden', !logged);
    if (logged) renderAdminList();
  };

  setPanelState(localStorage.getItem(ADMIN_KEY) === '1');

  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('admin-user').value.trim();
      const pass = document.getElementById('admin-pass').value.trim();
      if (user === 'admin' && pass === 'real3d2026') {
        localStorage.setItem(ADMIN_KEY, '1');
        setPanelState(true);
        showToast('Sesión iniciada.');
      } else {
        showToast('Credenciales incorrectas.');
      }
    });
  }

  const logoutBtn = document.getElementById('admin-logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(ADMIN_KEY);
    setPanelState(false);
  });

  const assetForm = document.getElementById('admin-asset-form');
  if (assetForm) {
    assetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const assets = getAssets();
      const newAsset = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        title: document.getElementById('asset-title').value.trim(),
        category: document.getElementById('asset-category').value.trim().toLowerCase(),
        description: document.getElementById('asset-description').value.trim(),
        modelUrl: document.getElementById('asset-model-url').value.trim(),
        posterUrl: document.getElementById('asset-poster-url').value.trim(),
        tier: document.getElementById('asset-tier').value || 'free',
        badge: document.getElementById('asset-badge').value.trim()
      };
      assets.unshift(newAsset);
      saveAssets(assets);
      assetForm.reset();
      document.querySelectorAll('.custom-select').forEach(select => {
        if (select.querySelector('#asset-tier')) resetCustomSelect(select);
      });
      renderAdminList();
      showToast('Asset guardado.');
    });
  }

  document.addEventListener('click', (e) => {
    const del = e.target.closest('[data-delete-id]');
    if (!del) return;
    const assets = getAssets().filter(a => a.id !== del.dataset.deleteId);
    saveAssets(assets);
    renderAdminList();
    showToast('Asset eliminado.');
  });

  const exportBtn = document.getElementById('export-assets-btn');
  if (exportBtn) exportBtn.addEventListener('click', () => {
    const data = JSON.stringify(getAssets(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'real3d-assets.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  const importInput = document.getElementById('import-assets-input');
  if (importInput) {
    importInput.addEventListener('change', async () => {
      const file = importInput.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        if (!Array.isArray(parsed)) throw new Error('bad format');
        saveAssets(parsed);
        renderAdminList();
        showToast('Catálogo importado.');
      } catch {
        showToast('No se pudo importar el JSON.');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initMobileMenu();
  initCustomSelects();
  renderLibrary();
  initFilters();
  initDownloads();
  initCommissionForm();
  initAdmin();
});
