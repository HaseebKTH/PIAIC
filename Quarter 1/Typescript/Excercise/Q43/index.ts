let magicians = ["Houdini", "Bajwa", "Chris Angel", "Hafiz", "David Copperfield", "Alfred Borden"];

const show_magicians = (magic:string[]):void => {
    for (let mag of magic)
    {
        console.log(mag);
    }

}

const make_great = (magic:string[]):string[] => {
    const new_magic:string[] = [];
    for (let i=0; i<magic.length; i++)
    {
        new_magic[i]= `${magic[i]} The Great`;
    }
    return new_magic;
}

const great_magician = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magician);