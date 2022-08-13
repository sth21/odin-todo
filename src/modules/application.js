import controller from '../index.js';
import storage from './storage.js';
import taskFactory from './task.js';
import DOM from './DOM.js';

// Media Imports
import star from '../../dist/media/star.png';
import fullstar from '../../dist/media/fullstar.png';

const application = (() => {
    const addProject = () => {
        let projectName = document.querySelector('#project-name').value
        storage[`${projectName}`] = [];
    };
    const addLocation = () => {

    };
    const removeProject = () => {

    };
    const addTask = () => {
        let page = storage[`${controller.activePage}`];
        let title = document.querySelector('#title').value;
        let description = document.querySelector('#description').value;
        let date = document.querySelector('#date').value;
        let isPriority = document.querySelector('.footer > img');
        if (isPriority.src === star) {
            isPriority = false;
        } else {
            isPriority = true;
        }
        page[page.length] = taskFactory(title, description, date, isPriority);
    };
    const editTask = () => {
        controller.activeTask.title = document.querySelector('#title').value;
        controller.activeTask.description = document.querySelector('#description').value;
        controller.activeTask.date = document.querySelector('#date').value;
        let priorityStatus = document.querySelector('.footer > img');
        (priorityStatus.src === star) ? controller.activeTask.priorityStatus = false : controller.activeTask.priorityStatus = true;
    };
    const removeTask = (event) => {
        let page = storage[`${controller.activePage}`];
        for (let i = 0; i < page.length; ++i) {
            if (page[i].DOMlink === event.target.parentNode.parentNode) {
                page.splice(i, 1);
            }
        }
    };
    const togglePriority = (event) => {
        let task = controller.linkTask(event);
        (task.priorityStatus) ? task.priorityStatus = false : task.priorityStatus = true;
    };

    return {addProject, addLocation, removeProject, addTask, editTask, removeTask, togglePriority};
})();

export default application;