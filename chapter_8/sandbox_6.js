//changing array methods

const products = [
    {name: 'apple', price: 20},
    {name: 'banana', price: 40},
    {name: 'grapes', price: 30},
    {name: 'avocado', price: 10},
    {name: 'pine-apple', price: 50},
];

// const filtered = products.filter(product => product.price > 20);

// const newArray = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });


const newArray = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price /2} pounds`);

console.log(newArray);

