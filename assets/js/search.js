// assets/js/search.js
function norm(s) {
  return (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function getProducts() {
  if (typeof productos !== "undefined") return productos;
  if (window.productos) return window.productos;
  return [];
}
function findBestIndex(q, list) {
  const nq = norm(q);
  if (!nq) return null;
  let i = list.findIndex(p => norm(p.nombre) === nq); if (i >= 0) return i;
  i = list.findIndex(p => norm(p.nombre).startsWith(nq)); if (i >= 0) return i;
  i = list.findIndex(p => norm(p.nombre).includes(nq)); if (i >= 0) return i;
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

function attachLiveSuggestions() {
  const form = document.querySelector(".search-form");
  if (!form) return;
  const input = form.querySelector(".search-input");
  if (!input) return;

  const all = getProducts();
  const getNames = () => all.map((p, i) => ({ i, name: p.nombre }));

  // 1) Creamos el dropdown en <body> para evitar overflow/stacking
  let box = document.getElementById("search-suggestions");
  if (!box) {
    box = document.createElement("div");
    box.id = "search-suggestions";
    Object.assign(box.style, {
      position: "absolute",
      zIndex: "2147483647",     // por si el header usa z-index alto
      background: "#fff",
      border: "1px solid #e5e5e5",
      borderRadius: ".5rem",
      boxShadow: "0 8px 24px rgba(0,0,0,.1)",
      maxHeight: "240px",
      overflowY: "auto",
      display: "none"
    });
    document.body.appendChild(box);
  }

  // 2) Posicionar el dropdown justo bajo el input (aunque el nav tenga overflow)
  function place() {
    const r = input.getBoundingClientRect();
    box.style.width = r.width + "px";
    box.style.left  = (r.left + window.scrollX) + "px";
    box.style.top   = (r.bottom + window.scrollY + 6) + "px";
  }

  // 3) Renderizado de sugerencias (solo por nombre)
  let sel = -1, t;
  function render(q) {
    const nq = norm(q);
    const list = nq
      ? getNames().filter(x => norm(x.name).startsWith(nq) || norm(x.name).includes(nq))
      : [];

    if (!list.length) {
      box.style.display = "none";
      box.innerHTML = "";
      sel = -1;
      return;
    }

    const top = list.slice(0, 5);
    box.innerHTML = top.map((x,k)=>`
      <button type="button" class="sug" data-idx="${x.i}" data-k="${k}"
        style="display:block;width:100%;text-align:left;padding:.55rem .75rem;border:none;background:#fff;cursor:pointer">
        ${x.name}
      </button>
    `).join("");

    sel = -1;
    place();
    box.style.display = "block";
  }

  // 4) Eventos
  input.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => render(input.value), 100);
  });

  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".sug");
    if (!btn) return;
    const idx = Number(btn.dataset.idx);
    window.location.href = `detalle.html?pos=${idx}`;
  });

  input.addEventListener("keydown", (e) => {
    if (box.style.display === "none") return;
    const items = [...box.querySelectorAll(".sug")];
    if (!items.length) return;

    if (e.key === "ArrowDown") { e.preventDefault(); sel = (sel+1)%items.length; }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = (sel-1+items.length)%items.length; }
    else if (e.key === "Enter") {
      if (sel>=0) { e.preventDefault(); items[sel].click(); }
    } else if (e.key === "Escape") {
      box.style.display = "none"; return;
    }

    items.forEach((it,k)=> it.style.background = (k===sel) ? "#f5f5f5" : "#fff");
  });

  document.addEventListener("click", (e)=>{
    if (!box.contains(e.target) && e.target!==input) box.style.display = "none";
  });

  window.addEventListener("scroll", place, true);
  window.addEventListener("resize", place);
}


export function initSearch() {
  // 1) submit del buscador (solo nombres)
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!form.matches(".search-form")) return;
    e.preventDefault();
    const input = form.querySelector(".search-input");
    const q = input ? input.value : "";
    const all = getProducts();
    const idx = findBestIndex(q, all);
    if (idx == null) { toast("Producto no existente"); return; }
    window.location.href = `detalle.html?pos=${idx}`;
  });

  // 2) sugerencias en vivo
  attachLiveSuggestions();
}
