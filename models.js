const DEFAULT_MODELS = [
  { id: "free-1", title: "Chair", plan: "free", tag: "product", desc: "Modelo básico optimizado.", src: "./assets/models/free/chair.glb" },
  { id: "free-2", title: "Duck Demo", plan: "free", tag: "creature", desc: "Modelo ligero para preview.", src: "./assets/models/free/duck-demo.glb" },

  { id: "pro-1", title: "Apple", plan: "pro", tag: "product", desc: "Modelo simple premium.", src: "./assets/models/pro/APPLE.glb" },
  { id: "pro-2", title: "Forest Scene", plan: "pro", tag: "environment", desc: "Escenario low poly mejorado.", src: "./assets/models/pro/low_poly_forest.glb" },

  { id: "ultimate-1", title: "Neil Armstrong", plan: "ultimate", tag: "character", desc: "Asset histórico de alta calidad.", src: "./assets/models/ultimate/NeilArmstrong.glb" },
  { id: "ultimate-2", title: "Ferrari", plan: "ultimate", tag: "vehicle", desc: "Vehículo de alto nivel.", src: "./assets/models/ultimate/Ferrari.glb" },
  { id: "ultimate-3", title: "Gaming PC", plan: "ultimate", tag: "product", desc: "Setup premium detallado.", src: "./assets/models/ultimate/custom_gaming_pc.glb" }
];

function getCustomAssets() {
  try {
    return JSON.parse(localStorage.getItem("real3d_assets") || "[]");
  } catch (e) {
    return [];
  }
}

function saveCustomAssets(items) {
  localStorage.setItem("real3d_assets", JSON.stringify(items));
}

window.Real3DModels = {
  getAll: () => [...DEFAULT_MODELS, ...getCustomAssets()],
  saveCustomAssets
};
