const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    
    //validation
    const username = form.username.value;
    
    if(pattern.test(username)){
        feedback.textContent = 'username is valid';
    }else{
        feedback.textContent = 'username is invalid!';
    }

});

// live feedback
form.username.addEventListener('keyup' , e => {
    // console.log(e.target.value, form.username.value);
    if(pattern.test(e.target.value)){
        // console.log('passed');
        form.username.setAttribute('class', 'success');
    }else{
        // console.log('failed');
        form.username.setAttribute('class', 'error');
    }
});
 