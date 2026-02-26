// 1. Объект пользователя

const user = {
  name: " Donald",
  surname: "Trump",
  email: "trump@mail.ru",
  age: 79,
  maritalStatus: "женат",
  job: "бизнесмен",
  position: "президент",
  country: "США",
  city: "Нью-Йорк",
  species: "человек",
}

// 2. Объект автомобиля

const auto = {
  brand: "АвтоВАЗ",
  model: "ВАЗ-2107",
  year: 1982,
  color: "баклажановый",
  transmission: "автомат",
};

auto.owner = user;

// 3. Функция проверки скорости

function addMaxSpeed(auto) {
  if ("maxSpeed" in auto) {
    return;
  }
  auto.maxSpeed = 333;
}

addMaxSpeed(auto);

// 4. Функция вывода значения по свойству объекта

function getPropertyValue(obj, key) {
  console.log(obj[key])
}

// 5. Массив, содержащий названия продуктов (список)

const products = ["картофель", "лук", "хлеб"];

// 6. Массив, состоящий из объектов (книг)

const books = [
  {
    title: "Идиот", 
    author: "Фёдор Достоевский", 
    year: 1868, 
    color: "коричневый", 
    genre: "роман" 
  },
  {
    title: "Скотный двор", 
    author: "Джордж Оруэлл", 
    year: 1945, 
    color: "красный", 
    genre: "сатира" 
  },
  {
    title: "Отверженные", 
    author: "Виктор Гюго", 
    year: 1862, 
    color: "синий", 
    genre: "роман-эпопея" 
  }
];

books.push(
  {
    title: "Винни-Пух", 
    author: "Алан Милн", 
    year: 1926, 
    color: "зеленый", 
    genre: "повесть-сказка" 
  }
);

// 7. Массив, состоящий из объектов (книг внутри одной вселенной)

const sherlockBooks = [
  {
    title: "Этюд в багровых тонах", 
    author: "Артур Конан Дойл", 
    year: 1887, 
    color: "красный", 
    genre: "повесть" 
  },
  {
    title: "Знак четырёх", 
    author: "Артур Конан Дойл", 
    year: 1890, 
    color: "оранжевый", 
    genre: "повесть" 
  },
  {
    title: "Собака Баскервилей", 
    author: "Артур Конан Дойл", 
    year: 2902, 
    color: "синий", 
    genre: "повесть" 
  }
];

const allBooks = [...books, ...sherlockBooks];

// 8 Функция добавления нового свойства объекту внутри массива

function addRareStatus(allBooks) {
  return allBooks.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
};

const updatedBooks = addRareStatus(allBooks);
console.table(updatedBooks);