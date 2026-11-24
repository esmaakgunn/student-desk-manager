const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const message = document.getElementById("message");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        message.textContent = "Lütfen bir görev adı giriniz.";
        message.style.color = "#dc2626";
        return;
    }

    const taskItem = document.createElement("li");

    const taskLabel = document.createElement("label");
    taskLabel.className = "task-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    checkbox.addEventListener("change", function () {
        taskItem.classList.toggle("completed", checkbox.checked);
    });

    taskLabel.appendChild(checkbox);
    taskLabel.appendChild(taskText);

    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);

    emptyMessage.hidden = true;

    taskInput.value = "";

    message.textContent = "Görev başarıyla eklendi!";
    message.style.color = "#16a34a";

    taskInput.focus();
});