import { getLatestPosts } from "./blog-data.js";

(function () {
  const root = document.getElementById("blog-latest");
  if (!root) return;

  const fmt = iso =>
    new Date(iso).toLocaleDateString("es-EC", { year:"numeric", month:"long", day:"2-digit" });

  const posts = getLatestPosts(3);

  root.innerHTML = `
    <div class="lb">
      <div class="lb-grid">
        ${posts.map(p => `
          <article class="lb-card">
            <div class="lb-thumb"><img loading="lazy" src="${p.cover}" alt="${p.titulo}"></div>
            <h4 class="lb-title">${p.titulo}</h4>
            <div class="lb-date">${fmt(p.fechaISO)}</div>
            <p class="lb-excerpt">${p.resumen}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;
})();
