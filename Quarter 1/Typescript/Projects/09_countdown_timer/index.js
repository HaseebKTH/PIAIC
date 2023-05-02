import inquirer from 'inquirer';
let targetTime;
main();
async function main() {
    console.clear();
    console.log(`\tWelcome to Panaverse Countdown Timer!`);
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to input for Countdown Timer?',
            choices: ['Absolute Time', 'Remaining Time']
        }
    ]);
    if (choice == 'Absolute Time') {
        targetTime = await getTargetTime(choice);
    }
    else {
        let deltaTime = await getTargetTime(choice);
        targetTime = new Date();
        targetTime.setHours(targetTime.getHours() + deltaTime.getHours());
        targetTime.setMinutes(targetTime.getMinutes() + deltaTime.getMinutes());
        targetTime.setSeconds(targetTime.getSeconds() + deltaTime.getSeconds());
    }
    countDown();
}
async function getTargetTime(choice) {
    const { time } = await inquirer.prompt({
        type: "input",
        name: "time",
        message: `Enter the ${choice} (HH:MM:SS):`,
        validate: (input) => {
            const regex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
            if (!regex.test(input)) {
                return "Please enter a valid time in the format HH:MM:SS";
            }
            return true;
        }
    });
    const [hours, minutes, seconds] = time.split(':');
    const timeObj = new Date();
    timeObj.setHours(parseInt(hours, 10));
    timeObj.setMinutes(parseInt(minutes, 10));
    timeObj.setSeconds(parseInt(seconds, 10));
    return timeObj;
}
async function countDown() {
    const currentTime = await getTime();
    const diffTimeSec = calculateDiffSec(targetTime, currentTime);
    if (diffTimeSec > 0) {
        console.log(`\tTarget Time: ${targetTime.getHours()}:${targetTime.getMinutes()}:${targetTime.getSeconds()} | Current Time: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} | ${diffTimeSec} seconds Remaining!`);
        countDown();
    }
    else {
        console.log(`\t\t<<<<< Target Time Event has arrived! >>>>>`);
    }
}
function getTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const currentDate = new Date();
            resolve(currentDate);
        }, 1000);
    });
}
function calculateDiffSec(date1, date2) {
    return Math.ceil((date1.getTime() - date2.getTime()) / 1000);
}
