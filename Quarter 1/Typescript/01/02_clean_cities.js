"use strict";
const cleanCities = ["Lahore", "Pindi", "Karachi", "Islamabad"];
let cleanCityFound = false;
for (let i = 0; i < cleanCities.length; i++) {
    if ("Islamabad" === cleanCities[i]) {
        console.log("It is one of cleanest cities");
        cleanCityFound = true;
        break;
    }
}
if (cleanCityFound === false) {
    console.log("Not found");
}
