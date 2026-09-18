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

let categoryFilter = IslamicBooks.filter((categ) => {
  if (categ.category === "religious belief") {
    console.log("Корректные входные пораметры");
    return true;
  } else {
    console.log("Некорректные входные параметры");
    return false;
  }
});

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
