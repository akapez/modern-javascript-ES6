let fruits = ['Apple', 'Orange', 'Banana'];

fruits[2] = 'Grapes';

// console.log(fruits[2]);
// console.log(fruits[1].length)

let result = fruits.join(',');
let result = fruits.indexOf('Orange');
let result = fruits.concat(['Pine-Apple', 'Avocado']);
let result = fruits.push('Pine-Apple');
result = fruits.pop();
result = fruits.shift();
result = fruits.unshift('Pine-Apple');

console.log(fruits);