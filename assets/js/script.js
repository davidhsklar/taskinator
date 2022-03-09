//Setting up some variables to use

var formEl = document.querySelector("#task-form");

var taskToDoEl = document.querySelector("#task-to-do");


//creating list element

var taskItemEl = document.createElement("li");

//applying task item to task table

taskToDoEl.appendChild(taskItemEl);



var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  

formEl.reset();

    // package up data as an object

    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };
  
    // send it as an argument to createTaskEl

    createTaskEl(taskDataObj);
  }

  var createTaskEl = function(taskDataObj) {
    // create list item

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
    listItemEl.appendChild(taskInfoEl);
    
    // add entire list item to list
    taskToDoEl.appendChild(listItemEl);

}
  //add task on form.  Because we're targeting the entire form instead of only the button, 
  //we can't use the click event listener anymore. If we kept a click event listener, t
  //then every time we clicked on the form it would run the taskFormHandler () function, 
  // which isn't what we want. Instead, we'll use a form-specific event called submit

formEl.addEventListener("submit", taskFormHandler );
