import DOM from './modules/DOM.js';
import storage from './modules/storage.js'
import application from './modules/application.js';
import taskFactory from './modules/task.js';

const controller = (() => {
    let activePage = 'inbox';
    let activeTask;

    const changePage = (event) => {
        if (event.target.nodeName === 'P') {
            controller.activePage = event.target.textContent;
        } else if (event.target.nodeName === 'IMG') {
            controller.activePage = event.target.nextSibling.textContent;
        } else {
            controller.activePage = event.target.children[1].textContent;
        }
        DOM.removePage();
        DOM.renderPage(event);
    };
    const addProject = (event) => {
        event.preventDefault();
        application.addProject();
        DOM.addProject();
        DOM.deleteForm();
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
    const checkFormPurpose = (event) => {
        let button = document.querySelector('form button');
        if (button.getAttribute('id') === 'add-task') {
            addTask(event);
        } else if (button.getAttribute('id') === 'edit-task') {
            editTask(event);
        } else {
            addProject(event);
        }
    } 
    const linkTask = (event) => {
        for (let i = 0; i < storage[`${controller.activePage}`].length; ++i) {
            if (storage[`${controller.activePage}`][i].DOMlink === event.target.parentNode.parentNode) {
                return storage[`${controller.activePage}`][i];
            }
        }
    };

    // Event Listeners
    const inboxBtn = document.querySelector('#inbox');
    inboxBtn.addEventListener('click', changePage);

    const addProjectBtn = document.querySelector('#add-project-form');
    addProjectBtn.addEventListener('click', DOM.renderProjectForm);

    document.addEventListener('submit', checkFormPurpose);

    return {activePage, activeTask, changePage, addProject, removeProject, checkFormPurpose, linkTask, editTask, removeTask, togglePriority};
})();

DOM.renderPage();

export default controller;