let nome: string = 'Louis';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayStrings: Array<string> = ['Bora vasco', 'Bora'];
let anotherArraystring: Array<string> = ['Another one?', 'Yes!'];

// Objetos
let person: {name: string, age: number, adult?: boolean} = {
    name: 'Peter',
    age: 20,
    adult: true,
}

let bankAccount: {money: string | number, user: string, password: string} = {
    money: `R$` + 100,
    user: 'Pablo Honey',
    password: 'asmr vampire',
}

// console.log(bankAccount);

// Funções

function addition (x:number, y:number) {
    return x + y;
}

const addition2: (x: number, y: number) => number = (x, y) => x + y;

function multiplication (x: number, y: number) {
    return x * y;
}

// console.log(multiplication(2, 10));

// Addition e Addition2 são coisas iguais escritas de forma diferente. Deus me livre da "Addition2".

class Testing {
    num: number;
    num2: number;
    constructor () {
        this.num = 10;
        this.num2 = 5;
    }

    doAccount () {
        return this.num * this.num2;
    };

    showAccount () {
        return this.doAccount();
    }

}

/* const hmmAnalysis = new Testing();
console.log(hmmAnalysis.showAccount()); => Forma de fazer class em TypeScript*/