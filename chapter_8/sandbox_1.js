//filter method

const scores = [10, 30, 15, 25, 50, 40, 5];

// const filterScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filterScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);
