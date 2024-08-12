export class Writer {
    private _gear: Gear | null = null; // Pode existir ou não no writer.
    constructor(
        private _name: string,
    ) {};

    get name(): string {
        return this._name;
    }

    set gear (gear: Gear | null) {
        this._gear = gear;
    }

    get gear(): Gear | null {
        return this._gear;
    }

    write (): void {
        if (this.gear === null) {
            console.log("I can't write without a gear");
            return;
        }
        this.gear.write();
    }

}

export abstract class Gear {
    constructor (
        private _name: string,
    ) {};
    abstract write (): void;

    getName (): string {
        return this._name;
    }

}

export class Pen extends Gear {
    write (): void {
        console.log(`${this.getName()} is writing...`);
    }
}

export class writingMachine extends Gear {
    write (): void {
        console.log(`${this.getName} is writing...`);
    }
}

const writer = new Writer('Louis');
const pen = new Pen('BIC');
const wri = new writingMachine('Machine');

writer.gear = pen;
writer.write();
