import inquirer from 'inquirer';
import fs from 'fs';

let userName: string;
let balance: number = 0;

async function authenticateUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'userId',
      message: 'Enter user ID:',
    },
    {
      type: 'password',
      name: 'userPin',
      message: 'Enter user PIN:',
      validate(input: string): boolean {
        const regex = /^\d{4}$/;
        if (regex.test(input)) {
          return true;
        }
        throw Error('Please provide a valid 4 digits PIn!');
      },
      mask: '*',
    },
  ])

  const userId: string = answers.userId;
  const userPin: string = answers.userPin;

  // Load user data from JSON file
  const savedUser = JSON.parse(fs.readFileSync('users.json', 'utf8'));

  return [(savedUser["name"].toUpperCase() === userId.toUpperCase() && savedUser["pin"] === userPin), userId.toUpperCase()];

}

async function mainMenu() {
  console.clear();
  console.log(`Welcome, ${userName} to the Main Menu!`);
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'operation',
    message: 'Please select a transaction to be performed:',
    choices: ['Balance Inquiry', 'Withdraw Cash', 'Change Pin', 'Exit']
  });
  if (answers.operation === 'Balance Inquiry') {
    balanceInquiry();
  }
  else if (answers.operation === 'Withdraw Cash') {
    console.log('Withdraw Cash');
    withdrawCash();
  }
  else if (answers.operation === 'Change Pin') {
    changePin();
  }
  else if (answers.operation === 'Exit') {
    console.log(`Thank You for using Panaverse ATM\n Please collect your ATM Card`);
  }
}

async function balanceInquiry() {
  const options = { style: 'decimal', minimumFractionDigits: 2 };
  const formattedNumber = balance.toLocaleString('en-US', options);
  console.clear();
  console.log(`${userName} your current Balance is Rs.${formattedNumber}`);
  console.log();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'operation',
    message: 'Please select an option:',
    choices: ['Go back to Main Menu', 'Exit']
  });
  if (answers.operation === 'Go back to Main Menu') {
    mainMenu()
  }
  else if (answers.operation === 'Exit') {
    console.log(`Thank You for using Panaverse ATM\n Please collect your ATM Card`);
  }
}

async function withdrawCash() {
  console.clear();
  console.log(`Withdraw Cash Menu`);
  console.log();
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'operation',
    message: 'Please select an amount to withdraw:',
    choices: ['2000', '5000', '10000', '25000', '50000', 'Any Other Amount']
  });
  if ((answers.operation === '2000') || (answers.operation ==='5000') || (answers.operation ==='10000') || (answers.operation ==='25000') || (answers.operation ==='50000')) {
    if(balance - Number(answers.operation)>0){
      balance = balance - Number(answers.operation);
      console.log(`Remaining Balance: ${balance}`);
      console.log(`Please take your cash!`);
    }
    else
    {
      console.log(`Insufficient Balance!`);
    }
  }
  else {
    console.clear();
    console.log(`Withdraw Cash Menu`);
    console.log();
    const answers2 = await inquirer.prompt({
      type: 'number',
      name: 'amnt',
      message: 'Enter Cash to Withdraw (In multiples of 500): ?',
      validate(input: number) {
        if (!isNaN(input)) {
          return true;
        }
        throw Error('Please provide valid amount!');
      }
    });
    if((answers2.amnt % 500 == 0) && (balance - Number(answers2.amnt) > 0) && (answers2.amnt <= 100000)){
      balance = balance - Number(answers2.amnt);
      console.log(`Remaining Balance: ${balance}`);
      console.log(`Please take your cash!`);
    }
    else if(answers2.amnt % 500 != 0){
      console.log(`Inserted Amount is not in multiple of 500`);
    }
    else if(answers2.amnt > 100000){
      console.log(`Inserted Amount is greater than daily limit of Rs. 100,000`);
    }
    else if (balance - Number(answers2.amnt) < 0){
      console.log(`Insufficient Balance!`);
    }
  }
  console.log(`Please collect your ATM card!`);
  console.log(`Thankyou for using Panaverse ATNM!`)
}

async function changePin() {
  console.clear();
  console.log(`Change Pin Menu`);
  console.log();
  const answers = await inquirer.prompt([
    {
      type: 'password',
      name: 'userPin',
      message: 'Enter new user PIN:',
      validate(input: string): boolean {
        const regex = /^\d{4}$/;
        if (regex.test(input)) {
          return true;
        }
        throw Error('Please provide a valid 4 digits PIn!');
      },
      mask: '*',
    },
    {
      type: 'password',
      name: 'userPinConfirm',
      message: 'Confirm new user PIN:',
      validate(input: string): boolean {
        const regex = /^\d{4}$/;
        if (regex.test(input)) {
          return true;
        }
        throw Error('Please provide a valid 4 digits PIn!');
      },
      mask: '*',
    }
  ]);
  if (answers.userPin === answers.userPinConfirm) {

    const userData = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    userData.pin = answers.userPin.toString();;
    fs.writeFileSync('users.json', JSON.stringify(userData));
    console.log(`Pin has been changed`);
  }
  else {
    console.log(`Pin Mismatch: Pin cannot be changed`);
  }
  console.log();
  const answers2 = await inquirer.prompt({
    type: 'list',
    name: 'operation',
    message: 'Please select an option:',
    choices: ['Go back to Main Menu', 'Exit']
  });
  if (answers2.operation === 'Go back to Main Menu') {
    mainMenu()
  }
  else if (answers2.operation === 'Exit') {
    console.log(`Thank You for using Panaverse ATM\n Please collect your ATM Card`);
  }
}



async function startUp() {
  console.clear();
  console.log("Welcome to Panaverse ATM Machine.\n Please Insert your ATM card...")
  let result = await authenticateUser();
  if (result[0] === true) {
    userName = result[1] as string;
    balance = Math.ceil(Math.random() * 1000000);
    mainMenu();
  }
  else {
    console.log(`Invalid user ID or pin. Please collect your ATM Card!`)
  }

}

startUp();