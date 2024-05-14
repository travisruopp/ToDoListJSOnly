let tasks =[];

function addTask() {
    let taskInput = document.getElementById('to-do-input').value.trim();
    if( taskInput !==''){
        tasks.push(taskInput);
        updateTaskList();
    }
    document.getElementById('to-do-input').value = '';
}

function updateTaskList(){
    let taskList = document.getElementById('to-do-list');

    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${task} <button class ="delete-btn" onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    })
}

function deleteTask(index){
    task.splice(index,1);
    updateTaskList();
}