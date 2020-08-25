/* Перебор объекта */

const fighter = {
  name: 'Motaro',
  damage: 1000,
  health: 5000,
  icon: '👿'
}

// возможен перебор по свойствам прототипа,
// лучше используйте Object.keys, Object.values, Object.entries
for(let key in fighter) {
  console.log(`Key is: ${key}`);
  console.log(`Value is: ${fighter[key]}`);
}

const keyList = Object.keys(fighter);
const valueList = Object.values(fighter);
const valueEntries = Object.entries(fighter);
// console.log(keyList);
// console.log(valueList);
// console.log(valueEntries);

for( let key of keyList) {
  // console.log(`Value ${fighter[key]}`);
}

// console.log(fighter);