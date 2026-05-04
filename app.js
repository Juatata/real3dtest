const DEFAULT_ASSETS = [
  { id:'free-duck', title:'Mascota pato', description:'Asset simple y ligero para prototipos o escenas casuales.', category:'props', badge:'Free', tier:'free', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Duck/glTF-Binary/Duck.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Duck/screenshot/screenshot.png' },
  { id:'free-crate', title:'Caja texturizada', description:'Prop básico para bloquear niveles y probar materiales.', category:'props', badge:'Starter', tier:'free', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BoxTextured/glTF-Binary/BoxTextured.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BoxTextured/screenshot/screenshot.png' },
  { id:'free-toycar', title:'Coche low poly', description:'Vehículo sencillo para escenas arcade o pruebas rápidas.', category:'vehicles', badge:'Low poly', tier:'free', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/screenshot/screenshot.jpg' },
  { id:'free-fox', title:'Zorro animado', description:'Criatura ligera con animaciones, ideal para prototipos jugables.', category:'characters', badge:'Animated', tier:'free', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Fox/glTF-Binary/Fox.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Fox/screenshot/screenshot.jpg' },
  { id:'free-rig', title:'Rig básico', description:'Personaje simple con esqueleto para probar movimiento.', category:'characters', badge:'Rig', tier:'free', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/RiggedSimple/glTF-Binary/RiggedSimple.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/RiggedSimple/screenshot/screenshot.gif' },

  { id:'pro-lantern', title:'Linterna medieval', description:'Prop de escenario con más detalle para mazmorras o mapas nocturnos.', category:'props', badge:'Pro', tier:'pro', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Lantern/glTF-Binary/Lantern.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Lantern/screenshot/screenshot.jpg' },
  { id:'pro-boombox', title:'Boom Box retro', description:'Prop con personalidad para habitaciones, hubs o cinemáticas.', category:'props', badge:'Retro', tier:'pro', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BoomBox/glTF-Binary/BoomBox.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BoomBox/screenshot/screenshot.jpg' },
  { id:'pro-waterbottle', title:'Botella de agua', description:'Objeto limpio para inventario, decoración o pruebas de PBR.', category:'props', badge:'Clean', tier:'pro', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/WaterBottle/glTF-Binary/WaterBottle.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/WaterBottle/screenshot/screenshot.jpg' },
  { id:'pro-cesium-man', title:'Soldado animado', description:'Personaje clásico con skin y animación para escenas de gameplay.', category:'characters', badge:'Animated', tier:'pro', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/CesiumMan/glTF-Binary/CesiumMan.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/CesiumMan/screenshot/screenshot.gif' },
  { id:'pro-chair', title:'Silla decorativa', description:'Asset de entorno con materiales más ricos para interiores jugables.', category:'environment', badge:'Interior', tier:'pro', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/screenshot/screenshot.jpg' },

  { id:'ul-brainstem', title:'BrainStem', description:'Modelo orgánico animado para comprobar skins y materiales.', category:'characters', badge:'Ultimate', tier:'ultimate', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BrainStem/glTF-Binary/BrainStem.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BrainStem/screenshot/screenshot.gif' },
  { id:'ul-fish', title:'Pez Barramundi', description:'Un pez con texturas orgánicas complejas y mucho detalle.', category:'showcase', badge:'Organic', tier:'ultimate', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BarramundiFish/glTF-Binary/BarramundiFish.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/BarramundiFish/screenshot/screenshot.jpg' },
  { id:'ul-helmet', title:'Casco dañado', description:'Hero prop futurista con desgaste, normales y acabado premium.', category:'characters', badge:'Hero', tier:'ultimate', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/DamagedHelmet/screenshot/screenshot.png' },
  { id:'ul-corset', title:'Corset', description:'Maniquí de tela con corset y materiales de alta calidad.', category:'characters', badge:'Hero', tier:'ultimate', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Corset/glTF-Binary/Corset.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/Corset/screenshot/screenshot.jpg' },
  { id:'ul-antique', title:'Cámara Vintage', description:'Una cámara fotográfica clásica con detalles y presencia editorial.', category:'environment', badge:'Editorial', tier:'ultimate', modelUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/AntiqueCamera/glTF-Binary/AntiqueCamera.glb', posterUrl:'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/AntiqueCamera/screenshot/screenshot.png' }
];

const STORAGE_KEY = 'real3d_assets_v5';
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
    showToast('Se abrió en otra pestaña.');
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
    showToast('Solicitud enviada.');
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
      showToast('Modelo guardado.');
    });
  }

  document.addEventListener('click', (e) => {
    const del = e.target.closest('[data-delete-id]');
    if (!del) return;
    const assets = getAssets().filter(a => a.id !== del.dataset.deleteId);
    saveAssets(assets);
    renderAdminList();
    showToast('Modelo eliminado.');
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
        showToast('Catálogo importado correctamente.');
      } catch {
        showToast('Error al importar JSON.');
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
