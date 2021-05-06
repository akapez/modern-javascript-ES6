let fruits = ['Apple', 'Orange', 'Banana'];

fruits[1] = 'Grapes';

// console.log(fruits[1]);
// console.log(fruits[2].length)

let result = fruits.join(',');
let result = fruits.indexOf('Orange');
let result = fruits.concat(['Pine-Apple', 'Avocado']);
let result = fruits.push('Pine-Apple');
result = fruits.pop();
result = fruits.shift();
result = fruits.unshift('Pine-Apple');

console.log(fruits);