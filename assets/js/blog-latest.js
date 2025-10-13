// assets/js/blog-latest.js
import { getLatestPosts } from "./blog-data.js";

(function () {
  const box = document.getElementById("blog-latest");
  if (!box) return;

  const fmt = iso => new Date(iso).toLocaleDateString("es-EC",
    { year: "numeric", month: "short", day: "2-digit" });

  const latest = getLatestPosts(3);
  box.innerHTML = latest.map(p => `
    <article class="blog-mini">
      <div class="thumb"><img src="${p.cover}" alt="${p.titulo}"></div>
      <div class="info">
        <span class="cat">${p.categoria}</span>
        <h4>${p.titulo}</h4>
        <time datetime="${p.fechaISO}">${fmt(p.fechaISO)}</time>
        <p class="excerpt">${p.resumen}</p>
      </div>
    </article>
  `).join("");
})();
