import inquirer from "inquirer";

async function EnterNumber(): Promise<number> {
    const answer = await inquirer.prompt({
        type: 'number',
        name: 'gNum',
        message: 'Make a guess?',
        validate(input: number) {
            if (!isNaN(input)) {
                return true;
            }
            throw Error('Please provide numbers as operands!');
        }
    });

    return answer.gNum;

}


let targetNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;
let enteredNumber: number;
let numberFound = false;
//console.log(`Number to be guessed: ${targetNumber}`);
console.log('Guess a number from 1 to 100. Each wrong guess will deduct 1 score.');

do {
    enteredNumber = await EnterNumber();
    //console.log(`You have entered: ${enteredNumber}`);

    if (enteredNumber === targetNumber) {
        console.log(`Hurray! You guessed it right!`);
        console.log(`Your Score is: ${score}`);
        numberFound = true;
    }
    else if (enteredNumber > targetNumber) {
        console.log(`Target number is less than your input number`);
        score--;
    }
    else if (enteredNumber < targetNumber) {
        console.log(`Target number is greater than your input number`);
        score--;
    }

} while (!numberFound)

