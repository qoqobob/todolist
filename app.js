const mainContainer = document.querySelector('.main-container');
const newTask = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-button');

addTaskBtn.addEventListener('click', function() {
    if (newTask.value != '') {
        const taskContainer = document.createElement('div');
        taskContainer.setAttribute('class', 'task-container');
        
        const task = document.createElement('p');
        task.setAttribute('class', 'task');
        task.innerText = newTask.value;
        
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
        newTask.value = '';

        deleteBtn.addEventListener('click', function() {
            this.parentElement.remove();
        });

        markBtn.addEventListener('click', function() {
            this.previousElementSibling.classList.toggle('strike-through');
        });
    }
});

