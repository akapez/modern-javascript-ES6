const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something new</li>';
    const li = document.createElement('li');
    li.textContent = 'Something new';
    // ul.append(li);
    ul.prepend(li);
})



// const items = document.querySelectorAll('li');


// items.forEach(item => {
//     item.addEventListener('click' , (e) => {
//         console.log('event in LI');
//         e.stopPropagation();
//         // console.log('item clicked');
//         // console.log(e.target);
//         // e.target.style.textDecoration = "line-through";
//         e.target.remove()
//     });
// });

ul.addEventListener('click' , (e) => {
    // console.log('event in UL');
    // console.log(e.target);
    // e.target.remove();
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})