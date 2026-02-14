// 1. Функция, принимающая два параметра - город и температуру.

function weather(city, degree) {
  console.log(`Сейчас в ${city} температура — ${degree} градусов по Цельсию`);
}

weather('Махачкала', 7);

// 2. Функция проверки скорости.

const SPEED_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed === SPEED_LIGHT) {
    console.log('Скорость света');
  } else {
    console.log('Субсветовая скорость');
  }
}

checkSpeed(100500);
checkSpeed(300000000);
checkSpeed(299792458);

// Функция проверки бюджета для покупки товара.

const productName = 'Лапти';
const productPrice = 1000;

function buyProduct(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const priceDiff = productPrice - currentBudget;
    console.log(`Вам не хватает ${priceDiff}$, пополните баланс.`);
  }
}

buyProduct(100500);
buyProduct(999);

// Функция проверка данных агента.

const name = 'Ащьф';
const surname = 'ЛШТШФУМ';
const birthPlace = 'USSR';

function checkPassport(name, surname, birthPlace) {
  if (name === 'Ащьф' && birthPlace === 'USSR') {
    console.log(`Добро пожаловать в РНДР, товарищ ${surname}!`);
  } else {
    console.log('Просчитался, но где?');
  }
}

checkPassport('Ащьф', 'ЛШТШФУМ', 'USSR');
checkPassport('Ащьф', 'ЛШТШФУМ', 'USA');