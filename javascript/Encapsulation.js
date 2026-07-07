class BankAccount {
    #balance = 500;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());

class CoffeeMachine{
    makeCoffee(){
        this.#boilingWater();
        console.log("Coffee Ready");
    }

    #boilingWater(){
        console.log('Boiling water');
    }
}

const machine = new CoffeeMachine();
console.log(machine.makeCoffee());

console.log(machine.#boilingWater);