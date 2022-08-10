import DOM from './modules/DOM.js';
import storage from './modules/storage.js'
import application from './modules/application.js';
import taskFactory from './modules/task.js';

const controller = (() => {
    const addProject = () => {

    };
    const removeProject = () => {

    };
    const addTask = () => {
        application.addTask();
        DOM.addTask();
    };
    const addTaskLocation = () => {

    };
    const editTask = () => {

    };
    const removeTask = (event) => {
        application.removeTask();
        DOM.removeTask(event);
    };
    const togglePriority = (event) => {
        application.togglePriority();
        DOM.togglePriority(event);
    };

    // Event Listeners
    const addTaskBtn = document.querySelector('#add-task-form');
    addTaskBtn.addEventListener('click', DOM.renderTaskForm);

    return {addProject, removeProject, addTaskLocation, editTask, removeTask, togglePriority};
})();

export default controller;