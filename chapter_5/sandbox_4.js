//primitive types

let scoreOne = 50;
let scoreTwo = scoreOne;


console.log(`scoreOne: ${scoreOne} , scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne} , scoreTwo: ${scoreTwo}`);

//reference type

const userOne = {name: 'sam' , age: 25};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'mark';
console.log(userOne, userTwo);
