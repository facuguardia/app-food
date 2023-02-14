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
    name: "Pizza de tomate y albaca.",
    image: pizzaAlbahaca,
    price: "$400.",
    description: "contiene queso cremoso, ajo, pimienta negra, tomate y albaca.",
    id: 11,
},
{
    category: "Pizzas",
    name: "Pizza de tomate y champinion.",
    image: pizzaChampinion,
    price: "$400.",
    description: "contiene muzarella, tomate, pimienta negra, champinion y rallado de albaca.",
    id: 4,
},
{
    category: "Pizzas",
    name: "Pizza de tomate y salame.",
    image: pizzaSalame,
    price: "$400.",
    description: "contiene muzarella, tomate, pimienta negra, salame y rallado de albaca.",
    id: 8,
},
{
    category: "Empanadas",
    name: "Empanada de carne frita.",
    image: empanadaCarne,
    price: "$90 c/u.",
    description: "contiene carne, cebolla, aceituna, zanaoria, morron y viene con limon.",
    id: 5,
},
{
    category: "Empanadas",
    name: "Empanada de acelga.",
    image: empanadaAcelga,
    price: "$80 c/u.",
    description: "contiene acelga, morron y cebolla.",
    id: 10,
},
{
    category: "Milanesas",
    name: "Sandwich de milanga.",
    image: SanwichMilanesa,
    price: "$440.",
    description: "contiene milanesa de carne, lechuga, tomate, huevo revuelto, jamon y queso.",
    id: 9,
},
{
    category: "Pastas",
    name: "Fideos con tuco.",
    image: fideosTuco,
    price: "$300.",
    description: "contiene fideos caseros con salsa de tomate especial y queso parmesano.",
    id: 7,
},
{
    category: "Ensaladas",
    name: "Ensalada mix.",
    image: Ensalada,
    price: "$80 c/u.",
    description: "contiene lechuga, aceituna, pepino, queso fresco, tomate y cebolla morada.",
    id: 6,
},
{
  category: "Empanadas",
    name: "Empanada de pollo.",
    image: empanadapollo,
    price: "$80 c/u.",
    description: "contiene pollo, huevo, morron y cebolla.",
    id: 12,

}
];
