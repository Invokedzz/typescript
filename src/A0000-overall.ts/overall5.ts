export abstract class someRPGbullshit {
    constructor (
        protected lifePoints: number,
        protected attackPoints: number,
        protected characterName: string,
    ) {};

    characterDeclaration (character: someRPGbullshit) {
        this.warScream();
        character.attackDeclaration(this.attackPoints);
    }

    attackDeclaration (attackDamage: number): void {
        if (this.lifePoints <= 0) return;
        this.lifePoints -= attackDamage;
        console.log(`${this.characterName} has now ${this.lifePoints} HP!`);
    }

    abstract warScream (): void;

}

export class Barbarian extends someRPGbullshit {
    warScream(): void {
        console.log("For the glory!");
    }
};
export class Orc extends someRPGbullshit {
    warScream(): void {
        console.log("I will destroy you!!");
    }
};

const barbarian = new Barbarian (2000, 300, 'Strungler');
const orc = new Orc(1000, 500, 'Orclur');
let limit = 5;
for (let i = 0; i < limit; i++) {
    barbarian.characterDeclaration(orc);
}
export default 1;