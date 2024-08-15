type Person = {
    name: string,
};

interface Poopo {
    nickname: string,
    age: number,
    cash?: number,
};

interface Poopo {
    readonly name: string,
};

const somerandomDude: Poopo = {
    name: 'Mad',
    nickname: 'Mawler',
    age: 40,
};

// Interfaces de nomes iguais se "somam".

export class Personp implements Poopo {
    constructor (
        public nickname: string,
        public name: string,
        public age: number,
        public cash: number,
    ) {}; 
    
    showAll(): string {
        return this.name + ' ' + this.nickname + ' ' + this.age + ' ' + this.cash;
    };
}

const callClass = new Personp('Name', 'Nickname', 40, 1000);
console.log(callClass.showAll());

console.log(somerandomDude);

export default 1;
