const list = document.querySelector('.list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    const removeButton = document.createElement('button');

    li.appendChild(span);
    span.textContent = myItem;
    li.appendChild(removeButton);
    removeButton.textContent = '❌';
    list.appendChild(li);
    removeButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    input.focus();
});