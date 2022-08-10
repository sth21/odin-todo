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
        console.log(date);
        let isPriority = document.querySelector('.footer > img');
        if (isPriority.src === star) {
            isPriority = false;
        } else {
            isPriority = true;
        }
        storage.inbox[storage.inbox.length] = taskFactory(title, description, date, isPriority);
        console.log(storage.inbox[storage.inbox.length - 1]);
    };
    const editTask = () => {

    };
    const removeTask = () => {

    };
    const togglePriority = () => {
        
    };

    return {addProject, addLocation, removeProject, addTask, editTask, removeTask, togglePriority};
})();

export default application;