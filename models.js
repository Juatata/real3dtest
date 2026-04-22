
const DEFAULT_MODELS = [
  {id:'free-1', title:'Flight Helmet', plan:'free', tag:'product', desc:'Asset base para props y visualización.', src:'https://modelviewer.dev/shared-assets/models/FlightHelmet.glb'},
  {id:'free-2', title:'Damaged Helmet', plan:'free', tag:'product', desc:'Modelo gratuito con look más técnico.', src:'https://modelviewer.dev/shared-assets/models/DamagedHelmet.glb'},
  {id:'free-3', title:'Horse', plan:'free', tag:'creature', desc:'Asset orgánico para escenas o pruebas.', src:'https://modelviewer.dev/shared-assets/models/Horse.glb'},
  {id:'free-4', title:'Lantern', plan:'free', tag:'product', desc:'Prop de lectura limpia para catálogo inicial.', src:'https://modelviewer.dev/shared-assets/models/Lantern.glb'},
  {id:'free-5', title:'Shopify Chair', plan:'free', tag:'product', desc:'Producto de ejemplo para entorno comercial.', src:'https://modelviewer.dev/shared-assets/models/ShopifyModels/Chair.glb'},

  {id:'pro-1', title:'Robot Expressive', plan:'pro', tag:'character', desc:'Personaje con mayor presencia para el nivel Pro.', src:'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb'},
  {id:'pro-2', title:'Neil Armstrong', plan:'pro', tag:'character', desc:'Figura premium orientada a demos de calidad.', src:'https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb'},
  {id:'pro-3', title:'Vintage Car', plan:'pro', tag:'vehicle', desc:'Vehículo con mejor impacto visual.', src:'https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/CarConcept.glb'},
  {id:'pro-4', title:'Boom Box', plan:'pro', tag:'product', desc:'Producto hero con estética retro.', src:'https://modelviewer.dev/shared-assets/models/boom_box.glb'},
  {id:'pro-5', title:'Fox', plan:'pro', tag:'creature', desc:'Creatura ligera para catálogo premium.', src:'https://modelviewer.dev/shared-assets/models/Fox.glb'},

  {id:'ultimate-1', title:'Astronaut', plan:'ultimate', tag:'character', desc:'Hero asset de máximo nivel.', src:'https://modelviewer.dev/shared-assets/models/Astronaut.glb'},
  {id:'ultimate-2', title:'Sports Car', plan:'ultimate', tag:'vehicle', desc:'Modelo de alto impacto para biblioteca final.', src:'https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/Ferrari.glb'},
  {id:'ultimate-3', title:'Dragon', plan:'ultimate', tag:'creature', desc:'Pieza de showcase para el plan más alto.', src:'https://modelviewer.dev/shared-assets/models/DragonAttenuation.glb'},
  {id:'ultimate-4', title:'Robot Hero', plan:'ultimate', tag:'character', desc:'Variante premium para proyectos de mayor ticket.', src:'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb'},
  {id:'ultimate-5', title:'Luxury Chair', plan:'ultimate', tag:'product', desc:'Producto premium con look más editorial.', src:'https://modelviewer.dev/shared-assets/models/ShopifyModels/Chair.glb'}
];

function getCustomAssets(){
  try{
    return JSON.parse(localStorage.getItem('real3d_assets') || '[]');
  }catch(e){ return []; }
}
function saveCustomAssets(items){
  localStorage.setItem('real3d_assets', JSON.stringify(items));
}
window.Real3DModels = {
  getAll: () => [...DEFAULT_MODELS, ...getCustomAssets()],
  saveCustomAssets
};
