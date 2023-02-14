import simple from "./assets/burger-simple.png";
import doble from "./assets/burger-doble.png";
import cheddarybacon from "./assets/burger-barbacoa.png";
import pizzaAlbahaca from "./assets/pngwing.com.png";
import pizzaChampinion from './assets/champinion.png';
import pizzaSalame from './assets/salamepizza.png'
import empanadaCarne from './assets/empanadaCarne.png';
import empanadaAcelga from './assets/empanadaAcelga.png'
import SanwichMilanesa from './assets/sanwichMilanesa.png'
import fideosTuco from './assets/fideoscontuco.png'
import empanadapollo from './assets/empanadadepollo.png'
import Ensalada from './assets/ensalada.png'

export const food = [
  {
    id:1,
    category: "Hamburguesas",
    name: "Simple",
    image: simple,
    price: "$ 499",
    description: "Carne, queso, lechuga, tomate y cebolla",
  },
  {
    id: 3,
    category: "Hamburguesas",
    name: "Doble Carne",
    image: doble,
    price: "$ 699",
    description: "Doble carne, queso, lechuga, tomate y cebolla",
  },
  {
    id: 2,
    category: "Hamburguesas",
    name: "Cheddar y Barbacoa",
    image: cheddarybacon,
    price: "$ 999",
    description: "Doble carne, queso cheddar, lechuga, tomate y salsa barbacoa",
  },
  {
    category: "Pizzas",
    name: "Pizza Tomate y Albaca.",
    image: pizzaAlbahaca,
    price: "$ 399",
    description: "Muzarella, tomate, pimienta negra, albaca y rallado de albaca",
    id: 11,
},
{
    category: "Pizzas",
    name: "Pizza tomate y champinion.",
    image: pizzaChampinion,
    price: "$ 399",
    description: "Muzaarella, tomate, pimienta negra, champinion y rallado de albaca",
    id: 4,
},
{
    category: "Pizzas",
    name: "Pizza Tomate y Salame.",
    image: pizzaSalame,
    price: "$ 399",
    description: "Muzaarella, tomate, pimienta negra, salame y rallado de albaca",
    id: 8,
},
{
    category: "Empanadas",
    name: "Empanada Fritas de Carne",
    image: empanadaCarne,
    price: "$ 89 c/u",
    description: "Carne, huevo, morron y cebolla",
    id: 5,
},
{
    category: "Empanadas",
    name: "Empanada Fritas de Acelga",
    image: empanadaAcelga,
    price: "$ 79 c/u",
    description: "Acelga, huevo, morron y cebolla",
    id: 10,
},
{
    category: "Milanesas",
    name: "Sandwich de Milanesa",
    image: SanwichMilanesa,
    price: "$ 499",
    description: "Milanesa de ternera, queso, tomate, lechuga y mayonesa",
    id: 9,
},
{
    category: "Pastas",
    name: "Fideos a la Bolognesa",
    image: fideosTuco,
    price: "$ 299",
    description: "Fideos con salsa a la bolognesa",
    id: 7,
},
{
    category: "Ensaladas",
    name: "Ensalada de la Casa",
    image: Ensalada,
    price: "$ 199",
    description: "Lechuga, tomate, zanahoria, huevo, morron, queso, semillas de girasol y mayonesa",
    id: 6,
},
{
  category: "Empanadas",
    name: "Empanada Fritas de Pollo",
    image: empanadapollo,
    price: "$ 79 c/u",
    description: "Pollo, huevo, morron y cebolla",
    id: 12,

}
];
