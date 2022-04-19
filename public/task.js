System.register([], function (exports_1, context_1) {
    "use strict";
    var TaskObject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TaskObject = class TaskObject {
                constructor(task, day) {
                    this.day = day;
                    this.task = task;
                }
            };
            exports_1("TaskObject", TaskObject);
            exports_1("default", TaskObject);
        }
    };
});
