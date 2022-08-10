import controller from '../index.js';

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
    const addTask = () => {
        let main = document.querySelector('main');
        let header = document.querySelector('main > h2');

        let task = document.createElement('div');
        task.setAttribute('id', 'task');
        
        let left = document.createElement('div');
        left.classList.add('left');
        
        let image1 = new Image();
        image1.src = circle;
        image1.addEventListener('click', controller.removeTask);
        left.appendChild(image1);
        
        let title = document.createElement('h3');
        title.textContent = 'Title';
        left.appendChild(title);

        task.appendChild(left);

        let right = document.createElement('div');
        right.classList.add('right');

        let button = document.createElement('button');
        button.setAttribute('id', 'info');
        button.textContent = 'Info';
        right.appendChild(button);

        let image2 = new Image();
        image2.src = star;
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
            console.log('yah');
            newElement.src = fullstar;
        } else {
            newElement.src = star;
        }
        newElement.addEventListener('click', controller.togglePriority);
        event.target.parentNode.replaceChild(newElement, oldElement);
    };

    return {renderPage, renderProjectForm, addProject, removeProject, addTask, editTask, removeTask, togglePriority};
})();

export default DOM;