"use strict";
function make_album(artist_name, album_title, track_count) {
    return { artist_name, album_title, track_count };
}
const album1 = make_album("Junaid Jamshed", "Us Rah Par", 12);
const album2 = make_album("Junoon", "Parvaaz", 10);
const album3 = make_album("Hadiqa Kiani", "Roshni");
console.log(album1);
console.log(album2);
console.log(album3);
