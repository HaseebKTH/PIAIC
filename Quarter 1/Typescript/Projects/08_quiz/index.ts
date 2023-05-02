import inquirer from 'inquirer';
import fs from 'fs';

let askedQuesCount: number;
let correctAnsCount: number;
const { questions } = JSON.parse(fs.readFileSync('questions.json', 'utf8'));
const TOTALQUESTIONS: number = 10;
const TOTALJSONQUES: number = questions.length;
let selectedResult: boolean;

Main();

async function Main() {
  console.clear();
  console.log("Welcome to Panaverse Quiz Competetion!");
  Startup();
  for (; askedQuesCount < TOTALQUESTIONS; askedQuesCount++) {
    console.log(`Question # ${askedQuesCount+1}`);
    selectedResult = await AskQuestion();
    if (selectedResult) {
      correctAnsCount++;
      console.log(`Hurray! Your answer is correct!\n`);
    }
    else {
      console.log(`Oho! Your answer is incorrect!\n`);
    }
  }
  console.log(`\nYou got ${correctAnsCount} Correct out of ${TOTALQUESTIONS} Questions!\n Correct Percentage: ${(correctAnsCount / TOTALQUESTIONS * 100).toFixed(2)}`);

}

function Startup() {
  askedQuesCount = 0;
  correctAnsCount = 0;

}

async function AskQuestion() {
  const randQuesNo = Math.floor(Math.random() * TOTALJSONQUES);
  const { answer } = await inquirer.prompt([
    {
      type: 'list',
      name: 'answer',
      message: questions[randQuesNo]["question"],
      choices: questions[randQuesNo]["choices"]
    }])

  console.log(`You have selected ${answer}`);
  console.log(`Correct Answer: ${questions[randQuesNo]["answer"]}`);
  return (answer == questions[randQuesNo]["answer"]);
}

