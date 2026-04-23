document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("grid");
  if (!grid) return;

  MODELS.forEach(model => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${model.image}" class="card-img">

      <div class="card-body">
        <h3>${model.title}</h3>
        <p>${model.desc}</p>

        <span class="badge ${model.plan.toLowerCase()}">${model.plan}</span>

        <div class="card-actions">
          <a href="${model.link}" target="_blank" class="btn">
            Ver 3D
          </a>
          <button class="btn ghost">
            Descargar
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

});