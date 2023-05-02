enum Gender {
    Male = "Male",
    Female = "Female",
  }

class Customer {
    private _firstName: string;
    private _lastName: string;
    private _gender: Gender;
    private _age: number;
    private _mobileNo: string;
    private _bankAccount: BankAccount;

    constructor(firstName: string, lastName: string, gender: Gender, age: number, mobileNo: string) {
        if (age < 18) {
            throw new Error("Customer must be 18 or above!");
        }
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
        this._mobileNo = mobileNo;
        this._bankAccount = new BankAccount();
    }

    customerInfo() {
        return `Name: ${this._firstName} ${this._lastName} | Gender: ${this._gender} | Age: ${this._age} | Mobile # ${this._mobileNo} | Balance: ${this._bankAccount.CheckBalance()}`
    }

    DebitMoney(amount: number): string{
        return this._bankAccount.DebitMoney(amount);
    }

    CreditMoney(amount: number): string{
        return this._bankAccount.CreditMoney(amount);
    }
    CheckBalance(): number {
        return this._bankAccount.CheckBalance();
    }
}


class BankAccount {
    private _accountBalance: number;

    constructor() {
        this._accountBalance = 0;
    }

    DebitMoney(amount: number): string {
        if (amount <= 0) {
            return `Incorrect amount (${amount}) Debited!`;
        }
        else {
            if (amount > this._accountBalance) {
                return `Sorry! Can't debit Rs. ${amount}. You have insufficient balance!`;
            }
            else {
                this._accountBalance -= amount;
                return `Rs. ${amount} have been debited from your account!`;
            }
        }
    }
    CreditMoney(amount: number): string {
        if (amount <= 0) {
            return `Incorrect amount (${amount}) Credited!`;
        }
        else if (amount < 100) {
            this._accountBalance += amount;
            return `Rs. ${amount} have been credited to your account!`;
        }
        else {
            this._accountBalance = this._accountBalance + amount - 1;
            return `Rs. ${amount} have been credited to your account!\nRs 1 deducted as service fee!`;
        }
    }
    CheckBalance(): number {
        return this._accountBalance;
    }
}

let myCustomer: Customer =new Customer('Haseeb', 'Butt', Gender.Male, 36, '+923016666339');
console.log(myCustomer.customerInfo());

try{
    let Customer1: Customer =new Customer('Akram', 'Khan', Gender.Male, 17, '+923016937369');
}
catch(error)
{
    console.log(`Error Occured: ${(error as Error).message}`);
}

console.log(myCustomer.CreditMoney(50));
console.log(`Balance: ${myCustomer.CheckBalance()}`);

console.log(myCustomer.CreditMoney(200));
console.log(`Balance: ${myCustomer.CheckBalance()}`);

console.log(myCustomer.CreditMoney(-50));
console.log(`Balance: ${myCustomer.CheckBalance()}`);

console.log(myCustomer.DebitMoney(50));
console.log(`Balance: ${myCustomer.CheckBalance()}`);

console.log(myCustomer.DebitMoney(-50));
console.log(`Balance: ${myCustomer.CheckBalance()}`);

console.log(myCustomer.DebitMoney(200));
console.log(`Balance: ${myCustomer.CheckBalance()}`);