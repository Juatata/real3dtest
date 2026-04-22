const DEFAULT_MODELS = [
  { id: "free-1", title: "Flight Helmet", plan: "free", tag: "product", desc: "Asset base para props y visualización.", src: "https://modelviewer.dev/shared-assets/models/FlightHelmet.glb" },
  { id: "free-2", title: "Damaged Helmet", plan: "free", tag: "product", desc: "Modelo técnico gratuito de entrada.", src: "https://modelviewer.dev/shared-assets/models/DamagedHelmet.glb" },
  { id: "free-3", title: "Horse", plan: "free", tag: "creature", desc: "Creatura funcional para pruebas y escenas.", src: "https://modelviewer.dev/shared-assets/models/Horse.glb" },
  { id: "free-4", title: "Lantern", plan: "free", tag: "product", desc: "Prop limpio para catálogo inicial.", src: "https://modelviewer.dev/shared-assets/models/Lantern.glb" },
  { id: "free-5", title: "Chair Basic", plan: "free", tag: "product", desc: "Producto simple para presentación Free.", src: "https://modelviewer.dev/shared-assets/models/ShopifyModels/Chair.glb" },

  { id: "pro-1", title: "Robot Expressive", plan: "pro", tag: "character", desc: "Personaje premium para mostrar salto de nivel.", src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb" },
  { id: "pro-2", title: "Neil Armstrong", plan: "pro", tag: "character", desc: "Figura con más presencia visual.", src: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb" },
  { id: "pro-3", title: "Boom Box", plan: "pro", tag: "product", desc: "Objeto hero con carácter retro.", src: "https://modelviewer.dev/shared-assets/models/boom_box.glb" },
  { id: "pro-4", title: "Fox", plan: "pro", tag: "creature", desc: "Creatura ligera dentro del bloque premium.", src: "https://modelviewer.dev/shared-assets/models/Fox.glb" },
  { id: "pro-5", title: "Car Concept", plan: "pro", tag: "vehicle", desc: "Vehículo premium para elevar percepción.", src: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/CarConcept.glb" },

  { id: "ultimate-1", title: "Astronaut", plan: "ultimate", tag: "character", desc: "Hero asset del plan más alto.", src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb" },
  { id: "ultimate-2", title: "Sports Car", plan: "ultimate", tag: "vehicle", desc: "Vehículo de alta presencia para el catálogo top.", src: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/Ferrari.glb" },
  { id: "ultimate-3", title: "Dragon", plan: "ultimate", tag: "creature", desc: "Pieza de showcase con identidad más fuerte.", src: "https://modelviewer.dev/shared-assets/models/DragonAttenuation.glb" },
  { id: "ultimate-4", title: "Robot Hero", plan: "ultimate", tag: "character", desc: "Variante premium para proyectos de mayor ticket.", src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb" },
  { id: "ultimate-5", title: "Luxury Chair", plan: "ultimate", tag: "product", desc: "Producto premium con mejor acabado visual.", src: "https://modelviewer.dev/shared-assets/models/ShopifyModels/Chair.glb" }
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
