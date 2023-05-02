import inquirer from 'inquirer';
const todoList = [];
async function addTask() {
    console.clear();
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter a new task:',
        validate(input) {
            const regex = /\S/;
            if (regex.test(input)) {
                return true;
            }
            throw Error('Please provide a valid task!');
        },
    });
    todoList.push({ task: answer.task, completed: false });
    console.log(`Added task "${answer.task}" to the list.`);
    showMenu();
}
async function completeTask() {
    console.clear();
    const answer = await inquirer.prompt({
        type: 'checkbox',
        name: 'completedTasks',
        message: 'Select tasks to mark as complete:',
        choices: todoList.map((todoItem, index) => {
            return { name: todoItem.task, checked: todoItem.completed, value: index };
        })
    });
    todoList.forEach((obj, index) => {
        obj.completed = answer.completedTasks.includes(index); // set the checked property to true if the index is in array2, else false
    });
    showMenu();
}
function showTasks() {
    console.clear();
    console.log('Todo List:');
    todoList.forEach((todoitem) => {
        const status = todoitem.completed ? '✅' : '❌';
        console.log(`${todoitem.task} ${status}`);
    });
    showMenu();
}
async function showMenu() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Select an option:',
        choices: ['Add a new task', 'Complete a task', 'Show tasks', 'Exit'],
    });
    switch (answer.option) {
        case 'Add a new task':
            addTask();
            break;
        case 'Complete a task':
            completeTask();
            break;
        case 'Show tasks':
            showTasks();
            break;
        case 'Exit':
            console.log('Goodbye!');
            break;
        default:
            showMenu();
    }
}
console.clear();
console.log('Welcome to your Todo List!');
showMenu();
