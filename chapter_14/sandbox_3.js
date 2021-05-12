//symbols

const symbolOne = Symbol('a name');
const symbolTwo = Symbol('a name');


console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const ninja = {}

ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';



console.log(ninja);