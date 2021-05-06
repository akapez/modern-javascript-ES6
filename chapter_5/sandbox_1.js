//object literals

let user = {
    name: 'Sam',
    age: 24,
    email: 'sam@test.com',
    fruits: ['Banana', 'Apple', 'Strawberry']
};

console.log(user);
console.log(user.email);
console.log(user['name']);

user.age = 30;
console.log(user.age);

console.log(typeof user);