// assets/js/search.js
function norm(s) {
  return (s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getProducts() {
  // productos está definido en products-data.js
  if (typeof productos !== "undefined") return productos;
  if (window.productos) return window.productos;
  return [];
}

function findBestIndex(q, list) {
  const nq = norm(q);
  if (!nq) return null;

  // 1) nombre exacto
  let i = list.findIndex(p => norm(p.nombre) === nq);
  if (i >= 0) return i;

  // 2) nombre empieza por
  i = list.findIndex(p => norm(p.nombre).startsWith(nq));
  if (i >= 0) return i;

  // 3) nombre contiene
  i = list.findIndex(p => norm(p.nombre).includes(nq));
  if (i >= 0) return i;

  return null;
}

function toast(msg) {
  let el = document.getElementById("search-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "search-toast";
    el.style.cssText = `
      position:fixed; top:20px; right:20px; z-index:9999;
      background:#222; color:#fff; padding:.55rem .8rem; border-radius:.5rem;
      box-shadow:0 8px 20px rgba(0,0,0,.2); font-size:.95rem; transition:opacity .2s;
    `;
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = "1";
  setTimeout(()=>{ el.style.opacity="0"; }, 2000);
}

export function initSearch() {
  // Delegación para no depender del orden en que se inyecta la navbar
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!form.matches(".search-form")) return;

    e.preventDefault();
    const input = form.querySelector(".search-input");
    const q = input ? input.value : "";

    const all = getProducts();
    const idx = findBestIndex(q, all);

    if (idx == null) {
      // Si prefieres ir a listado filtrado, cambia a:
      // window.location.href = `productos.html?q=${encodeURIComponent(q)}`;
      toast("Producto no existente");
      return;
    }

    // Redirige a la ficha de producto por índice (tu details.js usa ?pos)
    window.location.href = `detalle.html?pos=${idx}`;
  });
}


