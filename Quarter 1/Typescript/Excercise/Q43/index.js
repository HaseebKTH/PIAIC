"use strict";
let magicians = ["Houdini", "Bajwa", "Chris Angel", "Hafiz", "David Copperfield", "Alfred Borden"];
const show_magicians = (magic) => {
    for (let mag of magic) {
        console.log(mag);
    }
};
const make_great = (magic) => {
    const new_magic = [];
    for (let i = 0; i < magic.length; i++) {
        new_magic[i] = `${magic[i]} The Great`;
    }
    return new_magic;
};
const great_magician = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magician);
