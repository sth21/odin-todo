import DOM from './modules/DOM.js';
import storage from './modules/storage.js'
import application from './modules/application.js';
import taskFactory from './modules/task.js';

const controller = (() => {
    const addProject = () => {

    };
    const removeProject = () => {

    };
    const addTask = (event) => {
        event.preventDefault();
        application.addTask();
        DOM.addTask();
        DOM.deleteForm();
    };
    const findTaskLocation = () => {

    };
    const editTask = () => {

    };
    const removeTask = (event) => {
        application.removeTask(event);
        DOM.removeTask(event);
    };
    const togglePriority = (event) => {
        application.togglePriority(event);
        DOM.togglePriority(event);
    };

    // Event Listeners
    const addTaskBtn = document.querySelector('#add-task-form');
    addTaskBtn.addEventListener('click', DOM.renderTaskForm);

    document.addEventListener('submit', addTask);

    return {addProject, removeProject, findTaskLocation, editTask, removeTask, togglePriority};
})();

export default controller;