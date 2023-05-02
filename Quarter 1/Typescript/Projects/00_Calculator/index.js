import inquirer from "inquirer";
const questions = [
    {
        type: 'list',
        name: 'operation',
        message: 'Which operation would you like to perform?',
        choices: ['+', '-', '*', '/', '%']
    },
    {
        type: 'number',
        name: 'firstOperand',
        message: 'Enter First Operand?',
        validate(input) {
            if (!isNaN(input)) {
                return true;
            }
            throw Error('Please provide numbers as operands!');
        }
    },
    {
        type: 'number',
        name: 'secondOperand',
        message: 'Enter Second Operand?',
        validate(input) {
            if (!isNaN(input)) {
                return true;
            }
            throw Error('Please provide numbers as operands!');
        }
    }
];
async function OperationPrompt() {
    const answers = await inquirer.prompt(questions);
    if (answers.operation === '+') {
        console.log(answers.firstOperand + answers.secondOperand);
    }
    else if (answers.operation === '-') {
        console.log(answers.firstOperand - answers.secondOperand);
    }
    else if (answers.operation === '*') {
        console.log(answers.firstOperand * answers.secondOperand);
    }
    else if (answers.operation === '/') {
        console.log(answers.firstOperand / answers.secondOperand);
    }
    else if (answers.operation === '%') {
        console.log(answers.firstOperand % answers.secondOperand);
    }
}
async function RepeatOperation() {
    const answer = await inquirer.prompt({
        type: 'confirm',
        name: 'again',
        message: 'Do you want to perform another operation?'
    });
    return answer.again;
}
let loopagain = true;
console.log("Welcome to CLI Calculator App");
do {
    await OperationPrompt();
    loopagain = await RepeatOperation();
} while (loopagain);
console.log('Exiting calculator app');
