export function createNavbar() {
    return `
    <div class="container-hero">
        <div class="container hero">
            <div class="customer-support">
                <i class="fa-solid fa-headset"></i>
                <div class="content-customer-support">
                    <span class="text">Soporte al cliente</span>
                    <span class="number">123-456-7890</span>
                </div>
            </div>

            <div class="container-logo">
                <i class="fa-solid fa-mug-hot"></i>
                <h1 class="logo"><a href="/">Baristas</a></h1>
            </div>

            <div class="container-user">
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-basket-shopping" id="cart-button" style="cursor:pointer;"></i>

                <div class="cart-dropdown" id="cart-dropdown">
                    <h3><i class="fa-solid fa-cart-shopping"></i> Tu Carrito</h3>
                    <ul id="cart-items"></ul>
                    <div class="cart-total">
                        <span>Total:</span> <span id="cart-total">$0.00</span>
                    </div>
                    <a href="carrito.html"><button>Pagar</button></a>
                </div>

                <div class="content-shopping-cart">
                    <span class="text">Carrito</span>
                    <span class="number" id="cart-count">(0)</span>
                </div>
            </div>
        </div>
    </div>
    <div class="container-navbar">
        <nav class="navbar container">
            <i class="fa-solid fa-bars"></i>
            <ul class="menu">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <form class="search-form">
                <input class="search-input" type="search" placeholder="Buscar..." />
                <button class="btn-search" type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </nav>
    </div>
    `;
}

export function initNavbar() {
    const header = document.getElementById('navbar-container');
    if (header) header.innerHTML = createNavbar();
}
