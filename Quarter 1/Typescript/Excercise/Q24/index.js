"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstname = "Babar";
let lastName = "Azam";
let num1 = 54;
let num2 = 19;
let num3 = 3.14;
let num4 = 69;
let players = ["Babar", "Rizwan", "Haris", "Rauf", "Shaheen", "Shadab"];
console.log("Is firstname + lastName === 'BabarAzam'? I predict True");
console.log(firstname + lastName === 'BabarAzam');
console.log("Is firstname === 'Rizwan'? I predict False");
console.log(firstname === 'Rizwan');
console.log("Is firstname !== 'Rizwan'? I predict True");
console.log(firstname !== 'Rizwan');
console.log("Is firstname !== 'Babar'? I predict False");
console.log(firstname !== 'Babar');
console.log("Is firstname.toLowerCase() === 'babar'? I predict True");
console.log(firstname.toLowerCase() === 'babar');
console.log("Is firstname.toLowerCase() === 'Babar'? I predict False");
console.log(firstname.toLowerCase() === 'Babar');
console.log("Is num1 === 54? I predict True");
console.log(num1 === 54);
console.log("Is num3 === 6.79? I predict False");
console.log(num3 === 6.79);
console.log("Is num2 < 20? I predict True");
console.log(num2 < 20);
console.log("Is num4 < 20? I predict False");
console.log(num4 < 20);
console.log("Is num4 > 20? I predict True");
console.log(num4 > 20);
console.log("Is num2 > 20? I predict False");
console.log(num2 > 20);
console.log("Is num3 <= 3.15? I predict True");
console.log(num3 <= 3.15);
console.log("Is num4 <= 68? I predict False");
console.log(num4 <= 68);
console.log("Is num4 >= 68? I predict True");
console.log(num4 >= 68);
console.log("Is num1 >= 55? I predict False");
console.log(num1 >= 55);
console.log("Is firstname == 'Babar' || num1 >= 55? I predict True");
console.log(firstname == 'Babar' || num1 >= 55);
console.log("Is firstname == 'Rizwan' || num1 >= 55? I predict False");
console.log(firstname == 'Rizwan' || num1 >= 55);
console.log("Is firstname == 'Babar' && num1 >= 54? I predict True");
console.log(firstname == 'Babar' && num1 >= 54);
console.log("Is firstname == 'Rizwan' && num1 >= 55? I predict False");
console.log(firstname == 'Rizwan' && num1 >= 55);
console.log("Is 'Shadab' present in the list of players? I predict True");
console.log(players.includes("Shadab"));
console.log("Is 'Waseem' present in the list of players? I predict False");
console.log(players.includes("Waseem"));
console.log("Is 'Waseem' not present in the list of players? I predict True");
console.log(players.includes("Waseem") != true);
console.log("Is 'Shadab' not present in the list of players? I predict False");
console.log(players.includes("Shadab") != true);
