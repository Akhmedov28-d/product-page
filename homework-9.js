let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numberFilter = numbers.filter((numb) => numb >= 5);

const islamicBooks = [
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
    year: 1993,
    color: "green",
    genre: "religion",
    category: "instruction",
  },

  {
    name: "40 хадисов",
    author: "Шейх Солих Фaузан",
    year: 2000,
    color: "black",
    genre: "religion",
    category: "hadiths",
  },

  {
    name: "Разьяснение трех основ",
    author: "Мухаммад Ат-Тамими",
    year: 1995,
    color: "green",
    genre: "religion",
    category: "religious belief",
  },
];
function searchBook(books, bookName) {
  return books.filter((book) => book.name === bookName);
}

function findBlackBook(books, bookColor) {
  return books.filter((book) => book.color === bookColor);
}

const BlackBook = findBlackBook(islamicBooks, "black");

const groceryList = ["Бананы", "Яблоки", "Абрикосы", "Виноград", "Арбуз"];

const twoArrays = [...numbers, ...islamicBooks];
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

function filterBooksUntil2022(books) {
  return books.filter((book) => book.year < 2022);
}

const BooksUntil2022 = filterBooksUntil2022(islamicBooks);

console.log(BooksUntil2022);
