"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require("prompt-sync")({ sigint: true });
let taskComplete = false;
let vowelsArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
let testChar = prompt("Please Enter a Character ");
do {
    if (testChar.length > 1) {
        console.log("String not allowed! Please enter a character instead!");
        testChar = prompt("Please re-Enter a Character ");
    }
    else if (testChar.toLowerCase() === testChar.toUpperCase()) {
        console.log("Enter alphabets only!");
        testChar = prompt("Please re-Enter a Character ");
    }
    else if (vowelsArray.includes(testChar)) {
        console.log("Entered character is a Vowel!");
        taskComplete = true;
    }
    else {
        console.log("Entered character is a Consonant!");
        taskComplete = true;
    }
} while (!taskComplete);
/* do {
    if(testChar.length>1)
    {
        console.log("String not allowed! Please enter a character instead!");
        testChar = prompt("Please re-Enter a Character ");
    }
    else
    {
        if(testChar.toLowerCase()===testChar.toUpperCase())
        {
            console.log("Enter alphabets only!");
            testChar = prompt("Please re-Enter a Character ");
        }
        else
        {
            if(vowelsArray.includes(testChar))
            {
                console.log("Entered character is a Vowel!");
            }
            else
            {
                console.log("Entered character is a Consonant!");
            }
            taskComplete = true;
        }
    }
        

}
while (!taskComplete); */ 
