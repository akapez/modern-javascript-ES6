//sets
const namesArray = ['sam', 'mark', 'martin', 'john', 'sam'];
console.log(namesArray);

// const namesSet = new Set(namesArray);
// console.log(namesSet);

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(25);
ages.add(25).add(85);
ages.add(10);
ages.delete(25);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(10));

ages.clear();

console.log(ages);