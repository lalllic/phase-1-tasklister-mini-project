document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const desc = document.getElementById("new-task-description");
  const prio = document.getElementById("new-task-priority");

  const list = document.getElementById("tasks");

  form.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};