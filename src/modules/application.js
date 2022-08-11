import controller from '../index.js';
import storage from './storage.js';
import taskFactory from './task.js';

// Media Imports
import star from '../../dist/media/star.png';
import fullstar from '../../dist/media/fullstar.png';

const application = (() => {
    const addProject = () => {

    };
    const addLocation = () => {

    };
    const removeProject = () => {

    };
    const addTask = () => {
        let title = document.querySelector('#title').value;
        let description = document.querySelector('#description').value;
        let date = document.querySelector('#date').value;
        let isPriority = document.querySelector('.footer > img');
        if (isPriority.src === star) {
            isPriority = false;
        } else {
            isPriority = true;
        }
        storage.inbox[storage.inbox.length] = taskFactory(title, description, date, isPriority);
    };
    const editTask = () => {

    };
    const removeTask = (event) => {
        for (let i = 0; i < storage.inbox.length; ++i) {
            if (storage.inbox[i].DOMlink === event.target.parentNode.parentNode) {
                storage.inbox.splice(i, 1);
            }
            console.log(storage.inbox);
        }
    };
    const togglePriority = (event) => {
        for (let i = 0; i < storage.inbox.length; ++i) {
            if (storage.inbox[i].DOMlink === event.target.parentNode.parentNode) {
                (storage.inbox[i].priorityStatus) ? storage.inbox[i].priorityStatus = false : storage.inbox[i].priorityStatus = true;
            }
        }
    };

    return {addProject, addLocation, removeProject, addTask, editTask, removeTask, togglePriority};
})();

export default application;