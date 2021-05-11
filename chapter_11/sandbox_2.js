const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const data = localStorage.getItem('todos');

console.log(JSON.parse(data));