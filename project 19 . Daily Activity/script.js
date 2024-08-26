
let addMore = document.querySelector('.addMore');
let tasks = document.querySelector('.tasks');
let date = document.getElementById('date');

// Set the current date
function setCurrentDate() {
    let today = new Date().toISOString().split('T')[0];
    date.value=today;
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
        setCurrentDate(); 
        createNewDateDiv(); 
    }
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

    saveTasks(); 
}

// Save tasks to localStorage
function saveTasks() {
    const taskContainers = document.querySelectorAll('.tasks');
    taskContainers.forEach((taskContainer, index) => {
        localStorage.setItem(`tasks-${index}`, taskContainer.innerHTML);
    });
}

// Load tasks from localStorage
function loadTasks() {
    const taskContainers = document.querySelectorAll('.tasks');
    taskContainers.forEach((taskContainer, index) => {
        const savedTasks = localStorage.getItem(`tasks-${index}`);
        if (savedTasks) {
            taskContainer.innerHTML = savedTasks;
        }
    });
}

// Initial setup when the page loads
window.onload = function() {
    setCurrentDate(); 
    checkDateChange(); 
    loadTasks(); 
};

// Check for date change every minute
setInterval(checkDateChange, 60000); 

// Add a new task when "Add more" is clicked
addMore.addEventListener('click', addTask);
