//Setting up some variables to use

var formEl = document.querySelector("#task-form");

var taskToDoEl = document.querySelector("#task-to-do");

//creating list element

var taskItemEl = document.createElement("li");

//applying task item to task table

taskToDoEl.appendChild(taskItemEl);

//applying task list formation to task items/table

var createTaskHandler = function(event ) {

    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
  }

  //add task on form.  Because we're targeting the entire form instead of only the button, 
  //we can't use the click event listener anymore. If we kept a click event listener, t
  //then every time we clicked on the form it would run the createTaskHandler() function, 
  // which isn't what we want. Instead, we'll use a form-specific event called submit

formEl.addEventListener("submit", createTaskHandler);
