//sort method
//1-example
const names = ['mario','shun','chun-li','yoshi','luigi'];

names.sort();
names.reverse();
console.log(names);


//2-example
const scores = [10,50,20,2,35,70,45];

scores.sort((a,b) => a-b);

// scores.sort();
console.log(scores);

//3-example
const players = [
    {player: 'shaun', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'chun-li', score: 60},
];

players.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    }else if(b.score > a.score){
        return 1;
    }else{
        return 0;
    }
});

players.sort((a,b) => b.score - a.score);

console.log(players);