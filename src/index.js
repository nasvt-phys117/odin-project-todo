import "./styles.css";
import {ToDoTask} from "./js/task.js";


//create button vars
var toDoTaskTitle = document.getElementById('taskTitle');
var toDoTaskDescription = document.getElementById('taskDescription');
var addTaskBtn = document.getElementById('addTaskBtn');
var displayTaskBtn = document.getElementById('displayTaskBtn');


let testTask = new ToDoTask(1, toDoTaskTitle, toDoTaskDescription);
function addTaskTesting(todoTask){
  localStorage.setItem("taskTitle", todoTask.title);
  localStorage.setItem("taskDescription", todoTask.description);
}

addTaskBtn.addEventListener('click', (event) => {
  addTaskTesting(testTask);
  testTask.logTask();
});

displayTaskBtn.addEventListener('click', (event)=> {
  const taskOutput = document.getElementById('taskOutput');
  const outToDoTaskTitle = localStorage.getItem('taskTitle');
  const outTodoTaskDescription = localStorage.getItem('taskDescription');

  while (taskOutput.firstChild) {
    taskOutput.removeChild(taskOutput.lastChild);
  }
  taskOutput.appendChild(document.createElement("h2"))
  .textContent = "Tasks:";

  const outputText = taskOutput.appendChild(document.createElement("p"));
  outputText.innerHTML = "<b>Task:</b> " + outToDoTaskTitle + "<br> <b> Description:</b> "+outTodoTaskDescription;
  toDoTaskTitle.value = '';
  toDoTaskDescription.value = '';
});