export const blogPosts = [
    {
      id: "b001",
      titulo: "Café Irish y Café Inglés en descuento por temporada",
      fechaISO: "2025-10-13",
      categoria: "Promociones",
      cover: "assets/img/blog-1.jpg",
      resumen: "Durante esta temporada, disfruta un descuento especial en nuestros cafés Irish e Inglés. Aprovecha antes de que termine la promoción."
    },
  {
    id: "b002",
    titulo: "Lanzamos el Cafe Liqueurs",
    fechaISO: "2025-10-10",
    categoria: "Especiales",
    cover: "assets/img/cafe-liqueurs.jpg",
    resumen: "Nuestro nuevo cafe con un toque de licor."
  },
  {
    id: "b003",
    titulo: "Semana del Espresso: 2x1",
    fechaISO: "2025-10-06",
    categoria: "Promociones",
    cover: "assets/img/blog-2.jpg",
    resumen: "Promoción válida de 9h a 12h en barra toda la semana."
  },
  {
    id: "b004",
    titulo: "Edición especial: Grano Andino",
    fechaISO: "2025-09-22",
    categoria: "Novedades",
    cover: "assets/img/blog-3.jpg",
    resumen: "Origen andino con fragancia floral y acidez media."
  }
];

// Devuelve los n más recientes
export function getLatestPosts(n = 3) {
  return [...blogPosts]
    .sort((a, b) => new Date(b.fechaISO) - new Date(a.fechaISO))
    .slice(0, n);
}
