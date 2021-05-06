//dates and time

const now = new Date();

console.log(now);
console.log(typeof now);

//year, month, day, times
console.log('getFullYear: ', now.getFullYear());
console.log('getDay: ' , now.getDay());
console.log('getMonth: ' , now.getMonth());
console.log('getDate: ', now.getDate());

//timestamp
console.log('timestamp: ', now.getTime());

//date string
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());