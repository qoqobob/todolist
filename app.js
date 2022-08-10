const mainContainer = document.querySelector('.main-container');
const newTask = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-button');

function addTask(taskText, isTaskDone) {
    if (taskText != '') {
        const taskContainer = document.createElement('div');
        taskContainer.setAttribute('class', 'task-container');
        
        const task = document.createElement('p');
        task.setAttribute('class', 'task');
        task.innerText = taskText.replace(/\s+/g,' ').trim();
        
        const markBtn = document.createElement('button');
        markBtn.setAttribute('class', 'mark-task');
        markBtn.innerHTML = '<i class="bi bi-check-circle"></i>';
    
        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-task');
        deleteBtn.innerHTML = '<i class="bi bi-trash3-fill"></i>';
        
        taskContainer.append(task);
        taskContainer.append(markBtn);
        taskContainer.append(deleteBtn);
    
        mainContainer.append(taskContainer);
          
        if (isTaskDone == 'true') {
            task.classList.add('strike-through');
        }
        
        deleteBtn.addEventListener('click', function() {
            localStorage.removeItem(this.previousElementSibling.previousElementSibling.innerText);
            this.parentElement.remove();
        });
        
        markBtn.addEventListener('click', function() {
            this.previousElementSibling.classList.toggle('strike-through');
            if (this.previousElementSibling.classList.contains('strike-through')) {
                localStorage.setItem(this.previousElementSibling.innerText, true);
            } else {
                localStorage.setItem(this.previousElementSibling.innerText, false);
            }
        });
    }
};



addTaskBtn.addEventListener('click', function() {
    let isTaskAlreadyExist = false;
    if (newTask.value != '') {
        for (let i = 0; i < localStorage.length; i++) {
            let taskFromStorage = localStorage.key(i);
            if (newTask.value.replace(/\s+/g,' ').trim() == taskFromStorage) {
                isTaskAlreadyExist = true;
            };
        }
        if (isTaskAlreadyExist) {
            alert('This task exists already!');
        } else {
            addTask(newTask.value.replace(/\s+/g,' ').trim());
            localStorage.setItem(newTask.value.replace(/\s+/g,' ').trim(), false);
            newTask.value = '';
        };

    }
});

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < localStorage.length; i++) {
        let taskFromStorage = localStorage.key(i);
        let taskStatus = localStorage.getItem(taskFromStorage);
        addTask(taskFromStorage, taskStatus);

    }
});




