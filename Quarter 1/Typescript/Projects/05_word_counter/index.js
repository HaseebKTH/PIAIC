import inquirer from 'inquirer';
let characterCnt = 0;
let wordCnt = 0;
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'para',
            message: 'Enter a paragraph:',
        }
    ]);
    let inputText = answers.para;
    while (inputText != "") {
        const nextWord = inputText.match(/^\s*\S+/)?.[0] ?? '';
        inputText = inputText.slice(nextWord.length).trimStart();
        characterCnt = characterCnt + nextWord.length;
        wordCnt++;
    }
    console.log(`Total word count: ${wordCnt}`);
    console.log(`Total character count: ${characterCnt}`);
}
main();
