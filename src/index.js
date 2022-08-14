import DOM from './modules/DOM.js';
import storage from './modules/storage.js'
import application from './modules/application.js';

const controller = (() => {
    let activePage = 'inbox';
    let activeTask;

    const renderTodayPage = (event) => {
        application.createTodayArray();
        controller.activePage = 'today';
        DOM.removePage();
        DOM.renderPage(event);
    }
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
        if (application.validateProjectName() === false) {
            alert('Name Already Taken By Another Folder. Please Use Another Name.');
            return;
        } 
        application.addProject();
        DOM.addProject();
        DOM.deleteForm();
    };
    const removeProject = (event) => {
        let projectArray;
        let container;
        if (event.target.classList.contains('.trash-container')) {
            container = event.target.previousSibling;
        } else {
            container = event.target.parentNode.previousSibling;
        }
        projectArray = container.children[1].textContent;
        container = container.parentNode;
        application.removeProject(projectArray);
        DOM.removeProject(container);
        if (controller.activePage === projectArray) {
            DOM.removePage();
        }
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

    const todayBtn = document.querySelector('#today');
    todayBtn.addEventListener('click', renderTodayPage);

    const addProjectBtn = document.querySelector('#add-project-form');
    addProjectBtn.addEventListener('click', DOM.renderProjectForm);

    document.addEventListener('submit', checkFormPurpose);

    return {activePage, activeTask, changePage, removeProject, linkTask, removeTask, togglePriority};
})();

DOM.renderPage();

export default controller;