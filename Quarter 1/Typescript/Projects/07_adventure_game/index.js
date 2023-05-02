import inquirer from 'inquirer';
const enemies = ['Corona', 'Bond', 'Jahalat', 'Gandagi'];
const maxEnemyHealth = 75;
const enemyAttackDamage = 25;
let health = 100;
const attackDamage = 50;
let numHealthPotions = 3;
const healthPotionHealAmount = 30;
const healthPortionDropChance = 50;
let continueGame = true;
let enemyRunning = true;
let skipEnemy = false;
let numDefeatedEnemeies = 0;
await Main();
async function Main() {
    console.log(`\tWelcome to the Dungeon!`);
    while (continueGame) {
        while (enemyRunning) {
            if (skipEnemy) {
                skipEnemy = false;
                break;
            }
            console.log('-------------------------------------------------------------------------------------------');
            let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
            let enemy = enemies[Math.floor(Math.random() * enemies.length)];
            console.log(`\t>>>>>>>>>>> ${enemy} has appeared! <<<<<<<<<<<<\n`);
            while (enemyHealth > 0) {
                console.log('\t================');
                console.log(`\tYour HP: ${health}`);
                console.log(`\t${enemy}'s HP: ${enemyHealth}`);
                console.log('\t================');
                console.log(`\n\tInput:\n\t1. Attack\n\t2. Drink Health Potion\n\t3. Run!\n`);
                const { key } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'key',
                        message: `\tWhat would you like to do?`,
                        validate(input) {
                            const regex = /^[123]$/;
                            if (regex.test(input)) {
                                return true;
                            }
                            throw Error('Please press a valid key!');
                        }
                    }
                ]);
                if (key == '1') {
                    const damageDealt = Math.floor(Math.random() * attackDamage);
                    const damageTaken = Math.floor(Math.random() * enemyAttackDamage);
                    health -= damageTaken;
                    enemyHealth -= damageDealt;
                    console.log(`\t>You strike the ${enemy} for ${damageDealt} Damage.`);
                    console.log(`\t>You recieve ${damageTaken} in retaliation.\n`);
                    if (health < 1) {
                        console.log(`\t>You have taken too much Damage. You are too weak to go on!`);
                        break;
                    }
                }
                else if (key == '2') {
                    if (numHealthPotions > 0) {
                        health += healthPotionHealAmount;
                        numHealthPotions--;
                        console.log(`\t>You drink a health potion, healing yourself for ${healthPotionHealAmount}\n\t>You now have ${health} HP.\n\t>You have ${numHealthPotions} Health Potion left.`);
                    }
                    else {
                        console.log(`\t>You dont have any health potion left in inventory!`);
                    }
                }
                else if (key == '3') {
                    skipEnemy = true;
                    break;
                }
            }
            if (health < 1) {
                console.log(`\t>You limp out of Dungeon. Too weak to battle! You defeated ${numDefeatedEnemeies} enemeis!`);
                continueGame = false;
                break;
            }
            if (!skipEnemy) {
                console.log('-------------------------------------------------------------------------------------------');
                console.log(`\t# ${enemy} was defeated! #\n`);
                numDefeatedEnemeies++;
                console.log(`\t# You now have ${health} HP left! #`);
                if ((Math.floor(Math.random() * 100)) < healthPortionDropChance) {
                    numHealthPotions++;
                    console.log(`\t# The ${enemy} dropped a health Potion! #`);
                    console.log(`\t# You now have ${numHealthPotions} health Potions! #`);
                }
                console.log('-------------------------------------------------------------------------------------------');
                console.log(`\tInput:\n\t1. Continue Fighting\n\t2. Exit Dungeon`);
                const { cont } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'cont',
                        message: `\tWhat would you like to do?`,
                        validate(input) {
                            const regex = /^[12]$/;
                            if (regex.test(input)) {
                                return true;
                            }
                            throw Error('Please press a valid key!');
                        }
                    }
                ]);
                if (cont == '1') {
                    console.log(`\tYou continue on adventure! #`);
                }
                else if (cont == '2') {
                    console.log(`\tYou Exit the Dungeon Victorious. You defeated ${numDefeatedEnemeies} enemeis!`);
                    continueGame = false;
                    break;
                }
            }
        }
    }
}
