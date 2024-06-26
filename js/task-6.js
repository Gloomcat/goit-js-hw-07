function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxes = document.querySelector('#boxes');
    for (let i = 0, j = 30; i < amount; i++, j += 10) {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = box.style.height = `${j}px`;
        box.classList.add('box');
        boxes.append(box);
    }
}

function destroyBoxes() {
    const boxes = document.querySelector('#boxes');
    boxes.innerHTML = '';
}

const create = document.querySelector('button[data-create]');
create.addEventListener('click', (_) => {
    const input = document.querySelector('input');
    const count = input.valueAsNumber;
    if (count < 1 || count > 100) {
        return;
    }

    input.value = '';
    createBoxes(count);
});

const destroy = document.querySelector('button[data-destroy]');
destroy.addEventListener('click', destroyBoxes);