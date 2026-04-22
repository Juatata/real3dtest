document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initCustomSelects();
  initCommissionForm();
  initLibrary();
  initAdmin();
});

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => io.observe(item));
}

function initCustomSelects() {
  document.querySelectorAll(".custom-select").forEach((select) => {
    const trigger = select.querySelector(".select-trigger");
    const menu = select.querySelector(".select-menu");
    const hidden = select.querySelector('input[type="hidden"]');

    if (!trigger || !menu || !hidden) return;

    trigger.addEventListener("click", () => {
      document.querySelectorAll(".custom-select").forEach((s) => {
        if (s !== select) s.classList.remove("open");
      });
      select.classList.toggle("open");
    });

    menu.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        hidden.value = btn.dataset.value;
        trigger.textContent = btn.dataset.value;
        select.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      document.querySelectorAll(".custom-select").forEach((s) => s.classList.remove("open"));
    }
  });
}

function initCommissionForm() {
  const form = document.getElementById("commissionForm");
  const success = document.getElementById("successBox");
  if (!form || !success) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("hidden");
    success.classList.remove("hidden");
  });
}

function initLibrary() {
  const grid = document.getElementById("assetGrid");
  const stage = document.getElementById("previewStage");
  if (!grid || !stage || !window.Real3DModels) return;

  const title = document.getElementById("previewTitle");
  const text = document.getElementById("previewText");
  const planEl = document.getElementById("previewPlan");
  const downloadBtn = document.getElementById("downloadBtn");

  const params = new URLSearchParams(window.location.search);
  let currentPlan = params.get("plan") || "all";
  let currentTag = "all";
  const allAssets = window.Real3DModels.getAll();
  let modelViewerLoaded = false;

  syncActiveButtons(currentPlan, currentTag);
  renderCards();

  function renderCards() {
    const filtered = allAssets.filter((item) => {
      const planMatch = currentPlan === "all" || item.plan === currentPlan;
      const tagMatch = currentTag === "all" || item.tag === currentTag;
      return planMatch && tagMatch;
    });

    grid.innerHTML = "";
    filtered.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "asset-card";
      card.innerHTML = `
        <div class="asset-thumb asset-thumb-${item.plan}">
          <div class="asset-thumb-core">${item.title.charAt(0)}</div>
        </div>
        <div class="asset-card-top">
          <div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
          <span class="pill ${pillClass(item.plan)}">${capitalize(item.plan)}</span>
        </div>
        <div class="asset-tags">
          <span class="asset-tag">${item.tag}</span>
          <span class="asset-tag">preview</span>
          <span class="asset-tag">download</span>
        </div>
      `;
      card.addEventListener("click", () => loadPreview(item));
      grid.appendChild(card);

      if (index === 0) {
        loadPreview(item);
      }
    });

    if (!filtered.length) {
      stage.innerHTML = `
        <div class="loading-copy">
          <strong>No hay resultados</strong>
          <span>Prueba otro filtro o categoría.</span>
        </div>
      `;
      title.textContent = "Sin resultados";
      text.textContent = "No hay assets disponibles con esta combinación.";
      planEl.textContent = "—";
      planEl.className = "pill";
      downloadBtn.href = "#";
      downloadBtn.classList.add("disabled");
    }
  }

  async function ensureModelViewer() {
    if (modelViewerLoaded || window.customElements.get("model-viewer")) {
      modelViewerLoaded = true;
      return;
    }
    await import("https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js");
    modelViewerLoaded = true;
  }

  async function loadPreview(item) {
    stage.classList.add("loading-state");
    stage.innerHTML = `
      <div class="loading-copy">
        <strong>Cargando preview 3D...</strong>
        <span>${item.title}</span>
      </div>
    `;

    title.textContent = item.title;
    text.textContent = item.desc;
    planEl.textContent = capitalize(item.plan);
    planEl.className = "pill " + pillClass(item.plan);
    downloadBtn.href = item.src;
    downloadBtn.classList.remove("disabled");

    try {
      await ensureModelViewer();
      stage.innerHTML = `
        <model-viewer
          src="${item.src}"
          alt="${item.title}"
          camera-controls
          auto-rotate
          shadow-intensity="1"
          exposure="1"
          touch-action="pan-y"
          style="width:100%;height:100%;background:transparent;"
        ></model-viewer>
      `;
    } catch (err) {
      stage.innerHTML = `
        <div class="loading-copy">
          <strong>No se pudo cargar la preview</strong>
          <span>El asset sigue disponible para descarga.</span>
        </div>
      `;
    } finally {
      stage.classList.remove("loading-state");
    }
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPlan = btn.dataset.plan;
      syncActiveButtons(currentPlan, currentTag);
      renderCards();
    });
  });

  document.querySelectorAll(".tag-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentTag = btn.dataset.tag;
      syncActiveButtons(currentPlan, currentTag);
      renderCards();
    });
  });

  function syncActiveButtons(plan, tag) {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.plan === plan);
    });
    document.querySelectorAll(".tag-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.tag === tag);
    });
  }
}

function initAdmin() {
  const login = document.getElementById("adminLogin");
  const panel = document.getElementById("adminPanel");
  const assetForm = document.getElementById("assetForm");
  const adminList = document.getElementById("adminList");
  if (!login || !panel || !window.Real3DModels) return;

  const user = document.getElementById("adminUser");
  const pass = document.getElementById("adminPass");

  login.addEventListener("submit", (e) => {
    e.preventDefault();
    if (user.value === "admin" && pass.value === "real3d2026") {
      login.parentElement.classList.add("hidden");
      panel.classList.remove("hidden");
      refreshAdminList();
    } else {
      alert("Credenciales incorrectas");
    }
  });

  assetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem("real3d_assets") || "[]");
    items.push({
      id: "custom-" + Date.now(),
      title: document.getElementById("assetTitle").value,
      plan: document.getElementById("assetPlan").value,
      tag: document.getElementById("assetTag").value,
      desc: document.getElementById("assetDesc").value || "Asset añadido desde admin.",
      src: document.getElementById("assetSrc").value
    });
    window.Real3DModels.saveCustomAssets(items);
    assetForm.reset();
    refreshAdminList();
  });

  function refreshAdminList() {
    const items = JSON.parse(localStorage.getItem("real3d_assets") || "[]");
    adminList.innerHTML = "<h3>Assets añadidos</h3>";
    if (!items.length) {
      adminList.innerHTML += "<p class='muted'>Todavía no hay assets personalizados.</p>";
      return;
    }

    items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "admin-item";
      row.innerHTML = `
        <div>
          <strong>${item.title}</strong><br>
          <span class="muted">${capitalize(item.plan)} · ${item.tag}</span>
        </div>
        <button class="btn btn-sm btn-ghost">Eliminar</button>
      `;
      row.querySelector("button").addEventListener("click", () => {
        const next = items.filter((x) => x.id !== item.id);
        window.Real3DModels.saveCustomAssets(next);
        refreshAdminList();
      });
      adminList.appendChild(row);
    });
  }
}

function capitalize(v) {
  return v.charAt(0).toUpperCase() + v.slice(1);
}

function pillClass(plan) {
  if (plan === "pro") return "pill-pro";
  if (plan === "ultimate") return "pill-ultimate";
  return "pill-accent";
}
