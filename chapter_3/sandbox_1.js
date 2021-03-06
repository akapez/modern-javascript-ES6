// for loops

for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished'); 

const fruits = ['Apple', 'Orange', 'Banana'];

for(let i = 0; i < fruits.length; i++){
    // console.log(fruits[i]);
    let html  = `<div>${fruits[i]}</div>`
    console.log(html);
}