import "./styles.css";
import {ToDoTask} from "./js/task.js";


//create button vars
var toDoTaskTitle = document.getElementById('taskTitle');
var toDoTaskDescription = document.getElementById('taskDescription');
var addTaskBtn = document.getElementById('addTaskBtn');
var displayTaskBtn = document.getElementById('displayTaskBtn');


let testTask = new ToDoTask(1, toDoTaskTitle, toDoTaskDescription);
let testTaskArray = [];

function addTaskTesting(todoTask, taskArray){

  let inToDoTaskObj = {id: 1, title: todoTask.title, description: todoTask.description}


  taskArray.push(inToDoTaskObj);
  let jsonArray = JSON.stringify(taskArray);
  localStorage.setItem("taskArray",jsonArray);

  // localStorage.setItem("taskTitle", todoTask.title);
  // localStorage.setItem("taskDescription", todoTask.description);
}

addTaskBtn.addEventListener('click', (event) => {
  addTaskTesting(testTask,testTaskArray);
  testTask.logTask();

  toDoTaskTitle.value = '';
  toDoTaskDescription.value = '';
});

displayTaskBtn.addEventListener('click', (event)=> {
  const taskOutput = document.getElementById('taskOutput');

  let localJsonArray = localStorage.getItem("taskArray");

  if (localJsonArray) {
    let taskArray = JSON.parse(localJsonArray);
    console.log(taskArray);

    while (taskOutput.firstChild) {
      taskOutput.removeChild(taskOutput.lastChild);
    }
    taskOutput.appendChild(document.createElement("h2"))
      .textContent = "Tasks:";

    const outputText = taskOutput.appendChild(document.createElement("p"));

    for (var i = 0; i < taskArray.length; i++)
    {
      outputText.innerHTML += "<br> <br>" +"<b>Title: </b>" +taskArray[i].title + "<br> <b>Description</b>: " + taskArray[i].description;
    }

  } else {
    console.log("Error: No local data found!");
  }

  // const outToDoTaskTitle = localStorage.getItem('taskTitle');
  // const outTodoTaskDescription = localStorage.getItem('taskDescription');

  // while (taskOutput.firstChild) {
  //   taskOutput.removeChild(taskOutput.lastChild);
  // }
  // taskOutput.appendChild(document.createElement("h2"))
  // .textContent = "Tasks:";

  // const outputText = taskOutput.appendChild(document.createElement("p"));
  // outputText.innerHTML = outToDoTaskTitle  + "<br> <b>Description</b>: " + outTodoTaskDescription;
});