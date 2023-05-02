"use strict";
let invitees = ["Marie Curie", "Nikola Tesla", "Ibn Battuta", "Reinhold Messner", "Antoni Gaudi"];
for (let i in invitees) {
    console.log(`Dear Mr/Mrs ${invitees[i]} \nI'm sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.\n\nYour Admirer,\nHaseeb Aslam Butt\n\n`);
}
console.log(`\nI regret to inform that our honorable guest Mr/Mrs ${invitees[4]} can't make it to the dinner party due to his/her prior plan to visit the beautiful island of Santorini.\n`);
for (let i in invitees) {
    if (invitees[i] === "Antoni Gaudi") {
        invitees[i] = "Zaha Hadid";
    }
}
for (let i in invitees) {
    console.log(`Dear Mr/Mrs ${invitees[i]} \nI'm sending you my warmest invitation to this dinner party. Your presence is all that is required to make this party a success.\n\nYour Admirer,\nHaseeb Aslam Butt\n\n`);
}
