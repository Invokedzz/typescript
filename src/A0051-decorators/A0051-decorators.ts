function decorator (target: string): string {
    return target + ' fights tomorrow';
};

export class Human {
    constructor (
        public name: string,
    ) {};

    public callName (): string {
        return this.name;
    };

}

const startHumanclass = new Human('John');
//console.log(decorator(startHumanclass.callName()));

export class randomAnimal {
    constructor (
        public name: string,
        public color: string,
    ) {};

    public properties (): string {
        return this.color + ' ' + this.name;
    };

}

function anotherDecorator (target: string): string {
    return target + ' is the cutest cat in the world!';
}

const callAnimal = new randomAnimal('Cat', 'White');

//console.log(anotherDecorator(callAnimal.properties()));

export class homieLizard {
    constructor (
        public color: string,
        public name: string,
    ) {};
}

function lizardDecorator <P extends new (...arg: any []) => any>(target: P): P {
    return class extends target {
        color: string;
        name: string;
        constructor (...arg: any []) {
            super(...arg);
            this.color = arg[0]
            .split('')
            .reverse()
            .join('');

            this.name = arg[1];

        };
    };
}

const callLizard = lizardDecorator(homieLizard);
const newLizard = new callLizard('Green', 'Mohammed');
console.log(newLizard);

export default 1;