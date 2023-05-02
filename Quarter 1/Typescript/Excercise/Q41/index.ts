let magicians = ["Houdini", "Bajwa", "Chris Angel", "Hafiz", "David Copperfield", "Alfred Borden"];

const show_magicians = (magic:string[]):void => {
    for (let mag of magic)
    {
        console.log(mag);
    }

}

show_magicians(magicians);