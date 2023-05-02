"use strict";
let usernames = ["Christian_Bale", "JhonneyDepp", "MandyMoore", "Admin", "Boota_123"];
//usernames = [];
if (usernames.length == 0) {
    console.log("We need to find some users!");
}
for (let user of usernames) {
    if (user === "Admin") {
        console.log("Hello Admin! Would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}! Thank you for logging in again.`);
    }
}
