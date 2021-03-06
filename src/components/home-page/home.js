import ko from 'knockout';
import homeTemplate from 'text!./home.html';

/**
 * View Model for home screen, handle TODO application.
 * 
 * @class HomeViewModel
 */
class HomeViewModel {
    
    /**
     * Creates an instance of HomeViewModel.
     * 
     * @param {any} route
     */
    constructor(route) {
        var self = this;

        this.tasks = ko.observableArray([]);
        this.newTaskText = ko.observable();
        this.incompleteTasks = ko.computed(function() {
            return ko.utils.arrayFilter(self.tasks(), function(task) { 
                return !task.isDone() 
            });
        });
        this.isChillTime = ko.pureComputed(function() {
            var noOfRemaining = this.incompleteTasks();
            return noOfRemaining < 1;
        }, this);
        
        debugger;
    }

    /**
     * Add new Task, title comes from this.newTaskText
     * @public
     */
    addTask() {
        var task = new Task({
            title: this.newTaskText(),
            isDone: false
        });
        this.tasks.push(task);
        this.newTaskText("");
    }
    
    /**
     * Remove existing task
     * @public
     * @param {any} task
     */
    removeTask(task) {
        this.tasks.remove(task);
    }

    /**
     * Toggle task.isDone 
     * @public
     * @param {any} task
     */
    toggleTaskState(task) {
        var isDone = task.isDone();
        task.isDone(!isDone);
    }
}

/**
 * Represent a task 
 * 
 * @class Task
 * @private
 */
class Task {
    constructor(params) {
        this.title = ko.observable(params.title);
        this.isDone = ko.observable(params.isDone);

        this.cssClasses = ko.pureComputed(function() {
            var allStyles = "list-group-item";
            if(this.isDone()) {
                allStyles += " list-group-item-success";
            }
            allStyles += " clearfix";
            return allStyles;
        }, this);
    }
}

export default { viewModel: HomeViewModel, template: homeTemplate };