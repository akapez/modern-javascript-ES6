//map methods
const prices = [10, 30, 15, 25, 50, 40, 5];

const salesPrice = prices.map(price => price / 2);
console.log(salesPrice);

const products = [
    {name: 'apple', price: 20},
    {name: 'banana', price: 40},
    {name: 'grapes', price: 30},
    {name: 'avocado', price: 10},
    {name: 'pine-apple', price: 50},

];

const salesProducts = products.map(product => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2};
    }else{
        return product;
    };
});

console.log(salesProducts, products);