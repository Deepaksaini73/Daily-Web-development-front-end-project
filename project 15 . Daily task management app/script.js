let tasks = document.querySelector("#tasks");
      let addBtn=document.querySelector('.addBtn');
      let taskInput=document.getElementById('taskInput');

      function addTask(taskText) {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const input = document.createElement("input");
        input.classList.add("check");
        input.type = "checkbox";


        const para = document.createElement("p");
        para.textContent = taskText;
        
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-xmark");

        taskDiv.appendChild(input);
        taskDiv.appendChild(para);
        taskDiv.appendChild(deleteIcon);

        tasks.appendChild(taskDiv);



    
        input.addEventListener("change", function () {
          if (this.checked) {
            taskDiv.classList.add("completed");
          }
           else {
            taskDiv.classList.remove("completed");
          }
          saveData();
        })



        deleteIcon.addEventListener('click',()=>{
            taskDiv.remove();
            saveData();
        });
saveData();
      }
      addBtn.addEventListener('click',function(){
        const taskText=taskInput.value;
        if(taskText != ""){ 
            taskInput.value="";
            addTask(taskText);
        }
        else{
            alert('Please Enter a task');
        }
      })

      taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addBtn.click();
            }
        });

        function saveData(){
            localStorage.setItem("data",tasks.innerHTML);
        }
        function showTask() {
    tasks.innerHTML = localStorage.getItem("data") || "";

    document.querySelectorAll(".task").forEach(taskDiv => {
        const input = taskDiv.querySelector(".check");
        const deleteIcon = taskDiv.querySelector(".fa-xmark");

        input.addEventListener("change", function () {
            if (this.checked) {
                taskDiv.classList.add("completed");
            } else {
                taskDiv.classList.remove("completed");
            }
            saveData(); 
        });

        deleteIcon.addEventListener('click', () => {
            taskDiv.remove();
            saveData(); 
        });
    });
}

showTask();