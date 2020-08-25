/* Деструктуризация */
const cords = [50.4444, 45.5555];
// старый метод
// const x = cords[0];
// const y = cords[1];

// Деструктуризация массивов
const [x, y] = cords;
// console.log(x, y);

const firstDog = {
  name: 'Bob',
  bark() {
    console.log('I am barking');
  }
}

const secondDog = {
  name: 'Denis',
  bark() {
    console.log('I am barking');
  }
}

// Деструктуризация объекта с переименованием свойства
const { name: firstDogName } = firstDog;
const { name: secondDogName } = secondDog;

// console.log(firstDogName, secondDogName);

const arr = [1,2,3,4];
// В случае если не надо первые элементы
const [ , , thirdValue] = arr;
console.log(thirdValue);