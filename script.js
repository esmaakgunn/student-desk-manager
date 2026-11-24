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
    taskItem.textContent = taskName;

    taskList.appendChild(taskItem);

    emptyMessage.hidden = true;

    taskInput.value = "";

    message.textContent = "Görev başarıyla eklendi!";
    message.style.color = "#16a34a";

    taskInput.focus();
});