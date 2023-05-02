let mountains: string[] = ["Mount Eerest", "K2", "Kanchenjunga", "Lhotse", "Makalu", "Cho Oyo", "Dhaulagiri", "Manaslu", "Nanga Parbat", "Annapurna I", "Gasherbrum I", "Broad Peak", "Gasherbrum II", "Shishapangma"];

console.log("List of all 14 Eight-thousanders (8000+ meter) mountains in the world:");

for(let i in mountains)
{
    console.log(`${Number(i)+1}. ${mountains[i]}`);
}