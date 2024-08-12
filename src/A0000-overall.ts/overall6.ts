export abstract class creatingCharacter {
    constructor (
    private name: string,
    private attackPoints: number,
    private lifePoints: number,
    ) {};

    public initialAdventure (character: creatingCharacter) {
        this.dialoguebetweenCharacters_FirstMission();
        character.theirfirstFight(this.attackPoints);
    }

    public secondAdventure (advancedCharacter: creatingCharacter) {
        this.dialoguebetweenCharacters_SecondMission();
        advancedCharacter.theirsecondFight(this.attackPoints);
    }

    private theirfirstFight (attackValue: number) {
        this.lifePoints -= attackValue;
        console.log(`${this.name} has now ${this.lifePoints}`);
    }

    private theirsecondFight (attackLevel: number) {
        this.lifePoints -= attackLevel * 2;
        console.log(`${this.name}: ${this.lifePoints} HP left!`);
    }

    abstract dialoguebetweenCharacters_FirstMission(): void;
    abstract dialoguebetweenCharacters_SecondMission(): void;
}

export class Warrior extends creatingCharacter {
    dialoguebetweenCharacters_FirstMission(): void {
        console.log(`I shall defeat you!`);
    }

    dialoguebetweenCharacters_SecondMission(): void {
        console.log("We meet again.")
    }

}

export class Enemy extends creatingCharacter {
    dialoguebetweenCharacters_FirstMission(): void {
        console.log("I'm going to destroy everything!!");
    }

    dialoguebetweenCharacters_SecondMission(): void {
        console.log("You're not going to escape this time!");
    }
} 

const mainCharacter = new Warrior('Artorias', 900, 18000);
const mainVillain = new Enemy('The Abyss', 900 / 3, 320000);

mainCharacter.secondAdventure(mainVillain);
mainVillain.secondAdventure(mainCharacter);

// Classes que apresentam "abstract" servem para serem herdadas por outras classes, por exemplo.

export default 1;