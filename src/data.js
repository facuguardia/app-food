import simple from "./assets/hamburguesa_simple.png";
import doble from "./assets/hamburguesa_doble.png";
import cheddarybacon from "./assets/hamburguesa_cheddar.png";

export const food = [
  {
    category: "Hamburguesas",
    name: "Simple",
    image: simple,
    price: "$ 399",
    description: "Carne, queso, lechuga, tomate y cebolla",
  },
  {
    category: "Hamburguesas",
    name: "Doble Carne",
    image: doble,
    price: "$ 600",
    description: "Doble carne, queso, lechuga, tomate y cebolla",
  },
  {
    category: "Hamburguesas",
    name: "Cheddar y Barbacoa",
    image: cheddarybacon,
    price: "$ 100",
    description: "Doble carne, queso cheddar, lechuga, tomate y salsa barbacoa",
  },
];
