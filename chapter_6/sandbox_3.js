const para = document.querySelector('p');

// para.innerText = 'Good bye world';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText = 'bye';
// })


const content = document.querySelector('.content');

// console.log(content.innerHTML);

// content.innerHTML = '<h2>Hey There</h2>'

const people = ['sam' , 'mark', 'smith'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})