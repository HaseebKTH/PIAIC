import inquirer from "inquirer";
import figlet from "figlet";
import {Sum, Sub, Multiply, Divide} from "./operations.js";

const welcome = async () => {
    console.log(figlet.textSync('Calculator', {
        font: 'Bloody'
    }));
    const input = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number",
        },
        {
            type: "list",
            name: "operation",
            message: "Select your operation",
            choices: ["+", "-", "*", "/"]
        }

    ])
if(input.operation === '+')
{
    console.log(Sum(input.num1, input.num2));
}
else if(input.operation === '-')
{
    console.log(Sub(input.num1, input.num2));
}
else if(input.operation === '*')
{
    console.log(Multiply(input.num1, input.num2));
}
else if(input.operation === '/')
{
    console.log(Divide(input.num1, input.num2));
}
else
{
    console.log("Invalid Operation!");
}

}


await welcome();