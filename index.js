var task = document.getElementById("task");

var tasks = document.getElementById("tasks");

var button = document.getElementById("button");
button.addEventListener("click", manageTask);

var editTask;

var taskExists = false;

function manageTask() {

    var tRow = document.createElement("tr");

    var editBtn = document.createElement("input");
    editBtn.type = "submit";
    editBtn.value = "Edit";
    editBtn.className = "editButton";

    var deleteBtn = document.createElement("input");
    deleteBtn.type = "submit";
    deleteBtn.value = "Delete";
    deleteBtn.className = "deleteButton";

    var existingTasks = document.querySelectorAll("tr");

    if (button.value === "Add Task") {

        if (existingTasks) {
            for (let existingTask of existingTasks) {
                if (existingTask.firstElementChild.innerText === task.value) {
                    alert("Task Already Exisits!");
                    taskExists = true;
                }
                else taskExists = false;
            }
        }

        if (task.value.trim() !== "" && !taskExists) {

            var taskWrap = document.createElement("td");
            taskWrap.innerText = task.value;
            tRow.appendChild(taskWrap);

            var editBtnWrap = document.createElement("td");
            editBtnWrap.appendChild(editBtn);
            tRow.appendChild(editBtnWrap);

            var delBtnWrap = document.createElement("td");
            delBtnWrap.appendChild(deleteBtn);
            tRow.appendChild(delBtnWrap);

            tasks.appendChild(tRow);

            task.value = "";

        }

    }

    else if (button.value === "Update") {

        for (let existingTask of existingTasks) {
            if (existingTask.firstElementChild.innerText === editTask) {
                existingTask.firstElementChild.innerText = task.value;
            }
        }

        task.value = "";
        button.value = "Add Task";

    }

}

tasks.addEventListener('click', function (event) {

    if (event.target.value === 'Edit') {
        editTask = event.target.parentElement.parentElement.firstElementChild.innerText;
        task.value = editTask;
        button.value = "Update";
    }

    if (event.target.value === 'Delete') {
        if (confirm('Are You Sure?')) {
            var deleteTask = event.target.parentElement.parentElement;
            tasks.removeChild(deleteTask);
        }
    }

});