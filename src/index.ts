import { TaskObject, TaskInterface } from "./task";

let listOfTasks:TaskInterface[] = JSON.parse(localStorage.getItem("taskList") || "[]");

let taskNumber:number = 0;
let i:number = 0;

function addTask(){
    if(document.getElementById("taskName") && document.getElementById("taskDay")){
        let taskName:string = (document.getElementById("taskName") as HTMLFormElement).value
        let taskDay:string = (document.getElementById("taskDay") as HTMLFormElement).value
        let newTask:TaskInterface = new TaskObject(taskName, taskDay)
        listOfTasks.push(newTask)
        displayNewTask(newTask, i);
        i++
    }
}

document.getElementById("addButton")?.addEventListener('click', addTask);
document.getElementById("resetButton")?.addEventListener('click', deleteTasks);
document.getElementById("showWeekends")?.addEventListener('click', showWeekends);
document.getElementById("businessDays")?.addEventListener('click', showBusiness);
generateTable();

function generateTable(){
    listOfTasks = JSON.parse(localStorage.getItem("taskList") || "[]")
    listOfTasks.forEach(task => {
        displayNewTask(task, i);
        i++
    })

}

function showWeekends(){
    const sun = <HTMLElement> document.getElementsByClassName('weekend')[0];
    sun.style.display = 'table-cell';
    const sunTasks = <HTMLElement> document.getElementsByClassName('weekend')[1];
    sunTasks.style.display = 'table-cell';
    const sat = <HTMLElement> document.getElementsByClassName('weekend')[2];
    sat.style.display = 'table-cell';
    const satTasks = <HTMLElement> document.getElementsByClassName('weekend')[3];
    satTasks.style.display = 'table-cell';
    
}

function showBusiness(){
    const sun = <HTMLElement> document.getElementsByClassName('weekend')[0];
    sun.style.display = 'none';
    const sunTasks = <HTMLElement> document.getElementsByClassName('weekend')[1];
    sunTasks.style.display = 'none';
    const sat = <HTMLElement> document.getElementsByClassName('weekend')[2];
    sat.style.display = 'none';
    const satTasks = <HTMLElement> document.getElementsByClassName('weekend')[3];
    satTasks.style.display = 'none';
}





function deleteTasks(){
    let elementToAppend:HTMLOListElement;
    elementToAppend = <HTMLOListElement>document.getElementById("sundayTasks")
    elementToAppend.innerHTML = ""
    elementToAppend = <HTMLOListElement>document.getElementById("mondayTasks")
    elementToAppend.innerHTML = ""
    elementToAppend = <HTMLOListElement>document.getElementById("tuesdayTasks")
    elementToAppend.innerHTML = ""
    elementToAppend = <HTMLOListElement>document.getElementById("wednesdayTasks")
    elementToAppend.innerHTML = ""
    elementToAppend = <HTMLOListElement>document.getElementById("thursdayTasks")
    elementToAppend.innerHTML = ""
    elementToAppend = <HTMLOListElement>document.getElementById("fridayTasks")
    elementToAppend.innerHTML = ""
    elementToAppend = <HTMLOListElement>document.getElementById("saturdayTasks")
    elementToAppend.innerHTML = ""
    listOfTasks = [];
    taskNumber = 0;
    i = 0
    localStorage.setItem("taskList", JSON.stringify(listOfTasks))
}

function displayNewTask(newTask:TaskInterface, i:number):number {
    
    let elementToAppend:HTMLOListElement;
    switch(newTask.day){
        case "sunday": {
            if(document.getElementById("sundayTasks")){
                elementToAppend = <HTMLOListElement>document.getElementById("sundayTasks")
                let currentItems:string = elementToAppend.innerHTML
                taskNumber++;
                let newItems:string = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`
                currentItems = currentItems + newItems;
                console.log(currentItems)
                elementToAppend.innerHTML = currentItems
                let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`)
                console.log(listItem)
                localStorage.setItem("taskList", JSON.stringify(listOfTasks))
            }
            break;
        }
        case "monday": {
            if(document.getElementById("mondayTasks")){
                elementToAppend = <HTMLOListElement>document.getElementById("mondayTasks")
                let currentItems:string = elementToAppend.innerHTML
                taskNumber++;
                let newItems:string = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`        
                currentItems = currentItems + newItems;

                console.log(currentItems)
                elementToAppend.innerHTML = currentItems
                let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`)
                console.log(listItem)
                localStorage.setItem("taskList", JSON.stringify(listOfTasks))
            }
            break;
        }
        case "tuesday": {
            if(document.getElementById("tuesdayTasks")){
                elementToAppend = <HTMLOListElement>document.getElementById("tuesdayTasks")
                let currentItems:string = elementToAppend.innerHTML
                taskNumber++;
                let newItems:string = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`
                currentItems = currentItems + newItems;
                console.log(currentItems)
                elementToAppend.innerHTML = currentItems
                let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`)
                console.log(listItem)
                localStorage.setItem("taskList", JSON.stringify(listOfTasks))
            }
            break;
        }
        case "wednesday": {
            if(document.getElementById("wednesdayTasks")){
                elementToAppend = <HTMLOListElement>document.getElementById("wednesdayTasks")
                let currentItems:string = elementToAppend.innerHTML
                taskNumber++;
                let newItems:string = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`
                currentItems = currentItems + newItems;
                console.log(currentItems)
                elementToAppend.innerHTML = currentItems
                let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`)
                console.log(listItem)
                localStorage.setItem("taskList", JSON.stringify(listOfTasks))
            }
            break;
        }
        case "thursday": {
            if(document.getElementById("thursdayTasks")){
                elementToAppend = <HTMLOListElement>document.getElementById("thursdayTasks")
                let currentItems:string = elementToAppend.innerHTML
                taskNumber++;
                let newItems:string = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`
                currentItems = currentItems + newItems;
                console.log(currentItems)
                elementToAppend.innerHTML = currentItems
                let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`)
                console.log(listItem)
                localStorage.setItem("taskList", JSON.stringify(listOfTasks))
            }
            break;
        }
        case "friday": {
            if(document.getElementById("fridayTasks")){
                elementToAppend = <HTMLOListElement>document.getElementById("fridayTasks")
                let currentItems:string = elementToAppend.innerHTML
                taskNumber++;
                let newItems:string = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`
                currentItems = currentItems + newItems;
                console.log(currentItems)
                elementToAppend.innerHTML = currentItems
                let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`)
                console.log(listItem)
                localStorage.setItem("taskList", JSON.stringify(listOfTasks))
            }
            break;
        }
        case "saturday": {
            if(document.getElementById("saturdayTasks")){
                elementToAppend = <HTMLOListElement>document.getElementById("saturdayTasks")
                let currentItems:string = elementToAppend.innerHTML
                taskNumber++;
                let newItems:string = `<li class="" id="${newTask.task}${taskNumber}Task">${newTask.task}</li>`
                currentItems = currentItems + newItems;
                console.log(currentItems)
                elementToAppend.innerHTML = currentItems
                let listItem = document.getElementById(`${newTask.task}${taskNumber}Task`)
                console.log(listItem)
                localStorage.setItem("taskList", JSON.stringify(listOfTasks))
            }
            break;
        }
    }
    
    return 0;
}
