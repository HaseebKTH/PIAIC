const animals: string[] = ['cow', 'goat', 'chicken'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (const animal of animals) {
  console.log(`A ${animal} has delicious meat.`);
}

console.log('Any of these animals would make a great dinner option!');