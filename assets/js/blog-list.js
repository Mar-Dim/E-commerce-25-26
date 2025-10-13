import { blogPosts } from "./blog-data.js";

(function () {
  const list = document.getElementById("blog-list");
  const search = document.getElementById("blog-search");
  const category = document.getElementById("blog-category");
  if (!list) return;

  const fmt = iso =>
    new Date(iso).toLocaleDateString("es-EC", { year:"numeric", month:"long", day:"2-digit" });

  const render = () => {
    const q = (search?.value || "").toLowerCase().trim();
    const cat = category?.value || "Todas";

    const filtered = blogPosts.filter(p => {
      const byText = !q || p.titulo.toLowerCase().includes(q) || p.resumen.toLowerCase().includes(q);
      const byCat  = !category || cat === "Todas" || p.categoria === cat;
      return byText && byCat;
    });

    list.innerHTML = `
      <div class="bp-grid">
        ${filtered.map(p => `
          <article class="bp-card">
            <div class="bp-thumb">
              <img loading="lazy" src="${p.cover}" alt="${p.titulo}">
            </div>
            <div class="bp-body">
              <div class="bp-meta">
                <span class="bp-cat">${p.categoria}</span>
                <time datetime="${p.fechaISO}">${fmt(p.fechaISO)}</time>
              </div>
              <h3 class="bp-title">${p.titulo}</h3>
              <p class="bp-excerpt">${p.resumen}</p>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  };

  search?.addEventListener("input", render);
  category?.addEventListener("change", render);
  render();
})();
