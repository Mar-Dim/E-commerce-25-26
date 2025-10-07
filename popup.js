const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("emailInput");
const popup = document.getElementById("popup");
const popupText = popup.querySelector("p"); // apunto al <p> dentro
popup.style.display = "none";

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (!email || !email.includes("@") || !email.includes(".")) {
    popupText.textContent = "Por favor, ingresa un correo válido";
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
    return;
  }

  popupText.textContent = "¡Gracias por suscribirte!, recuerda que te puedes dar de baja en cualquier momento.";
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);

  emailInput.value = "";
});
