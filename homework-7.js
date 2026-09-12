function chowWeather(citi, temp) {
  console.log(`Сейчас в ${citi} температура  ${temp} градусах по Цельсию`);
}
chowWeather("Токмок", 25);
chowWeather("Бишкек", 20);

const speedOfLight = 299792458;
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхветовая Скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(1000);
checkSpeed(500000000);
checkSpeed(299792458);

let product = "sneakers";
let price = 300;
function buyProduct(budget) {
  if (budget >= price) {
    console.log("Товар Куплен");
  } else {
    console.log(`Вам не хвотает ${price - budget}$ пополните баланс`);
  }
}

buyProduct(50);

function calculateArea(length, width) {
  console.log(`Площадь составляет ${length * width} м²`);
}

calculateArea(5, 5);

const priceList = "confectionery products";
let foodStamps = "Cosmetics";
var warehouse = "15-inch wheels";
