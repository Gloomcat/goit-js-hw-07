function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', (_) => {
    const newColor = getRandomHexColor();

    const colorText = document.querySelector('.color');
    colorText.textContent = newColor;

    const body = document.querySelector('body');
    body.style.backgroundColor = newColor;
});
