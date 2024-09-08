let addMore = document.querySelector('.addMore');
let tasks = document.querySelector('.tasks');
let date = document.getElementById('date');

// Set the current date
function setCurrentDate() {
    let today = new Date().toISOString().split('T')[0];
    date.value = today;
    localStorage.setItem('currentDate', today); // Store the date in localStorage
}

// Create a new date div
function createNewDateDiv() {
    const tasksContainer = document.querySelector('.tasks');
    const lastTask = tasksContainer.lastElementChild;

    const newDateDiv = document.createElement('div');
    newDateDiv.className = 'dateDiv';

    const newInput = document.createElement('input');
    newInput.className = 'date';
    newInput.type = 'date';
    newInput.value = new Date().toISOString().split('T')[0]; 
    newInput.readOnly = true;

    newDateDiv.appendChild(newInput);

    // Insert the new date div right after the last task
    if (lastTask) {
        lastTask.parentNode.insertBefore(newDateDiv, lastTask.nextSibling);
    } else {
        tasksContainer.appendChild(newDateDiv);
    }

    const newTasksDiv = document.createElement('div');
    newTasksDiv.className = 'tasks';
    newDateDiv.parentNode.insertBefore(newTasksDiv, newDateDiv.nextSibling);

    tasks = newTasksDiv;
}

// Check if the date has changed
function checkDateChange() {
    let storedDate = localStorage.getItem('currentDate');
    let today = new Date().toISOString().split('T')[0];

    if (storedDate !== today) {
        clearTasks(); // Clear tasks when the day changes
        setCurrentDate();
        createNewDateDiv();
    }
}

// Clear all tasks from the page and localStorage
function clearTasks() {
    tasks.innerHTML = ''; // Remove all task elements
    localStorage.removeItem('tasks'); // Clear tasks from localStorage
}

// Add a new task
function addTask() {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add("task");

    let subjectDiv = document.createElement('div');
    subjectDiv.classList.add("subject");
    subjectDiv.setAttribute("contenteditable", true);

    let taskValueP = document.createElement('p');
    taskValueP.classList.add("taskValue");
    taskValueP.setAttribute("contenteditable", true);

    let checkDiv = document.createElement('div');
    let input = document.createElement('input');
    input.type = 'checkbox';
    checkDiv.appendChild(input);
    checkDiv.classList.add("check");

    taskDiv.append(subjectDiv);
    taskDiv.append(taskValueP);
    taskDiv.append(checkDiv);

    tasks.appendChild(taskDiv);

    subjectDiv.addEventListener('input', saveTasks);
    taskValueP.addEventListener('input', saveTasks);
    input.addEventListener('change', saveTasks);

    saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
    const tasksArray = [];
    document.querySelectorAll('.task').forEach(taskDiv => {
        const subject = taskDiv.querySelector('.subject').innerText;
        const taskValue = taskDiv.querySelector('.taskValue').innerText;
        const isChecked = taskDiv.querySelector('input[type="checkbox"]').checked;

        tasksArray.push({ subject, taskValue, isChecked });
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasksArray = JSON.parse(savedTasks);
        tasksArray.forEach(taskData => {
            let taskDiv = document.createElement('div');
            taskDiv.classList.add("task");

            let subjectDiv = document.createElement('div');
            subjectDiv.classList.add("subject");
            subjectDiv.contentEditable = true;
            subjectDiv.innerText = taskData.subject;

            let taskValueP = document.createElement('p');
            taskValueP.classList.add("taskValue");
            taskValueP.contentEditable = true;
            taskValueP.innerText = taskData.taskValue;

            let checkDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.checked = taskData.isChecked;
            checkDiv.appendChild(input);
            checkDiv.classList.add("check");

            taskDiv.append(subjectDiv);
            taskDiv.append(taskValueP);
            taskDiv.append(checkDiv);

            tasks.appendChild(taskDiv);

            subjectDiv.addEventListener('input', saveTasks);
            taskValueP.addEventListener('input', saveTasks);
            input.addEventListener('change', saveTasks);
        });
    }
}

// Initial setup when the page loads
window.onload = function () {
    setCurrentDate();
    checkDateChange();
    loadTasks();
};

// Check for date change every minute
setInterval(checkDateChange, 60000);

// Add a new task when "Add more" is clicked
addMore.addEventListener('click', addTask);
