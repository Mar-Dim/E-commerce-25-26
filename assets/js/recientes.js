// assets/js/recientes.js


(() => {
  // evita duplicar listeners
  if (window.__recientesBound) return;
  window.__recientesBound = true;

  const topSection = document.querySelector('.container.top-products');
  if (!topSection) return;

  const tabs = Array.from(topSection.querySelectorAll('.container-options span'));
  const container = topSection.querySelector('.container-products');
  if (!tabs.length || !container) return;

  const originalHTML = container.innerHTML;

  const setActive = (labelLower) => {
    tabs.forEach(t =>
      t.classList.toggle('active', t.textContent.trim().toLowerCase() === labelLower)
    );
  };

  // función para construir cada card idéntica a Destacados
  const buildCardHTML = (p, pos) => {
    const descuento = p.descuento || '';
    const precioActual = `$${parseFloat(p.precio).toFixed(2)}`;
    const precioAnterior = p.precioAnterior ? `<span>$${parseFloat(p.precioAnterior).toFixed(2)}</span>` : '';

    return `
      <div class="card-product">
        <div class="container-img">
          <img src="${p.imagen}" alt="${p.nombre}" />
          ${descuento ? `<span class="discount">${descuento}</span>` : ''}
          <div class="button-group">
            <span>
              <i class="fa-regular fa-eye"
                 role="button"
                 tabindex="0"
                 style="cursor:pointer"
                 onclick="location.href='detalle.html?pos=${pos}'"></i>
            </span>
            
          </div>
        </div>
        <div class="content-card-product">
          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <h3>${p.nombre}</h3>
          <span class="add-cart" title="Añadir al carrito" data-product-id="${p.idProducto}">
            <i class="fa-solid fa-basket-shopping"></i>
          </span>
          <p class="price">${precioActual} ${precioAnterior}</p>
        </div>
      </div>
    `;
  };

  const renderRecientes = () => {
    const data = window.productos || [];
    if (!Array.isArray(data) || data.length === 0) return;

    // toma los últimos 4
    const ultimos = data.slice(-4);
    const html = ultimos.map((p) => {
      const pos = data.findIndex(x => x.idProducto === p.idProducto);
      return buildCardHTML(p, pos);
    }).join('');

    container.innerHTML = html;
    setActive('más recientes');
  };

  const renderDestacados = () => {
    container.innerHTML = originalHTML;
    setActive('destacados');
  };

  // vincula los tabs
  const tabDest = tabs.find(t => t.textContent.trim().toLowerCase() === 'destacados');
  const tabRec = tabs.find(t => t.textContent.trim().toLowerCase() === 'más recientes');

  tabRec?.addEventListener('click', renderRecientes);
  tabDest?.addEventListener('click', renderDestacados);
})();
