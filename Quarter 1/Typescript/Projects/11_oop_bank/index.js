var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender || (Gender = {}));
class Customer {
    constructor(firstName, lastName, gender, age, mobileNo) {
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
        return `Name: ${this._firstName} ${this._lastName} | Gender: ${this._gender} | Age: ${this._age} | Mobile # ${this._mobileNo} | Balance: ${this._bankAccount.CheckBalance()}`;
    }
    DebitMoney(amount) {
        return this._bankAccount.DebitMoney(amount);
    }
    CreditMoney(amount) {
        return this._bankAccount.CreditMoney(amount);
    }
    CheckBalance() {
        return this._bankAccount.CheckBalance();
    }
}
class BankAccount {
    constructor() {
        this._accountBalance = 0;
    }
    DebitMoney(amount) {
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
    CreditMoney(amount) {
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
    CheckBalance() {
        return this._accountBalance;
    }
}
let myCustomer = new Customer('Haseeb', 'Butt', Gender.Male, 36, '+923016666339');
console.log(myCustomer.customerInfo());
try {
    let Customer1 = new Customer('Akram', 'Khan', Gender.Male, 17, '+923016937369');
}
catch (error) {
    console.log(`Error Occured: ${error.message}`);
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
export {};
