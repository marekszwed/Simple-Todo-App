let number = 0;
let todoInput;
let newTask;
let allTasks;
let todoUlElement;
let addBtn;
let clearAllBtn;
let todoPanel;
let panelEditInput
let closePanelBtn;
let changeTodoBtn;
let todoToEdit
let newTodoEdit

const main = () => {
	DomElements();
	DomEvents();
};

const DomElements = () => {
	addBtn = document.querySelector('.add');
	clearAllBtn = document.querySelector('.clear');
	todoInput = document.querySelector('input');
	todoUlElement = document.querySelector('ul');
	todoPanel = document.querySelector('.todo-panel');
	panelEditInput = document.querySelector('.input-task-panel')
	closePanelBtn = document.querySelector('.close-panel');
	changeTodoBtn = document.querySelector('.change-panel');
    
	allTasks = document.querySelectorAll('li');
};

const DomEvents = () => {
	addBtn.addEventListener('click', addNewTask);
	clearAllBtn.addEventListener('click', deleteAllTasks);
	todoUlElement.addEventListener('click', checkClick);
	closePanelBtn.addEventListener('click', closeTodoPanel);
	changeTodoBtn.addEventListener('click', changeTask)
};

const addNewTask = () => {
	if (todoInput.value !== '') {
		number++;
		newTask = document.createElement('li');
		newTask.innerHTML = todoInput.value;
		newTask.setAttribute('id', `item${number}`);

		todoUlElement.appendChild(newTask);
		console.log(newTask.getAttribute('id'));
		todoInput.value = ''
		addToolsBtnPanel();
	} else {
		console.error('Empty input field');
	}
};

const addToolsBtnPanel = () => {
	const toolWrapper = document.createElement('div');
	toolWrapper.classList.add('btn-item');
	newTask.appendChild(toolWrapper);

	const doneBtn = document.createElement('button');
	doneBtn.classList.add('done', 'tool');
	doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
	toolWrapper.appendChild(doneBtn);

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit', 'tool');
	editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
	toolWrapper.appendChild(editBtn);

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete', 'tool');
	deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
	toolWrapper.appendChild(deleteBtn);
};

const checkClick = (e) => {
	const UlElement = e.target;

	if (UlElement.classList.contains('done')) {
		UlElement.classList.toggle('.completed-line');
	} else if (UlElement.classList.contains('edit')) {
		editTask(e);
	} else if (UlElement.classList.contains('delete')) {
		removeTheTask(e);
	}
};

const removeTheTask = (e) => {
	const theLiItem = e.target.closest('li');
	theLiItem.remove();
	number--;
};

const completeTask = (e) => {};
const editTask = (e) => {
    todoToEdit = e.target.closest('li')
	panelEditInput.value = todoToEdit.firstChild.textContent
	console.log(newTodoEdit);
    
	todoPanel.classList.add('active');
};

const changeTask = () => {
	todoToEdit.firstChild.textContent = panelEditInput.value
	todoPanel.classList.remove('active')
}

const closeTodoPanel = () => {
	todoPanel.style.display = 'none';
};

const deleteAllTasks = () => {
	console.log(allTasks);
};

document.addEventListener('DOMContentLoaded', main);
