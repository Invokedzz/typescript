// Abstract para ter um tipo, garantir que tenho determinado método/atributo.

export abstract class Character {
    constructor (
        protected name: string,
        protected attack: number,
        protected lifePoints: number,
    ) {};

    attacking(character: Character): void {
        this.rwhoosh();
        character.lostLifePoints(this.attack);
    }

    lostLifePoints (attackPower: number): void {
        this.lifePoints -= attackPower;
        console.log(`${this.name} has ${this.lifePoints}`);
    }

   abstract rwhoosh (): void;

}

export class Warrior extends Character {
    rwhoosh(): void {
        console.log('WOAAAAAAAAH!');
    }
};
export class Mage extends Character {
    rwhoosh(): void {
        console.log('Succumb!!');
    }
};

const warrior = new Warrior('Warrior', 200, 1500);
const mage = new Mage('Mage', 400, 1000);

warrior.attacking(mage);
mage.attacking(warrior);


export default 1; 