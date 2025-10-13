
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
});