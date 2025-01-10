const addBtnELm = document.querySelector('.add-btn');
const inputElm = document.querySelector('.task-input');
const searchELm = document.querySelector('.search-input');
const taskListELm = document.querySelector('.task-list');
const editBtnELm = document.querySelector('.edit-btn');
const deleteBtnELm = document.querySelector('.delete-btn');
const completeBtnELm = document.querySelector('.complete-btn');
const undoBtnELm = document.querySelector('.undo-btn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const addEventListeners = () =>{
    addBtnELm.addEventListener('click',addTask);
}

function addTask (){
    const task = inputElm.value;
    if(task === ''){
        alert('Please enter a task');
        return;
    }
    tasks.push({task,completed: false});
    localStorage.setItem('task', JSON.stringify(tasks))
    renderTask();
    inputElm.value = '';
}
// <!-- <li class="task">
// <span class="task-name completed">Finished</span>
// <div class="task-actions">
//     <button class="edit-btn">Edit</button>
//     <button class="delete-btn">Delete</button>
//     <button class="undo-btn">Undo</button>
//     <button class="complete-btn">Complete</button>
// </div>
// </li> -->
const renderTask = () =>{
    tasks.map((task,index) =>{
        const taskElm = document.createElement('li');
        taskElm.classList.add('task');
        taskElm.innerHTML = `
        <span class="task-name completed">${task.task}</span>
        <div class="task-actions">
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="editTask(${index})">Delete</button>
            <button class="undo-btn" onclick="undoTask(${index})">Undo</button>
            <button class="complete-btn" onclick="completeTask(${index})">Complete</button>
        </div>
        `;
        taskListELm.appendChild(taskElm);
    });
}
renderTask();
addEventListeners();