/* Способы создания объекта */

const obj = new Object({name: 'sadsadsa'});
const user = {
  name: 'John',
  icon: '🤑'
};

// Добавление свойства
user.description = 'This is user';

// Удаление свойства
delete user.name;

// Доступ к свойству
const key = 'description';
console.log(user.icon);
console.log(user[key]);

// Проверить свойство
console.log('icon' in user, 'проверяем наличие свойства по ключу');
console.log(!!user.icon, 'проверяем наличие свойства по ключу');

// Вычисляемые свойства
const newKey = 'salary';
const newUser = {
  [newKey]: 2000,
  greet: function() {
    console.log('Hello js');
  },
  showSalary() {
    console.log(this);
  }
}

// console.log(newUser);
// newUser.greet();
// newUser.showSalary();