const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', (event) => {
    const content = event.currentTarget.value.trim();
    outputField.textContent = content === '' ? 'Anonymous' : content;
});
