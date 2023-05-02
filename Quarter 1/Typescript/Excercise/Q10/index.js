"use strict";
let personName = "HaSeEb asLaM buTt";
console.log(`Name in lowercase: ${personName.toLowerCase()}`);
console.log(`Name in uppercase: ${personName.toUpperCase()}`);
console.log(`Name in titlecase: ${toTitlecase(personName)}`);
function toTitlecase(inText) {
    let wordArray = inText.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1).toLowerCase();
    }
    return wordArray.join(' ');
}
