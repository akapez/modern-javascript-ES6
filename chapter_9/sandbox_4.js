const now = new Date();

// console.log(dateFns.isToday(now));

//formatting options
console.log(dateFns.format(now, 'YYYY')); 
console.log(dateFns.format(now, 'MMMM')); 
console.log(dateFns.format(now, 'Do')); 
console.log(dateFns.format(now, 'dddd Do MMMM YYYY')); 

//comparing dates
const before = new Date('May 1 2021 7:30:59');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))





