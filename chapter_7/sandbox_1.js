const form = document.querySelector('.signup-form');


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.username.value);
    
})

//testing RegEx

const username = 'avishka';
const pattern = /^[a-z]{7,}$/;

/* let result = pattern.test(username);

if(result){
    console.log('test passed!');
}else{
    console.log('test failed!');
}*/

let result  = username.search(pattern);
console.log(result);