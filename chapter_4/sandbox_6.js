//callback and foreach

let people = ['David', 'Sam', 'Mark', 'Justin', 'Harry'];

people.forEach(function(person) {
    console.log(person);
})

people.forEach((person, index) => {
    console.log(index, person);
})

const logPerson = (person, index) => {
    console.log(`${index} - ${person}`);
};

people.forEach(logPerson);