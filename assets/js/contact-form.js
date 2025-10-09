document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  // Seleccionamos el popup una sola vez al cargar la página.
  const popup = document.querySelector(".popup");
  const popupText = popup.querySelector("p");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showPopup("Por favor, completa los campos obligatorios.", true); // true para indicar error
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      showPopup("Por favor, ingresa un correo válido.", true); // true para indicar error
      return;
    }
    
    showPopup(`¡Gracias ${name}! Tu mensaje fue enviado.`);
    form.reset();
  });

  /**
   * Muestra un popup con un mensaje.
   * @param {string} text - El mensaje a mostrar.
   * @param {boolean} isError - Si es true, el popup será rojo (error).
   */
  function showPopup(text, isError = false) {
    if (!popup || !popupText) return;

    popupText.textContent = text;
    
    if (isError) {
        popup.style.backgroundColor = '#dc3545'; // Rojo
    } else {
        popup.style.backgroundColor = '#a47a3fff'; 
    }
    popup.classList.add('show');

    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }
});