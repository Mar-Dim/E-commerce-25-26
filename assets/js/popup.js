export function loadPopup() {
  const subscribeBtn = document.getElementById("subscribeBtn");
  const emailInput = document.getElementById("emailInput");
  const popup = document.getElementById("popup");
  const popupText = popup.querySelector("p"); 

  setTimeout(() => {
    const subscribeBtn = document.getElementById("subscribeBtn");
    if (!subscribeBtn) return; 

    subscribeBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (!email || !email.includes("@") || !email.includes(".")) {
        popupText.textContent = "Por favor, ingresa un correo válido";
      } else {
        popupText.textContent = "¡Gracias por suscribirte! Recuerda que puedes darte de baja en cualquier momento.";
        emailInput.value = "";
      }

      popup.style.display = "block";
      setTimeout(() => popup.style.display = "none", 3000);
    });
  }, 300);
};
