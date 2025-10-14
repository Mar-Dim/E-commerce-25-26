// assets/js/destacados.js
import { agregarAlCarrito, renderCartDropdown } from './cart.js';
 
  function showToast(texto) {
    const toast = document.createElement("span");
      toast.textContent = `✅ ${texto} agregado al carrito`;
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

      
  }

        document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-product-id]');
        if (!btn) return;

        const data = window.productos || []; // cargados globalmente por products-data.js
        const id = btn.getAttribute('data-product-id');
        const p = data.find(x => x.idProducto === id);
        if (!p) return;

        agregarAlCarrito(p.idProducto, p.nombre, p.precio);
        renderCartDropdown();
        showToast(p.nombre);
    });


