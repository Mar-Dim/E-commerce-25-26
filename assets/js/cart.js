
export function obtenerCarrito() {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}

export function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function agregarAlCarrito(id, nombre, precio) {
    let carrito = obtenerCarrito();
    const index = carrito.findIndex(p => p.id === id);
    if (index >= 0) carrito[index].cantidad++;
    else carrito.push({ id, nombre, precio, cantidad: 1 });

    guardarCarrito(carrito);
    renderCartDropdown();
    mostrarCarrito();
}

export function eliminarProducto(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito(carrito);
    renderCartDropdown();
    mostrarCarrito();
}

export function calcularTotales(carrito) {
    const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const total = subtotal * 1.15; // subtotal + 15% IVA
    return { subtotal, total };
}

export function mostrarCarrito() {
    const contenedor = document.getElementById('lista-carrito');
    if (!contenedor) return;

    const carrito = obtenerCarrito();
    contenedor.innerHTML = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>Tu carrito está vacío.</p>';
        document.getElementById('subtotal').textContent = '0.00';
        document.getElementById('total').textContent = '0.00';
        return;
    }

    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');
        item.innerHTML = `
            <span>${producto.nombre} (x${producto.cantidad}) - $${producto.precio.toFixed(2)}</span>
            <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
        `;
        contenedor.appendChild(item);
    });

    const { subtotal, total } = calcularTotales(carrito);
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

export function renderCartDropdown() {
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const carrito = obtenerCarrito();

    if (!cartItemsEl || !cartTotalEl) return;

    cartItemsEl.innerHTML = '';

    if (carrito.length === 0) {
        cartItemsEl.innerHTML = '<li>Carrito vacío</li>';
        cartTotalEl.textContent = '$0.00';
        if(cartCount) cartCount.textContent = '(0)';
        return;
    }

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} (x${item.cantidad}) - $${item.precio.toFixed(2)}`;
        cartItemsEl.appendChild(li);
    });

    const { total } = calcularTotales(carrito);
    cartTotalEl.textContent = `$${total.toFixed(2)}`;

    if(cartCount) cartCount.textContent = `(${carrito.reduce((acc, i) => acc + i.cantidad, 0)})`;
}

export function initCartDropdown() {
    const cartButton = document.getElementById('cart-button');
    const cartDropdown = document.getElementById('cart-dropdown');

    if (!cartButton || !cartDropdown) return;

    cartButton.addEventListener('click', (e) => {
        e.stopPropagation();
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
        renderCartDropdown();
    });

    document.addEventListener('click', (e) => {
        if (!cartDropdown.contains(e.target) && e.target !== cartButton) {
            cartDropdown.style.display = 'none';
        }
    });

    renderCartDropdown();
}
