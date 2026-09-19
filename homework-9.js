let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberFilter = numbers.filter((numb) => numb >= 5);

const IslamicBooks = [
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
    author: "Шейх Солих Фaузан",
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

const groceryList = ["Бананы", "Яблоки", "Абрикосы", "Виноград", "Арбуз"];

const twoArrays = [...numbers, ...IslamicBooks];
function reverseArrays(arr) {
  return [...arr].reverse();
}

console.log(reverseArrays(twoArrays));

import { commentData } from "./comments.js";
console.log(commentData);

const dotComEmails = commentData.filter((com) => com.email.endsWith(".com"));

const updatedComments = commentData.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

const arraySorting = commentData.map((comm) => {
  return {
    name: comm.name,
    id: comm.id,
  };
});

const characterCount = commentData.map((symbols) => ({
  ...symbols,
  isInvalid: symbols.body.length > 180,
}));

const emailUser = commentData.reduce((emailt, item) => {
  emailt.push(item.email);
  return emailt;
}, []);

const userEmails = commentData.map((moll) => moll.email);

const renameArray = emailUser.toString();
console.log(renameArray);

const emailsString = userEmails.join(", ");
console.log(emailsString);

function apple(products) {
  if (typeof products !== "string") {
    return "Некорректные входные параметры";
  }
  return groceryList.includes(products);
}

console.log(apple(555));

function categorySorting(Sorting) {
  if (!Array.isArray(Sorting)) {
    return "Некорректные входные параметры";
  }
  return Sorting.filter((categ) => {
    if (categ.category === "religious belief") {
      return true;
    } else {
      return false;
    }
  });
}
console.log(categorySorting(IslamicBooks));
