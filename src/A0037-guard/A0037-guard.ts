import { someRPGbullshit } from "../A0000-overall.ts/overall5";

export function typeGuard (a: unknown, b: unknown): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

//console.log(typeGuard(1, 3));
//console.log(typeGuard('x', 'y'));

// Suponha que não conhece esses dados.
export function typeGuard2 (x: unknown, y: unknown, w: unknown): string | number {
    if (typeof x === 'number' && typeof y === 'number' && typeof w === 'number') return x + y + w;
    return `${x}, ${y} and ${w}`
};

//console.log(typeGuard2(5, 3, 8));
//console.log(typeGuard2('Marcus', 'Chipsy', 'Horbner'));


interface someRandomGuy {
    name: string;
    age: number;
    height: number;
    weight: number;
};

interface someRandomGuy {
    hairColor?: string;
    hairLength?: number;
    eyesColor?: string;  
};

export class showRandomGuy implements someRandomGuy {
    //protected random: someRandomGuy;
    constructor (
        public name: string,
        public age: number,
        public height: number,
        public weight: number,
        public hairColor: string,
        public hairLength: number,
        public eyesColor: string
    ) {};

    showEverythingaboutHim (): string | number {
        return `${this.name}, ${this.age}, ${this.height}, ${this.weight}, ${this.hairColor}, ${this.hairLength}, ${this.eyesColor}`
    };
};

const someGuy = new showRandomGuy('David', 10, 1.8, 80, 'black', 15, 'blue');
console.log(someGuy.showEverythingaboutHim());

export default 1;