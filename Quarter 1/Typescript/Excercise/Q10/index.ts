/*  Author: Haseeb Aslam Butt
    Date: 14/03/2023
    Comments Writing Excercise  */ 

let personName: string = "HaSeEb asLaM buTt";

console.log(`Name in lowercase: ${personName.toLowerCase()}`);
console.log(`Name in uppercase: ${personName.toUpperCase()}`);
console.log(`Name in titlecase: ${toTitlecase(personName)}`);

//This function converts the text to Title case i.e First character of each word is in Upper case!
function toTitlecase (inText:string):string{
    let wordArray = inText.split(" ");
    for(let i:number = 0; i<wordArray.length; i++)
    {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1).toLowerCase();
    }
    return wordArray.join(' ');
}