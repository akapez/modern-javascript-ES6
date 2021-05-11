//store data in local storage
localStorage.setItem('name', 'Avishka');
localStorage.setItem('age', 25);

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

//updating data
localStorage.setItem('name', 'Sam');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

//deleting data from local storage
// localStorage.removeItem('name');
localStorage.clear();

name = localStorage.getItem('name');

console.log(name);