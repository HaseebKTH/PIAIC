let bucketList: string[] = ["Westfjords Iceland", "Mammoth Caves USA", "Darien Gap Panama", "Patagonia Chile", "Laplands Finland"]

console.log("Array in origional order:");
console.log(bucketList);

let newList = Array.from(bucketList);
newList.sort();

console.log("Sorted array:");
console.log(newList);
console.log("Origional array:");
console.log(bucketList);

newList.reverse();
console.log("Reverse Sorted array:");
console.log(newList);
console.log("Origional array:");
console.log(bucketList);

bucketList.reverse();
console.log("Reverse Origional array:");
console.log(bucketList);

bucketList.reverse();
console.log("Reverse Reverse Origional array:");
console.log(bucketList);

bucketList.sort();
console.log("Origional array sorted:");
console.log(bucketList);

bucketList.reverse()
console.log("Origional array reverse sorted:");
console.log(bucketList);
