const make_shirt = (size:string = "large", message: string = "I love Typescript"):void => {
    console.log(`A shirt of ${size} size and tagline "${message}" has been printed!`);
}

make_shirt("Large");
make_shirt("Medium");
make_shirt("Small","Wear without Fear!");
