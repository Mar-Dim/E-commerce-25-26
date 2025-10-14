import { agregarAlCarrito, renderCartDropdown } from './cart.js';
window.addEventListener("DOMContentLoaded", () => {
  const qs = new URLSearchParams(window.location.search);
  const posParam = qs.get("pos");
  const detalleContainer = document.getElementById("detalle-container");
  const detalle404 = document.getElementById("detalle-404");
  const esEnteroNoNegativo = (v) => /^\d+$/.test(v);

  const money = (n) => `$${n.toFixed(2)}`;
  const norm = (s) => (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  function renderDetalle(producto) {
    const base = Number(producto.precio) || 0;
    const isPostre = norm(producto.categoria).includes("postre");
    const defaultKey = isPostre ? "estandar" : norm(producto.tamaño || "mediano");

    const sizesHTML = isPostre
      ? `
        <div id="sizes" style="display:flex; justify-content:center; gap:.8rem;">
          <button class="btn-read-more" data-size="mini"     data-m="0.70" style="border-radius:22px; background:#f0f2f2; color:#111; padding:.6rem 1.25rem; white-space:nowrap; min-width:140px;">Mini</button>
          <button class="btn-read-more" data-size="estandar" data-m="1.00" style="border-radius:22px; background:#f0f2f2; color:#111; padding:.6rem 1.25rem; white-space:nowrap; min-width:140px;">Estándar</button>
          <button class="btn-read-more" data-size="familiar" data-m="1.60" style="border-radius:22px; background:#f0f2f2; color:#111; padding:.6rem 1.25rem; white-space:nowrap; min-width:140px;">Familiar</button>
        </div>
      `
      : `
        <div id="sizes" style="display:flex; justify-content:center; gap:.8rem;">
          <button class="btn-read-more" data-size="pequeño" data-m="0.75" style="border-radius:22px; background:#f0f2f2; color:#111; padding:.6rem 1.25rem; white-space:nowrap; min-width:140px;">Pequeño</button>
          <button class="btn-read-more" data-size="mediano" data-m="1.00" style="border-radius:22px; background:#f0f2f2; color:#111; padding:.6rem 1.25rem; white-space:nowrap; min-width:140px;">Mediano</button>
          <button class="btn-read-more" data-size="grande"  data-m="1.25" style="border-radius:22px; background:#f0f2f2; color:#111; padding:.6rem 1.25rem; white-space:nowrap; min-width:140px;">Grande</button>
        </div>
      `;

    detalleContainer.innerHTML = `
      <div class="card-product" style="max-width:1200px; margin:2rem auto; padding:1.25rem; background:#fff; border-radius:10px;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.75rem; align-items:start;">
          <div>
            <div class="container-img" style="background:#f8f8f8; display:flex; align-items:center; justify-content:center; height:400px; border-radius:8px;">
              <img src="${producto.imagen}" alt="${producto.nombre}" style="max-height:370px; width:auto; object-fit:contain;">
            </div>
            <div class="content-card-product" style="padding-top:1rem;">
              <div class="stars" style="margin:0 0 .6rem 0;">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <span style="font-size:.9rem; color:#565959; margin-left:.4rem;">(${Math.floor(Math.random() * 400) + 80})</span>
              </div>
              <h3 style="font-size:1.2rem; line-height:1.35; color:#222; margin:0 0 .5rem 0;">${producto.nombre}</h3>
              <p style="color:#0f1111; margin:0 0 .7rem 0;">${producto.descripcion}</p>
              <p class="categoria" style="opacity:.9; color:#565959; margin:0;">${producto.categoria}${producto.tamaño ? " • " + producto.tamaño : ""}</p>
            </div>
          </div>

          <div class="content-card-product" style="padding-top:.25rem;">
            <div style="max-width:640px; margin:0 auto; text-align:center; display:flex; flex-direction:column; gap:1.2rem;">
              <h3 style="font-size:2.1rem; line-height:1.05; color:#111; font-weight:800; margin:0; letter-spacing:.2px;">Edición de pedido</h3>

              <div style="display:flex; align-items:center; justify-content:space-between; gap:1.25rem;">
                <div style="display:flex; align-items:baseline; gap:.6rem;">
                  <div id="price" style="color:#b12704; font-size:2rem; font-weight:800;">${money(base)}</div>
                  <div style="font-size:.95rem; color:#565959;">Precio unitario</div>
                </div>
                <div style="display:flex; align-items:center; gap:.7rem;">
                  <label for="qty" style="font-size:1rem; color:#222;">Cantidad</label>
                  <input id="qty" type="number" min="1" value="1" style="width:96px; padding:.55rem .7rem; border:1px solid #d5d9d9; border-radius:8px; text-align:center;">
                </div>
              </div>

              ${sizesHTML}

              <div id="totalBox" style="background:#f5f6f6; border:1px solid #e3e6e6; border-radius:12px; padding:1rem; width:260px; margin:0 auto; text-align:center;">
                <div style="font-size:1.05rem; color:#555; margin-bottom:.25rem;">Total:</div>
                <div id="total" style="color:#b12704; font-weight:800; font-size:1.5rem;">${money(base)}</div>
              </div>

              <div style="display:flex; gap:1rem; justify-content:center;">
                <a class="btn-read-more" href="index.html"
                   style="flex:1; max-width:260px; text-align:center; padding:.75rem 1.25rem; background:#fff; border:1px solid #d5d9d9; color:#111; border-radius:24px; text-decoration:none; white-space:nowrap;">
                   Volver
                </a>
                <button 
                    id="add" 
                    class="btn-read-more"
                   style="flex:1; max-width:260px; text-align:center; padding:.75rem 1.25rem; background:#ffd814; border:1px solid #fcd200; color:#111; border-radius:24px; white-space:nowrap; font-weight:700;">
                   Agregar al carrito
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    const sizes = document.getElementById("sizes");
    const priceEl = document.getElementById("price");
    const totalEl = document.getElementById("total");
    const qtyEl = document.getElementById("qty");
    const addBtn = document.getElementById("add");

    let mult = 1;

    function update() {
      const q = Math.max(1, parseInt(qtyEl.value, 10) || 1);
      const unit = base * mult;
      priceEl.textContent = money(unit);
      totalEl.textContent = money(unit * q);
    }

    function highlight(btn) {
      if (!sizes) return;
      [...sizes.querySelectorAll("button")].forEach(b => b.style.background = "#f0f2f2");
      if (btn) btn.style.background = "#ffd814";
    }

    if (sizes) {
      sizes.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          mult = parseFloat(btn.getAttribute("data-m")) || 1;
          highlight(btn);
          update();
        });
      });

      const defBtn =
        sizes.querySelector(`button[data-size="${defaultKey}"]`) ||
        sizes.querySelector('button[data-size="mediano"]') ||
        sizes.querySelector('button[data-size="estandar"]');

      if (defBtn) defBtn.click(); else update();
    } else {
      mult = 1; update();
    }

    qtyEl.addEventListener("input", () => {
      const v = parseInt(qtyEl.value, 10);
      qtyEl.value = isNaN(v) || v < 1 ? 1 : v;
      update();
    });

    addBtn.addEventListener("click", () => {
      const qty = Math.max(1, parseInt(qtyEl.value, 10) || 1);
      const unit = base * mult;

      
      let selSize = defaultKey;
      const sizesEl = document.getElementById("sizes");
      if (sizesEl) {
        const btns = sizesEl.querySelectorAll('button[data-size][data-m]');
        for (const b of btns) {
          const m = Number(b.getAttribute('data-m'));
          if (Number(m) === Number(mult)) {
            selSize = b.getAttribute('data-size') || defaultKey;
            break;
          }
        }
      }

      const variantId = `${producto.idProducto}__${selSize}`;
      const variantName = `${producto.nombre} (${selSize})`;

      for (let i = 0; i < qty; i++) {
        agregarAlCarrito(variantId, variantName, unit);
      }

      renderCartDropdown();

      const toast = document.createElement("span");
      toast.textContent = `✅ ${variantName} agregado al carrito`;
      Object.assign(toast.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#222",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "10px",
        fontSize: "0.95rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        opacity: "0",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        transform: "translateY(20px)",
        zIndex: "9999"
      });
      document.body.appendChild(toast);

      // Animación de aparición
      requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
      });

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        setTimeout(() => toast.remove(), 500);
      }, 3000);
    });

  }

  if (!posParam || !esEnteroNoNegativo(posParam)) {
    detalleContainer.innerHTML = ""; detalle404.style.display = "block"; return;
  }

  const pos = parseInt(posParam, 10);
  const data = window.productos || (typeof productos !== "undefined" ? productos : null);
  if (!data || pos < 0 || pos >= data.length) {
    detalleContainer.innerHTML = ""; detalle404.style.display = "block"; return;
  }

  renderDetalle(data[pos]);

  const menu = document.getElementById("menu-categorias");
  if (menu) {
    menu.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-pos]"); if (!a) return;
      e.preventDefault(); window.location.href = `detalle.html?pos=${a.getAttribute("data-pos")}`;
    });
  }

  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); const q = input.value.trim().toLowerCase(); if (!q) return;
      const idx = data.findIndex(p => p.nombre.toLowerCase().includes(q));
      if (idx !== -1) window.location.href = `detalle.html?pos=${idx}`;
      else { detalleContainer.innerHTML = ""; detalle404.style.display = "block"; }
    });
  }
});


