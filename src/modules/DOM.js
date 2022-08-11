// Modules
import controller from '../index.js';
import storage from './storage.js';

// Media
import circle from '../../dist/media/circle.png';
import star from '../../dist/media/star.png';
import edit from '../../dist/media/edit.png';
import remove from '../../dist/media/remove.png';
import fullstar from '../../dist/media/fullstar.png';

const DOM = (() => {
    const renderPage = () => {

    };
    const renderProjectForm = () => {

    };
    const addProject = () => {

    };
    const removeProject = () => {

    };
    const renderTaskForm = () => {
        let main = document.querySelector('main');
        
        let overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');

        let form = document.createElement('form');

        let header = document.createElement('div');
        header.classList.add('header');

        let header2 = document.createElement('h2');
        header2.textContent = 'Create a New Task';
        header.appendChild(header2);

        let image1 = new Image();
        image1.src = remove;
        image1.addEventListener('click', deleteForm);
        header.appendChild(image1);

        form.appendChild(header);

        let title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.setAttribute('id', 'title');
        title.setAttribute('placeholder', 'title');
        title.setAttribute('name', 'title');
        title.setAttribute('required', '');
        form.appendChild(title);

        let description = document.createElement('textarea');
        description.setAttribute('id', 'description');
        description.setAttribute('placeholder', 'description');
        description.setAttribute('name', 'description');
        description.setAttribute('rows', '10');
        description.setAttribute('cols', '40');
        description.setAttribute('required', '');
        form.appendChild(description);

        let date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.setAttribute('id', 'date');
        date.setAttribute('name', 'date');
        date.setAttribute('required', '');
        form.appendChild(date);

        let footer = document.createElement('div');
        footer.classList.add('footer');

        let image2 = new Image();
        image2.src = star;
        image2.addEventListener('click', togglePriority);
        footer.appendChild(image2);

        let submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'add-task');
        submit.textContent = 'Add Task';
        footer.appendChild(submit);

        form.appendChild(footer);

        overlay.appendChild(form);

        main.prepend(overlay);
    };
    const deleteForm = () => {
        let overlay = document.querySelector('#overlay');
        overlay.remove();
    };
    const addTask = () => {
        let main = document.querySelector('main');
        let header = document.querySelector('main > h2');

        let task = document.createElement('div');
        task.setAttribute('id', 'task');
        storage.inbox[storage.inbox.length - 1].DOMlink = task;
        
        let left = document.createElement('div');
        left.classList.add('left');
        
        let image1 = new Image();
        image1.src = circle;
        image1.addEventListener('click', controller.removeTask);
        left.appendChild(image1);
        
        let title = document.createElement('h3');
        title.textContent = storage.inbox[storage.inbox.length - 1].title;
        left.appendChild(title);

        task.appendChild(left);

        let right = document.createElement('div');
        right.classList.add('right');

        let button = document.createElement('button');
        button.setAttribute('id', 'info');
        button.textContent = 'Info';
        right.appendChild(button);

        let image2 = new Image();
        if (storage.inbox[storage.inbox.length - 1].priorityStatus === false) {
            image2.src = star;
        } else {
            image2.src = fullstar;
        }
        image2.addEventListener('click', controller.togglePriority);
        right.appendChild(image2);

        let image3 = new Image();
        image3.src = edit;
        right.appendChild(image3);

        let image4 = new Image();
        image4.src = remove;
        image4.addEventListener('click', controller.removeTask);
        right.appendChild(image4);

        task.appendChild(right);

        header.parentNode.insertBefore(task, header.nextSibling);
    };

    const editTask = () => {

    };
    const removeTask = (event) => {
        let removal = event.target.parentNode.parentNode;
        removal.remove();
    };

    const togglePriority = (event) => {
        let oldElement = event.target;
        let newElement = new Image();
        if (oldElement.src === star) {
            newElement.src = fullstar;
        } else {
            newElement.src = star;
        }
        newElement.addEventListener('click', controller.togglePriority);
        event.target.parentNode.replaceChild(newElement, oldElement);
    };

    return {renderPage, renderTaskForm, renderProjectForm, deleteForm, addProject, removeProject, addTask, editTask, removeTask, togglePriority};
})();

export default DOM;