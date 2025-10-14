
import { loadFooter } from './footer.js';
import { initNavbar } from './Navbar.js';
import { initCartDropdown, mostrarCarrito } from './cart.js';
import { initSearch } from './search.js';


import { loadPopup } from './popup.js';
document.addEventListener('DOMContentLoaded', () => {
    loadFooter();
    loadPopup();
    initNavbar();
    initCartDropdown();
    mostrarCarrito();
    initSearch();

    const vaciarBtn = document.getElementById('vaciar-carrito');
    const pagarBtn = document.getElementById('pagar');

    if (vaciarBtn) {
        vaciarBtn.addEventListener('click', () => {
            localStorage.removeItem('carrito');
            mostrarCarrito();
            renderCartDropdown();
            alert('Carrito vaciado.');
        });
    }

    if (pagarBtn) {
        pagarBtn.addEventListener('click', () => {
            const carrito = obtenerCarrito();
            if (carrito.length === 0) {
                alert('Tu carrito está vacío.');
                return;
            }

            alert('Gracias por tu compra. 🧾');
            localStorage.removeItem('carrito');
            mostrarCarrito();
            renderCartDropdown();
        });
    }
});
