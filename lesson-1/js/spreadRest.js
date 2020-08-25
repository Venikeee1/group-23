'use strict';

/* Spread & Rest */

// задачка на пониманиее спред и рест
const d = [1, 3, 4, 6];
const [a, b, ...c] = [...d];

const fruits = ['mango', 'kiwi', 'semki'];
const vegetables = ['cucumber', 'potato', 'tomato'];
// объеденяем два массива в один
const fruitsAndVegetables = [...vegetables, ...fruits];
// Используем деструктуризацию и рест оператор в массивах
const [first, second, ...rest] = fruitsAndVegetables;
// console.log(rest);

const car = {
  name: 'bmw',
  description: 'I am best of the best car. Audi ****',
  drive() {
    console.log('I am driving');
  }
}

const boostedCar = {
  name: 'Tuning car',
  accelerate() {
    console.log('I am accelerating');
  }
}

// объеденяем два объекта в один
const carWithBoost = {
  ...boostedCar,
  ...car
}

// Используем деструктуризацию и рест оператор в объекте
const { name, description, ...restProperties } = carWithBoost;
// ниже приведен аналог записи по старославянски
// const name = carWithBoost.name;
// const description = carWithBoost.description;

console.log(restProperties, '----restProperties----');


// суммирование аргументов использую рест оператор для аргументс
const sumValues = (...restArgs) => {
  let result = 0;
  for(let item of restArgs) {
    result += item;
  }
  console.log(result);
  return result;
}

// sumValues(1,2,3,4);


// Не знал где это остваить
// удаление символов из строки
const regExp = /\d/g;
const word = 'aaasss2312321aaa';

console.log(word.replace(regExp, ''));

