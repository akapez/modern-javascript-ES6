const body = document.querySelector('body');

export const styleBody = () => {
    body.style.background = 'red'
};

export const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

