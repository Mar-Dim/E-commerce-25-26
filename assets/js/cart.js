import { productos } from '/assets/js/products-data.js';

export function obtenerCarrito() {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}

export function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function agregarAlCarrito(idProducto, nombre = null, precio = null) {
    let carrito = obtenerCarrito();

    const base = productos.find(p => String(p.idProducto) === String(idProducto)) || {};

    const producto = {
        ...base,
        idProducto,
        nombre: nombre || base.nombre,
        precio: precio || base.precio,
    };

    const index = carrito.findIndex(p => String(p.idProducto) === String(idProducto));
    if (index >= 0) {
        carrito[index].cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito(carrito);
    renderCartDropdown();
    mostrarCarrito();
}


export function eliminarProducto(idProducto) {
    let carrito = obtenerCarrito();

    const index = carrito.findIndex(p => p.idProducto === idProducto);

    if (index >= 0) {
         carrito[index].cantidad--;
        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1);
        }
    }

    guardarCarrito(carrito);
    renderCartDropdown();
    mostrarCarrito();
}


export function calcularTotales(carrito) {
    const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    const total = subtotal * 1.15;
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
        item.classList.add('cart-item');

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="cart-item-img">
            <div class="cart-item-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion.substring(0, 80)}...</p>
                <p>Precio unitario: $${producto.precio.toFixed(2)}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Subtotal: $${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
            <div class="cart-item-actions">
    <button class="btn-danger">Eliminar</button>
</div>

        `;
        item.querySelector('.btn-danger').addEventListener('click', () => {
            eliminarProducto(producto.idProducto);
        });
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
        if (cartCount) cartCount.textContent = '(0)';
        return;
    }

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} (x${item.cantidad}) - $${item.precio.toFixed(2)}`;
        cartItemsEl.appendChild(li);
    });

    const { total } = calcularTotales(carrito);
    cartTotalEl.textContent = `$${total.toFixed(2)}`;
    if (cartCount) cartCount.textContent = `(${carrito.reduce((acc, i) => acc + i.cantidad, 0)})`;
}

export function initCartDropdown() {
    const cartButton = document.getElementById('cart-button');
    const cartDropdown = document.getElementById('cart-dropdown');

    if (!cartButton || !cartDropdown) return;

    cartDropdown.style.display = 'none';

    cartButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const visible = cartDropdown.style.display === 'block';
        cartDropdown.style.display = visible ? 'none' : 'block';
        renderCartDropdown();
    });

    document.addEventListener('click', (e) => {
        if (!cartDropdown.contains(e.target) && e.target !== cartButton) {
            cartDropdown.style.display = 'none';
        }
    });

    renderCartDropdown();
}
