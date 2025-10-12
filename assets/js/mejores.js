// assets/js/mejores.js


(() => {
  if (window.__mejoresBound) return;
  window.__mejoresBound = true;

  const topSection = document.querySelector('.container.top-products');
  if (!topSection) return;

  const tabs = Array.from(topSection.querySelectorAll('.container-options span'));
  const container = topSection.querySelector('.container-products');
  if (!tabs.length || !container) return;

  // Guarda el HTML original (las cards de Destacados) para poder volver
  const originalHTML = container.innerHTML;

  const setActive = (labelLower) => {
    tabs.forEach(t =>
      t.classList.toggle('active', t.textContent.trim().toLowerCase() === labelLower)
    );
  };

  // Plantilla de card (idéntica a Destacados)
  const buildCardHTML = (p, pos) => {
    const precioNow = `$${parseFloat(p.precio).toFixed(2)}`;
    const precioOld = p.precioAnterior ? `<span>$${parseFloat(p.precioAnterior).toFixed(2)}</span>` : '';
    const descuento = p.descuento ? `<span class="discount">${p.descuento}</span>` : '';

    return `
      <div class="card-product">
        <div class="container-img">
          <img src="${p.imagen}" alt="${p.nombre}" />
          ${descuento}
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
          <p class="price">${precioNow} ${precioOld}</p>
        </div>
      </div>
    `;
  };

  const renderMejores = () => {
    const data = window.productos || [];
    if (!Array.isArray(data) || data.length === 0) return;

    const IDS = ['P007','P002','P003','P006']; // orden solicitado
    const cards = IDS.map(id => {
      const p = data.find(x => x.idProducto === id);
      if (!p) return '';
      const pos = data.findIndex(x => x.idProducto === id); // índice real para detalle.html
      return buildCardHTML(p, pos);
    }).filter(Boolean);

    container.innerHTML = cards.join('');
    setActive('mejores vendidos');
  };

  const renderDestacados = () => {
    container.innerHTML = originalHTML;
    setActive('destacados');
  };

  // Vincula los tabs por su texto visible
  const tabDest = tabs.find(t => t.textContent.trim().toLowerCase() === 'destacados');
  const tabBest = tabs.find(t => t.textContent.trim().toLowerCase() === 'mejores vendidos');

  tabBest?.addEventListener('click', renderMejores);
  tabDest?.addEventListener('click', renderDestacados);
})();
