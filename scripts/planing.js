function generate(text, status, id) {
    return `<span id="task_${id}" class="task-item ${status ? "task-item-done": ""}"> ${ status ? " ": "<button onclick='done(" + id + ")'>done</button>" }${text}</span>` + '\n'
}

function add() {
    let text = document.getElementById('input-task-form').value
    let saved = JSON.parse(localStorage.getItem('tasks'));
    saved.push({
        'name': text,
        'status': 0,
        'id':  Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    })
    localStorage.setItem('tasks', JSON.stringify(saved));
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let res = "";
    for(let task in tasks) {
        res += generate(task.name, task.status, task.id);
    }
    document.getElementById("task-list").innerHTML = res;
}

function done(id) {
    let item = document.getElementById("task_" + id);
    item.classList.add("task-item-done");
    item.innerHTML = element.innerHTML.split("</button>")[1];
    let saved = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === id) {
            saved[i].status = 1
        }
    }
    localStorage.setItem('tasks', JSON.stringify(saved));
}