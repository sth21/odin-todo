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
    const removeTask = () => {
        application.removeTask();
        DOM.removeTask();
    };
    const togglePriority = () => {
        application.togglePriority();
        DOM.togglePriority();
    };

    // Event Listeners
    const addTaskBtn = document.querySelector('#add-task');
    addTaskBtn.addEventListener('click', addTask);

    return {addProject, removeProject, addTaskLocation, editTask, removeTask, togglePriority};
})();

export default controller;