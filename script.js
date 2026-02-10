// Покраска первой карточки

const firstCardRecolorButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card__wrapper');
const blueHashColor = '#0000ff';

firstCardRecolorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

// Покраска всех карточек

const allCardRecolorButton = document.getElementById('recolor-all-card-button');
const allProductCard = document.querySelectorAll('.product-card__wrapper');
const greenHashColor = '#00ff44';

allCardRecolorButton.addEventListener('click', () => {
  allProductCard.forEach(card => {
    card.style.backgroundColor = greenHashColor;
  });
});

// Переход на страницу Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');
  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
}

// Вывод контента главного заголовка

const contentEl = document.querySelector('.product-catalog__title');
contentEl.addEventListener('mouseover', function () {
  console.log(contentEl.textContent);
});

// Поменять цвет кнопки

const btn = document.getElementById('recolor-button');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});