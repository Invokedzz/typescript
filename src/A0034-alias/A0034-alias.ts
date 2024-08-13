    type typePerson = {
    name: string;
    nickname: string;
    completeName(): string;
}

export class Person implements typePerson {
    constructor (
        public name: string,
        public nickname: string,
    ) {};

    completeName(): string {
        return this.name + ' ' + this.nickname;
    };

}

const person = new Person ('Robb', 'Stark');
console.log(person.completeName());

// Podia ser tbm:

/* export abstract class typePerson {
    protected abstract name: string;
    protected abtsract nickname: string;
    protected abstract nameComplete(): string;


    export class Person extends typePerson {
        constructor (
            public name: string,
            public nickname: string,
        ) {
            super();    
        }
    }

} */