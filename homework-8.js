// 2(b). Импорт массива объектов продуктов

import { products } from "./products.js";

console.log(products);

const productTemplate = document.getElementById("product-template");
const productContainer = document.getElementById("product-container");

// 3. Создание и реализация шаблона продуктовых карточек

function createProductCard(product) {
  const productClone = productTemplate.content.cloneNode(true);
  const productCard = productClone.querySelector(".product-card__wrapper");

  productCard.querySelector(".product-card__img").src = product.imgSrc;
  productCard.querySelector(".product-card__img").alt = product.imgAlt;
  productCard.querySelector(".product-card__skin-type").textContent = product.skinType;
  productCard.querySelector(".product-card__title").textContent = product.title;
  productCard.querySelector(".product-card__description").textContent = product.description;
  productCard.querySelector(".product-card__price").textContent = product.price + ' ₽';

  const productIngredients = productCard.querySelector(".product-card__list-of-ingredients");
  product.ingredients.forEach(function(ingredientText) {
  const ingredientList = document.createElement("li");
  ingredientList.classList.add("product-card__ingredients");
  ingredientList.textContent = ingredientText;
  productIngredients.appendChild(ingredientList);
});

  return productCard;
};

// 4. Получение массива объектов через метод reduce

const productsTitleDescription = products.reduce(function(acc, product) {
  const obj = {};
  obj[product.title] = product.description
  acc.push(obj)
  return acc
}, []);

console.log(productsTitleDescription);

// 5. Функции запроса количества и рендеринга карточек

function getCardCount() {
  const answer = prompt("Сколько карточек отобразить? (Введи число от 1 до 5)");
  const count = Number(answer);
  if (count >= 1 && count <= 5) {
    return count;
  } else {
    alert('Ошибка! Введите число от 1 до 5.');
    return 1;
  }
};

function renderCards(count) {
  productContainer.innerHTML = "";
  const selectedProducts = products.slice(0, count);
  selectedProducts.forEach(function(product) {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
}

const count = getCardCount();
renderCards(count);