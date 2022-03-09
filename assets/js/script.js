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

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    // create list item
var listItemEl = document.createElement("li");

listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");

// give it a class name

taskInfoEl.className = "task-info";

// add HTML content to div

taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list

taskToDoEl.appendChild(listItemEl);
  }

  //add task on form.  Because we're targeting the entire form instead of only the button, 
  //we can't use the click event listener anymore. If we kept a click event listener, t
  //then every time we clicked on the form it would run the createTaskHandler() function, 
  // which isn't what we want. Instead, we'll use a form-specific event called submit

formEl.addEventListener("submit", createTaskHandler);
