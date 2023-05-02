import inquirer from 'inquirer';



let myPerson: Person;
main();


async function main() {
    console.clear();
    console.log(`\tWelcome to Panaverse OOP Project!`);

    const { choice }: { choice: number } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What do you generally like?',
            choices: [{ name: 'Socialize and Talk to others', value: 0 }, { name: 'Keep to yourself', value: 1 }]
        }]);
    myPerson = new Person();
    myPerson.AskQuestion(choice);
    console.log(`You are an ${myPerson.GetPersonality()}`);

    const {name}:{name:string} = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your student\'s name?',
      });

      let myStudent = new Student();
      myStudent.Name = name;
      console.log(`Your Student's name is ${myStudent.Name} and his personality type is ${myStudent.GetPersonality()}`); 

}

class Person {
    private pesonality: string;
    constructor() {
        this.pesonality = 'Mystery';
    }

    AskQuestion(answer: number): void {
        if (answer == 0) {
            this.pesonality = 'Extrovert';
        }
        else if (answer == 1) {
            this.pesonality = 'Introvert';
        }
        else {
            this.pesonality = 'Mystery';
        }
    }

    GetPersonality(): string {
        return this.pesonality;
    }

}

class Student extends Person {
    private _name: string;
    
    constructor() {
        super();
        this._name = "";
    }

    get Name(): string {
        return this._name;
    }

    set Name(value: string) {
        this._name = value;
    }
}