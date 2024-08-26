// Formas de implantar decorators no "pelo":

function addParams (target: string, target2: string) {
    return `${target} and ${target2} are ready to fight!`;
};

export class valueString {
    constructor (
        private name: string,
    ) {};

    public returnName (): string {
        return this.name;
    };

}

export class valueNumber {
    constructor (
        private horseName: string,
    ) {};

    public returnNum (): string {
        return this.horseName;
    };

}

const startStringclass = new valueString('Don Quixote');
const startNumberclass = new valueNumber('Horse');
// console.log(addParams(startStringclass.returnName(), startNumberclass.returnNum()));

function whyimAlive (target: string []): string {
    if (!target) return 'no target';
    return `${target[0]} and ${target[1]} just want to break free`;
}

export class becausetheresaPurpose {
    constructor (
        private characters: string [],
    ) {};

    public returnTarget (): string [] {
        if (!this.characters) return this.characters = [];
        return this.characters;
    };

}

const newPurpose = new becausetheresaPurpose(['John', 'Bill']);
// console.log(whyimAlive(newPurpose.returnTarget()));

function doingMath (firstValue: number, secondValue: number): number {
    if (!firstValue && !secondValue) return 0;
    return (firstValue + secondValue) / 2;
}

export class firstAttribute {
    constructor (
        private firstValue: number,
    ) {};

    public returningValue (): number {
        return this.firstValue + 1;
    };

}

export class secondAttribute {
    constructor (
        private secondValue: number,
    ) {};

    public returningotherValue (): number {
        return this.secondValue * 2;
    };

}

const startFirstclass = new firstAttribute(40);
const startSecondclass = new secondAttribute(45);
// console.log(doingMath(startFirstclass.returningValue(), startSecondclass.returningotherValue()));

function numbersArray (mainTarget: number []): number {
    return mainTarget
    .toString()
    .split('')
    .map(ourValue => parseInt(ourValue, 10))
    .reduce((ac, value) => ac + value, 0);
}

export class givingNumbers {
    constructor (
        private nums: number [],
    ) {};

    returnNumbersArray (): number [] {
        return this.nums;
    };

}

const newArray = new givingNumbers([7832748]);
// console.log(numbersArray(newArray.returnNumbersArray()));

export default 1;