"use strict";
let usernames = ["Christian_Bale", "JhonneyDepp", "MandyMoore", "Admin", "Boota_123"];
for (let user of usernames) {
    if (user === "Admin") {
        console.log("Hello Admin! Would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}! Thank you for logging in again.`);
    }
}
