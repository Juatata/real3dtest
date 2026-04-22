const DEFAULT_MODELS = [

  // FREE
  {
    id: "free-1",
    title: "Helmet",
    plan: "free",
    tag: "product",
    desc: "Modelo base.",
    src: "https://modelviewer.dev/shared-assets/models/FlightHelmet.glb"
  },
  {
    id: "free-2",
    title: "Duck",
    plan: "free",
    tag: "creature",
    desc: "Modelo ligero.",
    src: "https://modelviewer.dev/shared-assets/models/Duck.glb"
  },

  // PRO
  {
    id: "pro-1",
    title: "Robot",
    plan: "pro",
    tag: "character",
    desc: "Modelo premium.",
    src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
  },
  {
    id: "pro-2",
    title: "Fox",
    plan: "pro",
    tag: "creature",
    desc: "Modelo orgánico.",
    src: "https://modelviewer.dev/shared-assets/models/Fox.glb"
  },

  // ULTIMATE
  {
    id: "ultimate-1",
    title: "Neil Armstrong",
    plan: "ultimate",
    tag: "character",
    desc: "Astronauta.",
    src: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
  },
  {
    id: "ultimate-2",
    title: "Astronaut",
    plan: "ultimate",
    tag: "character",
    desc: "Modelo hero.",
    src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
  },
  {
    id: "ultimate-3",
    title: "Boom Box",
    plan: "ultimate",
    tag: "product",
    desc: "Objeto premium.",
    src: "https://modelviewer.dev/shared-assets/models/boom_box.glb"
  }

];

function getCustomAssets() {
  try {
    return JSON.parse(localStorage.getItem("real3d_assets") || "[]");
  } catch {
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