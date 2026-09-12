let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberFilter = numbers.filter((numb) => numb >= 5);

let IslamicBooks = [
  {
    name: "Этикет ищущего знание",
    author: "Шейх Мухаммад Ибн Солих Аль-Усеймин",
    year: 2022,
    color: "white",
    genre: "religion",
    category: "instruction",
  },

  {
    name: "Малое Завешание",
    author: "Ибн Таймийя",
    year: 2020,
    color: "green",
    genre: "religion",
    category: "instruction",
  },

  {
    name: "40 хадисов",
    author: "Шейх Солих Фузан",
    year: 2021,
    color: "black",
    genre: "religion",
    category: "hadiths",
  },

  {
    name: "Разьяснение трех основ",
    author: "Мухаммад Ат-Тамими",
    year: 2020,
    color: "green",
    genre: "religion",
    category: "religious belief",
  },
];

let categoryFilter = IslamicBooks.find(
  (categ) => categ.category === "religious belief",
);

const twoArrays = [...numbers, ...IslamicBooks];
const reverseOrder = twoArrays.reverse();

import { commentData } from "./comments.js";
