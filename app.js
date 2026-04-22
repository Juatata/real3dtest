
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 60);
  });

  initCustomSelects();
  initCommissionForm();
  initLibrary();
  initAdmin();
});

function initCustomSelects(){
  document.querySelectorAll('.custom-select').forEach(select => {
    const trigger = select.querySelector('.select-trigger');
    const menu = select.querySelector('.select-menu');
    const hidden = select.querySelector('input[type="hidden"]');
    if(!trigger || !menu || !hidden) return;
    trigger.addEventListener('click', () => {
      document.querySelectorAll('.custom-select').forEach(s => s !== select && s.classList.remove('open'));
      select.classList.toggle('open');
    });
    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        hidden.value = btn.dataset.value;
        trigger.textContent = btn.dataset.value;
        select.classList.remove('open');
      });
    });
  });
  document.addEventListener('click', e => {
    if(!e.target.closest('.custom-select')){
      document.querySelectorAll('.custom-select').forEach(s => s.classList.remove('open'));
    }
  });
}

function initCommissionForm(){
  const form = document.getElementById('commissionForm');
  const success = document.getElementById('successBox');
  if(!form || !success) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.classList.add('hidden');
    success.classList.remove('hidden');
  });
}

function initLibrary(){
  const grid = document.getElementById('assetGrid');
  const stage = document.getElementById('previewStage');
  if(!grid || !stage || !window.Real3DModels) return;

  const title = document.getElementById('previewTitle');
  const text = document.getElementById('previewText');
  const planEl = document.getElementById('previewPlan');
  const downloadBtn = document.getElementById('downloadBtn');

  const params = new URLSearchParams(window.location.search);
  let currentPlan = params.get('plan') || 'all';
  let currentTag = 'all';
  const allAssets = window.Real3DModels.getAll();

  function renderCards(){
    grid.innerHTML = '';
    const filtered = allAssets.filter(item => {
      const planMatch = currentPlan === 'all' || item.plan === currentPlan;
      const tagMatch = currentTag === 'all' || item.tag === currentTag;
      return planMatch && tagMatch;
    });

    filtered.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'asset-card reveal visible';
      card.innerHTML = `
        <div class="asset-thumb">
          <model-viewer src="${item.src}" alt="${item.title}" camera-controls auto-rotate style="width:100%;height:100%;"></model-viewer>
        </div>
        <div class="asset-meta">
          <div>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
          <span class="pill ${item.plan === 'pro' ? 'pro' : item.plan === 'ultimate' ? 'ultimate' : ''}">${capitalize(item.plan)}</span>
        </div>
        <div class="asset-tags">
          <span class="asset-tag">${item.tag}</span>
          <span class="asset-tag">preview 3D</span>
          <span class="asset-tag">download</span>
        </div>
      `;
      card.addEventListener('click', () => loadPreview(item));
      grid.appendChild(card);
      if(index === 0) loadPreview(item);
    });
  }

  function loadPreview(item){
    stage.innerHTML = `
      <model-viewer
        src="${item.src}"
        alt="${item.title}"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1"
        style="width:100%;height:100%;"
      ></model-viewer>`;
    title.textContent = item.title;
    text.textContent = item.desc;
    planEl.textContent = capitalize(item.plan);
    planEl.className = 'pill ' + (item.plan === 'pro' ? 'pro' : item.plan === 'ultimate' ? 'ultimate' : '');
    downloadBtn.href = item.src;
    downloadBtn.setAttribute('download', '');
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    if(btn.dataset.plan === currentPlan) btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPlan = btn.dataset.plan;
      renderCards();
    });
  });
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTag = btn.dataset.tag;
      renderCards();
    });
  });

  renderCards();
}

function initAdmin(){
  const login = document.getElementById('adminLogin');
  const panel = document.getElementById('adminPanel');
  const list = document.getElementById('adminList');
  const assetForm = document.getElementById('assetForm');
  if(!login || !panel || !window.Real3DModels) return;

  const user = document.getElementById('adminUser');
  const pass = document.getElementById('adminPass');

  login.addEventListener('submit', e => {
    e.preventDefault();
    if(user.value === 'admin' && pass.value === 'real3d2026'){
      login.parentElement.classList.add('hidden');
      panel.classList.remove('hidden');
      refreshAdminList();
    } else {
      alert('Credenciales incorrectas');
    }
  });

  assetForm.addEventListener('submit', e => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('real3d_assets') || '[]');
    items.push({
      id: 'custom-' + Date.now(),
      title: document.getElementById('assetTitle').value,
      plan: document.getElementById('assetPlan').value,
      tag: document.getElementById('assetTag').value,
      desc: document.getElementById('assetDesc').value || 'Asset añadido desde admin.',
      src: document.getElementById('assetSrc').value
    });
    window.Real3DModels.saveCustomAssets(items);
    assetForm.reset();
    refreshAdminList();
  });

  function refreshAdminList(){
    const items = JSON.parse(localStorage.getItem('real3d_assets') || '[]');
    list.innerHTML = '<h3>Assets añadidos</h3>';
    if(!items.length){
      list.innerHTML += '<p class="lead">Todavía no hay assets personalizados.</p>';
      return;
    }
    items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'admin-item';
      row.innerHTML = `<div><strong>${item.title}</strong><br><span class="lead">${capitalize(item.plan)} · ${item.tag}</span></div>
      <button class="btn btn-sm btn-ghost">Eliminar</button>`;
      row.querySelector('button').addEventListener('click', () => {
        const next = items.filter(x => x.id !== item.id);
        window.Real3DModels.saveCustomAssets(next);
        refreshAdminList();
      });
      list.appendChild(row);
    });
  }
}

function capitalize(v){
  return v.charAt(0).toUpperCase() + v.slice(1);
}
