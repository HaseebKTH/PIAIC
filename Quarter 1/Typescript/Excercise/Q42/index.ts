let magicians = ["Houdini", "Bajwa", "Chris Angel", "Hafiz", "David Copperfield", "Alfred Borden"];

const show_magicians = (magic:string[]):void => {
    for (let mag of magic)
    {
        console.log(mag);
    }

}

const make_great = (magic:string[]):void => {
    for (let i=0; i<magic.length; i++)
    {
        magic[i]= magic[i] + " The Great";
    }
}

make_great(magicians);
show_magicians(magicians);