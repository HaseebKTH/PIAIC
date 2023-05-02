"use strict";
const make_shirt = (size = "large", message = "I love Typescript") => {
    console.log(`A shirt of ${size} size and tagline "${message}" has been printed!`);
};
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "Wear without Fear!");
