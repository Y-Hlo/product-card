// 6. Импорт переменной из comments.js
import { comments } from "./comments.js";

console.log(comments);

// УРОВЕНЬ 1

// 2. Фильтрация массива чисел

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const filteredNumbers = numbers.filter(number => number > 4);

console.log(filteredNumbers);

// 3. Проверка наличия элемента в массиве строк

const kitchenAppliances = [
  "кастрюля",
  "половник",
  "разделочная доска",
  "венчик для взбивания",
  "нож",
];

const hasKnife = kitchenAppliances.includes("нож");

console.log(hasKnife);

// 4. Функция для переворота массива

function reverseArray(arr) {
  return arr.reverse();
}

reverseArray(numbers);
reverseArray(kitchenAppliances);

console.log(numbers);
console.log(kitchenAppliances);

// УРОВЕНЬ 2

// 7. Фильтрация объектов по содержанию

const filteredComments = comments.filter(function(comment) {
  return (comment.email.includes(".com"));
});

console.log(filteredComments);

// 8. Трансформация данных

const updatedComments = comments.map(function(comment) {
  const updatedComment = { ...comment };
  if (updatedComment.id <= 5) {
    updatedComment.postId = 2;
  } else {
    updatedComment.postId = 1;
  }
  return updatedComment;
});

console.log(updatedComments);

// 9. Создание облегченных объектов

const shortComments = comments.map(function(comment) {
  return { id: comment.id, name: comment.name };
});

console.log(shortComments);

// 10. Валидация данных

const validatedComments = comments.map(function(comment) {
  const validatedComment = { ...comment };
  if (validatedComment.body.length > 180) {
    validatedComment.isInvalid = true;
  } else {
    validatedComment.isInvalid = false;
  }
  return validatedComment;
});

console.log(validatedComments);

// УРОВЕНЬ 3

// 11. Извлечение списка почт двумя методами: reduce и map

const emailsReduce = comments.reduce(function(acc, comment) {
  acc.push(comment.email)
  return acc;
}, []);

console.log(emailsReduce);

const emailsMap = comments.map(function(comment) {
  return comment.email;
});

console.log(emailsMap);

// 12. Преобразование массива почт в строку

const emailsString = emailsMap.join("; ");

console.log(emailsString);