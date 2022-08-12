import DOM from './modules/DOM.js';
import storage from './modules/storage.js'
import application from './modules/application.js';
import taskFactory from './modules/task.js';

const controller = (() => {
    let activeTask;
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
    const editTask = (event) => {
        event.preventDefault();
        application.editTask();
        DOM.editTask();
        DOM.deleteForm(); 
    };
    const removeTask = (event) => {
        application.removeTask(event);
        DOM.removeTask(event);
    };
    const togglePriority = (event) => {
        application.togglePriority(event);
        DOM.togglePriority(event);
    };
    const isEditOrAdd = (event) => {
        let button = document.querySelector('form button');
        if (button.getAttribute('id') === 'add-task') {
            addTask(event);
        } else {
            editTask(event);
        }
    } 
    const linkTask = (event) => {
        for (let i = 0; i < storage.inbox.length; ++i) {
            if (storage.inbox[i].DOMlink === event.target.parentNode.parentNode) {
                return storage.inbox[i];
            }
        }
    };

    // Event Listeners
    const addTaskBtn = document.querySelector('#add-task-form');
    addTaskBtn.addEventListener('click', DOM.renderTaskForm);

    document.addEventListener('submit', isEditOrAdd);

    return {activeTask, addProject, removeProject, linkTask, editTask, removeTask, togglePriority};
})();

export default controller;