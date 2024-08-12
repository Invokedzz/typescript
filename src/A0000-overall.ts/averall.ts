export class randomDude {
    private _weapon: Weapon | null = null;
    constructor (
        private _name: string,
        private _username: string, // O underline é para métodos GET/SET.
    ) {};

    get nameValue (): string {
        return this._name;
    }

    get usernameValue (): string {
        return this._username;
    }

    get weaponData (): Weapon | null {
        return this._weapon;
    }

    set weaponData (weapon: Weapon | null) {
        this._weapon = weapon;
    }

    damageOutput (): void {
        if (this.weaponData === null) {
            console.log("You must register a valid weapon");
            return;
        }

        this.weaponData.damageOutput();

    }

}

export abstract class Weapon {
    constructor (
        private _weaponName: string,
    ) {};

    abstract damageOutput (): void;

    get analysisWeaponValue (): string {
        return this._weaponName;
    }

}

export class Pickaxe extends Weapon {
    damageOutput(): void {
        const pickaxeValue = 10;
        console.log(`The damage of your pickaxe is: ${pickaxeValue}`);
    }
}


const definingClass = new randomDude('Harry', 'Potter');
const pickaxe = new Pickaxe('Pickaxe');
console.log(pickaxe.analysisWeaponValue);
pickaxe.damageOutput();
//console.log(definingClass.nameValue); // Não acessamos GET dessa forma: "definingClass.nameValue()";
//console.log(definingClass.usernameValue);


export default 1;