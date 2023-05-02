import inquirer from "inquirer";

const vowelsArray:string[] = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

const questions = [
  {
    type: 'input',
    name: 'letter',
    message: 'Enter a letter to find if it is a vowel?',
    validate(input: string):boolean {
        const regex = /^[A-Za-z]$/;
        if (regex.test(input)) {
          return true;
        }
        throw Error('Please provide a valid alphabet!');
      }
  }];

async function VowelPrompt() {
  const answers = await inquirer.prompt(questions);
  if(vowelsArray.includes(answers.letter)) {
    console.log(`Entered letter ${answers.letter} is a vowel`);
  }
  else {
    console.log(`Entered letter ${answers.letter} is not a vowel`);
  }
}

async function runProgram() {
  let loopagain = true;
  console.log("Welcome to Vowel finding App");
  do {
    await VowelPrompt();
    const answer = await inquirer.prompt({
      type: 'confirm',
      name: 'again',
      message: 'Do you want to perform another operation?'
    });
    if (answer.again) {
      loopagain = true;
    }
    else {
      loopagain = false;
    }
  } while (loopagain);
  console.log('Exiting Vowel finding app');
}

runProgram();
