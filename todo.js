let number = 0;
let todoInput;
let newTask;
let oldTask;
let allTasks;
let todoUlElement;
let addBtn;
let clearAllBtn;
let listOfThingsTodo;
let btnToolsList;
let todoPanel;
let closePanelBtn;
let changeTodoBtn;
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
	btnToolsList = document.querySelectorAll('.tool');
	listOfThingsTodo = document.querySelector('.listOfThings');
	todoPanel = document.querySelector('.todo-panel');

	closePanelBtn = document.querySelector('.close-panel');
	changeTodoBtn = document.querySelector('.change-panel');
    
	allTasks = document.querySelectorAll('li');
};

const DomEvents = () => {
	addBtn.addEventListener('click', addNewTask);
	clearAllBtn.addEventListener('click', deleteAllTasks);
	todoUlElement.addEventListener('click', checkClick);
	closePanelBtn.addEventListener('click', closeTodoPanel);
};

const addNewTask = () => {
	if (todoInput.value !== '') {
		number++;
		newTask = document.createElement('li');
		newTask.innerHTML = todoInput.value;
		newTask.setAttribute('id', `item${number}`);

		todoUlElement.appendChild(newTask);
		console.log(newTask.getAttribute('id'));

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
    newTodoEdit = todoPanel.value
    
	todoPanel.style.display = 'flex';
};

const closeTodoPanel = () => {
	todoPanel.style.display = 'none';
};

const deleteAllTasks = () => {
	console.log(typeof allTasks);
};

document.addEventListener('DOMContentLoaded', main);
