// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('success');
// content.classList.remove('success'); 


const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }else if(p.textContent.includes('success')){
        p.classList.add('success');
    }else{
        p.style.color = 'black';
    }
})