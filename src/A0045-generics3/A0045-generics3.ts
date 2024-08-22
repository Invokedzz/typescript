type randomPerson = {
    name: string,
    nickname: string,
};

export class person {

    private randomPerson: randomPerson = {
        name: 'Robb',
        nickname: 'Stark',
    }
    public readPerson (): randomPerson {
        return this.randomPerson
    };
}

const createClass = new person();
createClass.readPerson();

interface personProtocol <X = string, Y = number> {
    name: X,
    nickname: X,
    favoriteNumber?: Y,
};

const student: personProtocol = {
    name: 'Mario',
    nickname: 'Bros',
    favoriteNumber: 10,
};

const anotherStudent: personProtocol = {
    name: 'Luigi',
    nickname: 'Bros',
    favoriteNumber: 5,
};

//console.log(student);
//console.log(anotherStudent);

type protocol <A = string [], B = number []> = {
    name: A,
    nickname: A,
    favoriteNumber?: B,
};

type anotherProtocol <C = string [], D = number []> = {
    name: C,
    nickname: C,
    favoriteNumber?: D,
};

export class normalPerson {

    private normalPerson: protocol = {
        name: ['Lawrence', 'Adachi'],
        nickname: ['Vicar', 'Teru'],
        favoriteNumber: [30, 20],
    };

    private anothernormalPerson: anotherProtocol = {
        name: ['Mikami', 'Sinon', 'Arrascaeta'],
        nickname: ['Flamengo', 'Vasco', 'Botafogo'],
        favoriteNumber: [10, 20, 30],
    }

    private returnFeatures (): string [] | string {
        if (!this.normalPerson.name) return 'Insert valid strings in the array';
        return this.normalPerson.name;
    };

    private returnFeatures2 (): string [] {
        if (this.anothernormalPerson.name.length >= 0) return this.anothernormalPerson.name;
        return this.anothernormalPerson.nickname;
    }

    public showFeatures (): void {
        console.log(this.returnFeatures());
    };

    public showmoreFeatures (): void {
        console.log(this.returnFeatures2());
    }

}

const newClass = new normalPerson();
newClass.showFeatures();
newClass.showmoreFeatures();
export default 1;

