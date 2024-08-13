interface typeName {
    name: string,
};

interface typeNickname {
    nickname: string,
};

interface typecompleteName {
    completeName(): string,
}

type everythingTyped = typeName & typeNickname & typecompleteName;
interface everythingTyped2 extends typeName, typeNickname, typecompleteName {};

export class Person implements everythingTyped2 {
    constructor (
        public name: string,
        public nickname: string,
    ) {};

    completeName (): string {
        return this.name + ' ' + this.nickname;
    };
}

const person = new Person('Rogerin', 'Brabo');
console.log(person.completeName());