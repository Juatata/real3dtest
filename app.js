const DEFAULT_ASSETS = [
  {
    id: 'duck-free',
    title: 'Duck Demo Asset',
    description: 'Modelo clásico de demostración para la biblioteca Free.',
    category: 'Props',
    badge: 'Demo',
    tier: 'free',
    modelUrl: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Duck/glTF-Binary/Duck.glb',
    posterUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Duck/screenshot/screenshot.png'
  },
  {
    id: 'avocado-free',
    title: 'Avocado Asset',
    description: 'Otro asset de muestra listo para previsualizar y descargar.',
    category: 'Food',
    badge: 'Free',
    tier: 'free',
    modelUrl: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Avocado/glTF-Binary/Avocado.glb',
    posterUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Avocado/screenshot/screenshot.png'
  },
  {
    id: 'helmet-pro',
    title: 'Damaged Helmet',
    description: 'Asset premium de ejemplo visible para el catálogo Pro.',
    category: 'Hard Surface',
    badge: 'Premium',
    tier: 'pro',
    modelUrl: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
    posterUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/screenshot/screenshot.png'
  },
  {
    id: 'barramundi-pro',
    title: 'Barramundi Fish',
    description: 'Preview interactiva para reforzar el valor del plan Pro.',
    category: 'Creatures',
    badge: 'Nuevo',
    tier: 'pro',
    modelUrl: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/BarramundiFish/glTF-Binary/BarramundiFish.glb',
    posterUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/BarramundiFish/screenshot/screenshot.png'
  },
  {
    id: 'boom-ultimate',
    title: 'Boom Box Ultimate',
    description: 'Asset destacado para la biblioteca más alta.',
    category: 'Retro Props',
    badge: 'Ultimate',
    tier: 'ultimate',
    modelUrl: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/BoomBox/glTF-Binary/BoomBox.glb',
    posterUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/BoomBox/screenshot/screenshot.png'
  },
  {
    id: 'flight-ultimate',
    title: 'Flight Helmet',
    description: 'Ejemplo premium para completar el nivel Ultimate.',
    category: 'Characters / Gear',
    badge: 'Studio',
    tier: 'ultimate',
    modelUrl: 'https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/FlightHelmet/glTF-Binary/FlightHelmet.glb',
    posterUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/FlightHelmet/screenshot/screenshot.png'
  }
];

const STORAGE_KEY = 'real3d_assets_v2';
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

function saveAssets(assets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });
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
  card.className = 'glass asset-card';
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
  badges.appendChild(createBadge(asset.category || 'Asset'));
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

function safeFilename(text) {
  return (text || 'asset').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderLibrary() {
  const freeGrid = document.getElementById('free-grid');
  const proGrid = document.getElementById('pro-grid');
  const ultimateGrid = document.getElementById('ultimate-grid');
  if (!freeGrid && !proGrid && !ultimateGrid) return;

  const assets = getAssets();
  const tiers = { free: [], pro: [], ultimate: [] };
  assets.forEach(a => { if (tiers[a.tier]) tiers[a.tier].push(a); });

  if (freeGrid) tiers.free.forEach(asset => freeGrid.appendChild(assetCard(asset, true)));
  if (proGrid) tiers.pro.forEach(asset => proGrid.appendChild(assetCard(asset, false)));
  if (ultimateGrid) tiers.ultimate.forEach(asset => ultimateGrid.appendChild(assetCard(asset, false)));
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
    showToast('No se pudo forzar la descarga. Se abrió el archivo en otra pestaña.');
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
    showToast('Solicitud enviada en modo demo.');
    form.reset();
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
        <p>${asset.tier.toUpperCase()} · ${asset.category || 'Asset'}</p>
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
        category: document.getElementById('asset-category').value.trim(),
        description: document.getElementById('asset-description').value.trim(),
        modelUrl: document.getElementById('asset-model-url').value.trim(),
        posterUrl: document.getElementById('asset-poster-url').value.trim(),
        tier: document.getElementById('asset-tier').value,
        badge: document.getElementById('asset-badge').value.trim()
      };
      assets.unshift(newAsset);
      saveAssets(assets);
      assetForm.reset();
      renderAdminList();
      showToast('Asset guardado en el navegador.');
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
        showToast('JSON importado correctamente.');
      } catch {
        showToast('No se pudo importar el JSON.');
      } finally {
        importInput.value = '';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initMobileMenu();
  initDownloads();
  renderLibrary();
  initCommissionForm();
  initAdmin();
});
