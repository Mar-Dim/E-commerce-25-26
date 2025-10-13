// assets/js/blog-data.js
export const blogPosts = [
  {
    id: "b001",
    titulo: "Lanzamos el Capuchino Premium",
    fechaISO: "2025-10-10",
    categoria: "Novedades",
    cover: "assets/img/blog-1.jpg",
    resumen: "Nuevo capuchino con espuma microtexturizada y notas a cacao."
  },
  {
    id: "b002",
    titulo: "Semana del Espresso: 2x1",
    fechaISO: "2025-10-08",
    categoria: "Promociones",
    cover: "assets/img/blog-2.jpg",
    resumen: "Promoción válida de 9h a 12h en barra toda la semana."
  },
  {
    id: "b003",
    titulo: "Edición especial: Grano Andino",
    fechaISO: "2025-10-05",
    categoria: "Especiales",
    cover: "assets/img/blog-3.jpg",
    resumen: "Origen andino con fragancia floral y acidez media."
  }
];

export function getLatestPosts(n = 3) {
  return [...blogPosts].sort((a,b) => new Date(b.fechaISO) - new Date(a.fechaISO)).slice(0, n);
}
