const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closed = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.style.display = "block";
});

closed.addEventListener('click', () => {
    popup.style.display = "none";
});

popup.addEventListener('click', () => {
    popup.style.display = "none";
});