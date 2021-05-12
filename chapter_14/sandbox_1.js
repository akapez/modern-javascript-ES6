//rest parameter
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1,2,3,4,5,6);
console.log(result);

//spread syntax (arrays)

const people = ['sam', 'mark', 'john'];

const members = ['julia', 'steven', 'martin', ...people];
console.log(members);

//spread syntax (object)

const person = {name: 'sam', age: 30, job: 'clark'};
const personClone = {...person, location: 'Colombo'};

console.log(personClone);