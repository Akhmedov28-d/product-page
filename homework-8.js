const person = {
  name: "Джамалудин",
  surname: "Ахмедов",
  mail: "kuramagomedovzaur8@gmail.com",
  job: "Mid-level Разработчик",
  jobTitle: "Фронтент Разработчик на Базе Ангуляр",
  age: 28,
  country: "Киргизия",
  city: "Токмок",
  relationshipStatus: "Разведен",
};

const techPassport = {
  make: "Mercedes-Benz_W140",
  model: "S_600",
  year: 1998,
  color: "black",
  transmission: "manual_transmission",
};

person.car_owner = "Джамалудин";

console.log(person);

function addMaxSpeed(car) {
  if ("maxSpeed" in car) {
    return;
  }
  car.maxSpeed = 220;
}

addMaxSpeed(techPassport);

console.log(techPassport);

function characteristic(vipClass, beautifulColor) {
  return vipClass[beautifulColor];
}

characteristic(techPassport, "color");

const healthyFoods = [
  "Жирная рыба",
  "Ягоды",
  "Авокадо",
  "Грецкие орехи",
  "Шпинат",
];
console.log(healthyFoods, [3]);

const books = [
  {
    name: "Этикет ищущего знание",
    author: "Шейх Мухаммад Ибн Солих Аль-Усеймин",
    year: 2022,
    color: "white",
    genre: "religion",
  },

  {
    name: "Малое Завешание",
    author: "Ибн Таймийя",
    year: 2020,
    color: "green",
    genre: "religion",
  },

  {
    name: "40 хадисов",
    author: "Шейх Солих Фузан",
    year: 2021,
    color: "black",
    genre: "religion",
  },
];

const book = {
  name: "Разьяснение трех основ",
  author: "Мухаммад Ат-Тамими",
  year: 2020,
  color: "green",
  genre: "religion",
};

books.push(book);

const classicBooks = [
  {
    name: "ОТЕЦ",
    author: "Абдулманап Нурмагомедов",
    year: 2020,
    color: "white",
    genre: "sport",
  },

  {
    name: "Тренажер для развития мозга",
    author: "Антон Могучий",
    year: 2018,
    color: "green",
    genre: "religion",
  },

  {
    name: "Зов Предков",
    author: "Джек Лондон",
    year: 2021,
    color: "black",
    genre: "classic",
  },
];

const allBooks = [...books, ...classicBooks];

const genre = classicBooks;
const comparison = classicBooks.map((book) => book.genre === "sport");
