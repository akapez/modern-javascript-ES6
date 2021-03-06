// get a reference to the 'ul'
const ul = document.getElementById('people');

const people = ['David', 'Sam', 'Mark', 'Justin', 'Harry'];

// let html = ``;

people.forEach(person => {
    ul.innerHTML += `<li style="color: blue">${person}</li>`;
});

// ul.innerHTML = html;