class Task {
  constructor(name) {
    this.name = name;
  }
}

function createTaskDiv(task) {
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "20%";
  div.style.background = "blue";
  div.style.color = "white";
  div.innerHTML = task.name;
  div.classList.add("aaa");

  document.getElementById("tasks").appendChild(div);
}

var tasks = [new Task("test1"), new Task("test2"), new Task("test3"), new Task("test1"), new Task("test2"), new Task("test3"), new Task("test1"), new Task("test2"), new Task("test3")];

tasks.forEach(createTaskDiv);
