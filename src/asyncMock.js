const products = [
  {
    id: 1,
    img: "assets/productos/farolas/farola-mms-021.jpg",
    codigo: "mms-021",
    nombre: "Farola nkd",
    precio: 45000,
    cantidad: 30,
  },
  {
    id: 2,
    img: "assets/productos/farolas/farola-mms-022.jpg",
    codigo: "mms-022",
    nombre: "Farora libero",
    precio: 46000,
    cantidad: 32,
  },
  {
    id: 3,
    img: "assets/productos/farolas/farola-mms-023.jpg",
    codigo: "mms-023",
    nombre: "Farola boxer ct",
    precio: 40000,
    cantidad: 13,
  },
  {
    id: 4,
    img: "assets/productos/farolas/farola-mms-024.jpg",
    codigo: "mms-024",
    nombre: "Farola pulsar",
    precio: 60000,
    cantidad: 40,
  },
  {
    id: 5,
    img: "assets/productos/farolas/farola-mms-025.jpg",
    codigo: "mms-025",
    nombre: "Farola NMAX",
    precio: 48000,
    cantidad: 20,
  },
  {
    id: 6,
    img: "assets/productos/farolas/farola-mms-026.jpg",
    codigo: "mms-026",
    nombre: "Farola discovery",
    precio: 48000,
    cantidad: 20,
  },
  {
    id: 7,
    img: "assets/productos/farolas/farolaHero-mms-027.jpg",
    codigo: "mms-027",
    nombre: "Farola agility",
    precio: 48000,
    cantidad: 20,
  },
  {
    id: 8,
    img: "assets/productos/farolas/farola-mms-028-fz16.jpg",
    codigo: "mms-028",
    nombre: "Farola BWS",
    precio: 48000,
    cantidad: 20,
  },
  {
    id: 9,
    img: "assets/productos/farolas/farola-mms-029-honda.jpg",
    codigo: "mms-029",
    nombre: "Farola Honda",
    precio: 48000,
    cantidad: 20,
  },
  {
    id: 10,
    img: "assets/productos/farolas/farola-mms-030pulsarNs.jpg",
    codigo: "mms-030",
    nombre: "Farola pulsar ns",
    precio: 48000,
    cantidad: 20,
  },
  {
    id: 11,
    img: "assets/productos/direccionales/mms-057-direccionalNkd.jpg",
    codigo: "mms-1005",
    nombre: "Direccional Nkd",
    precio: 48000,
    cantidad: 20,
  },
  {
    id: 12,
    img: "assets/productos/direccionales/mms-058-direccionalBoxer.jpg",
    codigo: "mms-1005",
    nombre: "Direccional Boxer",
    precio: 48000,
    cantidad: 20,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    },2000)
  })
}


