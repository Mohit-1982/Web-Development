const addBtn = document.querySelector('.input-btn');
const form = document.querySelector('.input-div');
const input = document.querySelector('.input-text');
const inner = document.querySelector('.inner');
const delButton = document.querySelector('.del-btn');

document.addEventListener('click', (e) => {
    // Event Delegation:
        // Parent pe event listener lagana instead of
        // bohot saare child elements pe listener lagane ke,
        // jisse parent event bubbling ki wajah se child ke
        // events ko handle kar sake, even agar child
        // dynamically baad mein create kiya gaya ho.
    if (e.target.matches('.del-btn')) {
        e.target.parentElement.remove();
    }
});

form.addEventListener('click', (e) => {
    e.preventDefault();
    let task = input.value.trim();
    if (task === '') return;

    createTask(task);
    input.value = "";
});

function createTask(task) {
    const div = document.createElement('div');
    const para = document.createElement('p');
    const button = document.createElement('button');

    div.classList.add("todo-list");
    para.textContent = task;
    para.classList.add("todo-task");
    button.textContent = "DEL";
    button.classList.add("del-btn");

    div.append(para, button);
    inner.appendChild(div);
}