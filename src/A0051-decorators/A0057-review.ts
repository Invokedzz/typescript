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
console.log(addParams(startStringclass.returnName(), startNumberclass.returnNum()));

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
console.log(whyimAlive(newPurpose.returnTarget()));

export default 1;