export interface TaskInterface {
    task:String;
    day:String;
} 

export class TaskObject implements TaskInterface{
    task: String;
    day: String;

    constructor(task:String, day:String){
        this.day = day
        this.task = task
    }
}

export default TaskObject