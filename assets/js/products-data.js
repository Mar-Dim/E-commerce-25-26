class Producto {
  constructor({ idProducto, nombre, descripcion, categoria, precio, tamaño, imagen }) {
    this.idProducto = idProducto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.precio = precio;
    this.tamaño = tamaño;
    this.imagen = imagen;
  }
  descripcionCorta(max = 80) {
    return this.descripcion.length > max ? this.descripcion.substring(0, max) + "..." : this.descripcion;
  }
  precioFormateado() {
    return `$${this.precio.toFixed(2)}`;
  }
}
const productos = [
  new Producto({
    idProducto: "P001",
    nombre: "Cafe Helado",
    descripcion: "Delicioso café moca servido con hielo, leche y un toque de chocolate.",
    categoria: "Bebida Fría",
    precio: 5.60,
    tamaño: "Mediano",
    imagen: "assets/img/cafe-helado.jpg"
  }),
  new Producto({
    idProducto: "P002",
    nombre: "Expreso",
    descripcion: "Shot intenso de café espresso con notas tostadas y cuerpo robusto.",
    categoria: "Bebida Caliente",
    precio: 3.20,
    tamaño: "Mediano",
    imagen: "assets/img/expreso.jpg"
  }),
  new Producto({
    idProducto: "P003",
    nombre: "Capuchino",
    descripcion: "Espresso, leche vaporizada y abundante espuma, equilibrado y cremoso.",
    categoria: "Bebida Caliente",
    precio: 5.70,
    tamaño: "Mediano",
    imagen: "assets/img/cafe-capuchino.jpg"
  }),
  new Producto({
    idProducto: "P004",
    nombre: "Café Irish",
    descripcion: "Café con un toque de crema y notas dulces, perfecto para consentirte.",
    categoria: "Especial",
    precio: 4.60,
    tamaño: "Mediano",
    imagen: "assets/img/cafe-irish.jpg"
  }),
  new Producto({
    idProducto: "P005",
    nombre: "Café Australiano",
    descripcion: "Espresso suave con leche microespumada, de textura sedosa y sabor balanceado. Presenta notas a caramelo y cacao, con un toque sutil a nuez y final limpio. Ideal para quienes buscan cremosidad sin exceso de espuma, al estilo clásico de las cafeterías australianas.",
    categoria: "Bebida Caliente",
    precio: 3.20,
    tamaño: "Mediano",
    imagen: "assets/img/cafe-australiano.jpg"
  }),
  new Producto({
    idProducto: "P006",
    nombre: "Café Viena",
    descripcion: "Doble espresso coronado con abundante crema batida en lugar de leche. Cuerpo intenso, dulzor equilibrado y notas a chocolate y vainilla; final cremoso y reconfortante.",
    categoria: "Especial",
    precio: 3.85,
    tamaño: "Mediano",
    imagen: "assets/img/cafe-viena.jpg"
  }),
  new Producto({
    idProducto: "P007",
    nombre: "Café Liqueur",
    descripcion: "Café espresso mezclado con licor (p. ej., Kahlúa, amaretto, whisky o ron), dulzor sutil y notas tostadas. Puede servirse caliente o con hielo, y suele coronarse con crema batida o una capa ligera de espuma para un final sedoso y aromático.",
    categoria: "Especial",
    precio: 5.60,
    tamaño: "Mediano",
    imagen: "assets/img/cafe-liqueurs.jpg"
  }),
  new Producto({
    idProducto: "P008",
    nombre: "Café Ingles",
    descripcion: "Espresso alargado con agua caliente (estilo Americano) para un cuerpo más ligero y sabor limpio. Notas suaves a cacao y tostado, con final balanceado; opcional un toque de leche para suavizar.",
    categoria: "Bebida Caliente",
    precio: 5.70,
    tamaño: "Mediano",
    imagen: "assets/img/cafe-ingles.jpg"
  }),
  new Producto({
    idProducto: "P009",
    nombre: "Alfajor de Chocolate",
    descripcion: "Dos galletas suaves con intenso cacao, rellenas de abundante dulce de leche cremoso y cubiertas con un baño de chocolate brillante. Textura tierna que se deshace al morder, equilibrio perfecto entre dulzor y notas amargas de cacao. Ideal para acompañar café o como antojo goloso.",
    categoria: "Postre",
    precio: 1.50,
    tamaño: "Mediano",
    imagen: "assets/img/alfajor-chocolate.jpg"
  }),
  new Producto({
    idProducto: "P010",
    nombre: "Rollo de Canela",
    descripcion: "Masa suave y esponjosa arrollada con relleno de canela y azúcar morena, horneada hasta dorar y cubierta con glaseado cremoso de vainilla. Aroma cálido, centro tierno y pegajosito, perfectos para acompañar café o como antojo dulce a cualquier hora.",
    categoria: "Postre",
    precio: 2.10,
    tamaño: "Mediano",
    imagen: "assets/img/rollos-canela.jpg"
  }),
  new Producto({
    idProducto: "P011",
    nombre: "Galletas de vainilla",
    descripcion: "Galletas crujientes por fuera y ligeramente tiernas por dentro, elaboradas con mantequilla y vainilla natural. Sabor delicado y aromático, con dulzor equilibrado y un toque dorado al hornear. Ideales para acompañar café, té o como snack a cualquier hora.",
    categoria: "Postre",
    precio: 0.50,
    tamaño: "Mediano",
    imagen: "assets/img/galletas.jpg"
  })
];
