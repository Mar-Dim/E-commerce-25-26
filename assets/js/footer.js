
 export function loadFooter() {
    const footerHTML = `
    <footer class="footer" id="footer">
      <div class="container container-footer">
        <div class="menu-footer">
          <div class="contact-info">
            <p class="title-footer">Información de Contacto</p>
            <ul>
              <li>Dirección: Bogota y Montevideo, Ambato</li>
              <li>Teléfono: 0985547214 </li>
              <li>Email: pastel_cafe@gmail.com</li>
            </ul>
            <div class="social-icons">
              <span class="facebook"><i class="fa-brands fa-facebook-f"></i></span>
              <span class="twitter"><i class="fa-brands fa-twitter"></i></span>
              <span class="youtube"><i class="fa-brands fa-youtube"></i></span>
              <span class="pinterest"><i class="fa-brands fa-pinterest-p"></i></span>
              <span class="instagram"><i class="fa-brands fa-instagram"></i></span>
            </div>
          </div>

          <div class="information">
            <p class="title-footer">Información</p>
            <ul>
              <li><a href="nosotros.html">Acerca de Nosotros</a></li>
              <li><a href="contacto.html">Contactános</a></li>
            </ul>
          </div>

          

          <div class="newsletter" id="Boletin">
            <p class="title-footer">Boletín informativo</p>
            <div class="content">
              <p>¿Deseas recibir actualizaciones o realizar una cotización de los equipos?</p>
              <input type="email" id="emailInput" placeholder="Ingresa el correo aquí...">
              <button id="subscribeBtn">Suscríbete</button>
            </div>
          </div>
        </div>

        <div class="copyright">
   
          <img src="assets/img/payment.png" alt="Pagos">
        </div>
      </div>
    </footer>
    <div id="popup" class="popup">
      <div class="popup-content"><p></p></div>
    </div>
    
    `;

    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }


