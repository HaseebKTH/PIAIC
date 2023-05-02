import inquirer from 'inquirer';

interface currency {
  name: string;
  code: string;
  USD_parity: number;
  index: number;
}

const currencyArr: currency[] = [
  { name: `US Dollars`, code: `USD`, USD_parity: 1, index: 0 },
  { name: `Pakistani Rupees`, code: `PKR`, USD_parity: 284.37, index: 1 },
  { name: `Euros`, code: `EUR`, USD_parity: 0.9057, index: 2 },
  { name: `Great Britian Pounds`, code: `GBP`, USD_parity: 0.8055, index: 3 },
  { name: `Canadian Dollars`, code: `CAD`, USD_parity: 1.3436, index: 4 },
  { name: `Australian Dollars`, code: `AUD`, USD_parity: 1.4812, index: 5 },
  { name: `Indian Rupees`, code: `INR`, USD_parity: 81.83, index: 6 },
  { name: `Swedish Koronas`, code: `SEK`, USD_parity: 10.33, index: 7 },
  { name: `Chinese Yuans`, code: `CNY`, USD_parity: 6.865, index: 8 },
  { name: `Turkish Liras`, code: `TRY`, USD_parity: 19.353, index: 9 },
  { name: `Emarati Dirhams`, code: `AED`, USD_parity: 3.6725, index: 10 },
  { name: `Saudi Arabian Riyals`, code: `SAR`, USD_parity: 3.75, index: 11 },
  { name: `Bangladeshi Takkas`, code: `BDT`, USD_parity: 106.46, index: 12 },
  { name: `Qatari Rials`, code: `QAR`, USD_parity: 3.64, index: 13 },
  { name: `Afghan Afghani`, code: `AFN`, USD_parity: 86.295, index: 14 },
];

async function RepeatOperation() {
  const answer = await inquirer.prompt({
    type: 'confirm',
    name: 'again',
    message: 'Do you want to perform another Currency conversion?'
  });

  if (answer.again) {
    console.clear();
    console.log('Welcome to Currency converter!');
    getinput()
  }
}

async function getinput() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'from',
      message: 'Select a currency (From):',
      choices: currencyArr.map((currency) => ({ name: currency.name + ` (` + currency.code + `)`, value: currency.index }))
    },
    {
      type: 'list',
      name: 'to',
      message: 'Select a currency (To):',
      choices: currencyArr.map((currency) => ({ name: currency.name + ` (` + currency.code + `)`, value: currency.index }))
    },
    {
      type: 'number',
      name: 'amount',
      message: 'Enter the amount:',
      validate(input: number) {
        if (!isNaN(input)) {
          return true;
        }
        throw Error('Please provide numbers as operands!');
      }
    }
  ]);
  const from: number = answer.from as number;
  const to: number = answer.to as number;
  const amount: number = answer.amount as number;
  const convertedAmount: number = currency_converter(from, to, amount);

  console.log(`${amount} ${currencyArr[from].name} (${currencyArr[from].code}) will get you ${convertedAmount} ${currencyArr[to].name} (${currencyArr[to].code}) `);
  RepeatOperation();
}

function currency_converter(from: number, to: number, amount: number): number {
  let conv: number;
  if (from == 0) {
    conv = parseFloat((amount * currencyArr[to].USD_parity).toFixed(2));
  }
  else if (to == 0) {
    conv = parseFloat((amount / currencyArr[from].USD_parity).toFixed(2));
  }
  else {
    conv = parseFloat((amount / currencyArr[from].USD_parity * currencyArr[to].USD_parity).toFixed(2));
  }
  return conv;
}



console.clear();
console.log('Welcome to Currency converter!');
getinput();
