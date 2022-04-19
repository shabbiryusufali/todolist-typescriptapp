System.register(["./task"], function (exports_1, context_1) {
    "use strict";
    var _a, _b, _c, _d, task_1, listOfTasks, taskNumber, i;
    var __moduleName = context_1 && context_1.id;
    function addTask() {
        if (document.getElementById("taskName") && document.getElementById("taskDay")) {
            let taskName = document.getElementById("taskName").value;
            let taskDay = document.getElementById("taskDay").value;
            let newTask = new task_1.TaskObject(taskName, taskDay);
            listOfTasks.push(newTask);
            displayNewTask(newTask, i);
            i++;
        }
    }
    function generateTable() {
        listOfTasks = JSON.parse(localStorage.getItem("taskList") || "[]");
        listOfTasks.forEach(task => {
            displayNewTask(task, i);
            i++;
        });
    }
    function showWeekends() {
        const sun = document.getElementsByClassName('weekend')[0];
        sun.style.display = 'table-cell';
        const sunTasks = document.getElementsByClassName('weekend')[1];
        sunTasks.style.display = 'table-cell';
        const sat = document.getElementsByClassName('weekend')[2];
        sat.style.display = 'table-cell';
        const satTasks = document.getElementsByClassName('weekend')[3];
        satTasks.style.display = 'table-cell';
    }
    function showBusiness() {
        const sun = document.getElementsByClassName('weekend')[0];
        sun.style.display = 'none';
        const sunTasks = document.getElementsByClassName('weekend')[1];
        sunTasks.style.display = 'none';
        const sat = document.getElementsByClassName('weekend')[2];
        sat.style.display = 'none';
        const satTasks = document.getElementsByClassName('weekend')[3];
        satTasks.style.display = 'none';
    }
    function deleteTasks() {
        let elementToAppend;
        elementToAppend = document.getElementById("sundayTasks");
        elementToAppend.innerHTML = "";
        elementToAppend = document.getElementById("mondayTasks");
        elementToAppend.innerHTML = "";
        elementToAppend = document.getElementById("tuesdayTasks");
        elementToAppend.innerHTML = "";
        elementToAppend = document.getElementById("wednesdayTasks");
        elementToAppend.innerHTML = "";
        elementToAppend = document.getElementById("thursdayTasks");
        elementToAppend.innerHTML = "";
        elementToAppend = document.getElementById("fridayTasks");
        elementToAppend.innerHTML = "";
        elementToAppend = document.getElementById("saturdayTasks");
        elementToAppend.innerHTML = "";
        listOfTasks = [];
        taskNumber = 0;
        i = 0;
        localStorage.setItem("taskList", JSON.stringify(listOfTasks));
    }
    function displayNewTask(newTask, i) {
        let elementToAppend;
        switch (newTask.day) {
            case "sunday": {
                if (document.getElementById("sundayTasks")) {
                    elementToAppend = document.getElementById("sundayTasks");
                    let currentItems = elementToAppend.innerHTML;
                    taskNumber++;
                    let newItems = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`;
                    currentItems = currentItems + newItems;
                    console.log(currentItems);
                    elementToAppend.innerHTML = currentItems;
                    let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`);
                    console.log(listItem);
                    localStorage.setItem("taskList", JSON.stringify(listOfTasks));
                }
                break;
            }
            case "monday": {
                if (document.getElementById("mondayTasks")) {
                    elementToAppend = document.getElementById("mondayTasks");
                    let currentItems = elementToAppend.innerHTML;
                    taskNumber++;
                    let newItems = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`;
                    currentItems = currentItems + newItems;
                    console.log(currentItems);
                    elementToAppend.innerHTML = currentItems;
                    let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`);
                    console.log(listItem);
                    localStorage.setItem("taskList", JSON.stringify(listOfTasks));
                }
                break;
            }
            case "tuesday": {
                if (document.getElementById("tuesdayTasks")) {
                    elementToAppend = document.getElementById("tuesdayTasks");
                    let currentItems = elementToAppend.innerHTML;
                    taskNumber++;
                    let newItems = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`;
                    currentItems = currentItems + newItems;
                    console.log(currentItems);
                    elementToAppend.innerHTML = currentItems;
                    let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`);
                    console.log(listItem);
                    localStorage.setItem("taskList", JSON.stringify(listOfTasks));
                }
                break;
            }
            case "wednesday": {
                if (document.getElementById("wednesdayTasks")) {
                    elementToAppend = document.getElementById("wednesdayTasks");
                    let currentItems = elementToAppend.innerHTML;
                    taskNumber++;
                    let newItems = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`;
                    currentItems = currentItems + newItems;
                    console.log(currentItems);
                    elementToAppend.innerHTML = currentItems;
                    let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`);
                    console.log(listItem);
                    localStorage.setItem("taskList", JSON.stringify(listOfTasks));
                }
                break;
            }
            case "thursday": {
                if (document.getElementById("thursdayTasks")) {
                    elementToAppend = document.getElementById("thursdayTasks");
                    let currentItems = elementToAppend.innerHTML;
                    taskNumber++;
                    let newItems = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`;
                    currentItems = currentItems + newItems;
                    console.log(currentItems);
                    elementToAppend.innerHTML = currentItems;
                    let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`);
                    console.log(listItem);
                    localStorage.setItem("taskList", JSON.stringify(listOfTasks));
                }
                break;
            }
            case "friday": {
                if (document.getElementById("fridayTasks")) {
                    elementToAppend = document.getElementById("fridayTasks");
                    let currentItems = elementToAppend.innerHTML;
                    taskNumber++;
                    let newItems = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`;
                    currentItems = currentItems + newItems;
                    console.log(currentItems);
                    elementToAppend.innerHTML = currentItems;
                    let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`);
                    console.log(listItem);
                    localStorage.setItem("taskList", JSON.stringify(listOfTasks));
                }
                break;
            }
            case "saturday": {
                if (document.getElementById("saturdayTasks")) {
                    elementToAppend = document.getElementById("saturdayTasks");
                    let currentItems = elementToAppend.innerHTML;
                    taskNumber++;
                    let newItems = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`;
                    currentItems = currentItems + newItems;
                    console.log(currentItems);
                    elementToAppend.innerHTML = currentItems;
                    let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`);
                    console.log(listItem);
                    localStorage.setItem("taskList", JSON.stringify(listOfTasks));
                }
                break;
            }
        }
        return 0;
    }
    return {
        setters: [
            function (task_1_1) {
                task_1 = task_1_1;
            }
        ],
        execute: function () {
            listOfTasks = JSON.parse(localStorage.getItem("taskList") || "[]");
            taskNumber = 0;
            i = 0;
            (_a = document.getElementById("addButton")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addTask);
            (_b = document.getElementById("resetButton")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', deleteTasks);
            (_c = document.getElementById("showWeekends")) === null || _c === void 0 ? void 0 : _c.addEventListener('click', showWeekends);
            (_d = document.getElementById("businessDays")) === null || _d === void 0 ? void 0 : _d.addEventListener('click', showBusiness);
            generateTable();
        }
    };
});
