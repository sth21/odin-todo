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
    const validateProjectName = () => {
        let name = document.querySelector('form input').value;
        let nameList = Object.keys(storage);
        for (let i = 0; i < nameList.length; ++i) {
            if (name === nameList[i]) {
                return false;
            }
        }
        return true;
    }
    const createTodayArray = () => {
        storage.today = [];
        // Obtain Current Date
        let date = new Date();
        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth() + 1;
        if (currentMonth < 10) {
            currentMonth = `0${currentMonth}`;
        }
        let currentDay = date.getDate();
        if (currentDay < 10) {
            currentDay = `0${currentDay}`;
        }
        const fullDate = `${currentYear}-${currentMonth}-${currentDay}`;

        // Obtain every Task made
        let propertiesList = Object.values(storage);
        let taskList = [];
        for (let i = 0; i < propertiesList.length; ++i) {
            taskList = taskList.concat(propertiesList[i]);
        } 

        // Filter for Tasks that equal Date
        let equalList = taskList.filter(task => task.date === fullDate);
        storage.today = equalList;
    };
    const removeProject = (arrayName) => {
        delete storage[`${arrayName}`];
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
        let task;
        let index;

        // Find relevant task
        for (let i = 0; i < page.length; ++i) {
            if (page[i].DOMlink === event.target.parentNode.parentNode) {
                task = page[i];
                index = i;
            }
        }

        // Remove associated task if removed while on 'today page'
        breakcond: if (page === storage.today) {
            let propertiesList = Object.values(storage);
            let propKeyList = Object.keys(storage);
            for (let k = 0; k < propertiesList.length; ++k) {
                if (propertiesList[k] === storage.today) {
                    continue;
                } else {
                    for (let m = 0; m < propertiesList[k].length; ++m) {
                        if (task === propertiesList[k][m]) {
                            storage[propKeyList[k]].splice(m, 1);
                            break breakcond;
                        }
                    }
                }
            }
        } 
        page.splice(index, 1);
    };
    const togglePriority = (event) => {
        let task = controller.linkTask(event);
        (task.priorityStatus) ? task.priorityStatus = false : task.priorityStatus = true;
    };

    return {addProject,validateProjectName, createTodayArray, removeProject, addTask, editTask, removeTask, togglePriority};
})();

export default application;