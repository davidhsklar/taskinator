var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

var taskToDoEl = document.querySelector("#task-to-do");

var taskItemEl = document.createElement("li");

taskToDoEl.appendChild(taskItemEl);

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
  }

buttonEl.addEventListener("click", createTaskHandler);
