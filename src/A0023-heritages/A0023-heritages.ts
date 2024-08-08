export class Person {
    constructor (
        public name: string,
        public nickname: string, 
        private age: number, 
        protected cpf: string,
    ) {};

    getAge (): number {
        return this.age;
    }

    getCPF (): string {
        return this.cpf;
    }

    getfullName (): string {
        return this.name + this.nickname;
    }

}

export class Student extends Person {};
export class Client extends Person {};

const student = new Student('Peter', 'Parker', 10, '84394');
const client = new Client('Arrasca', 'eta', 30, '4355462');
console.log(student, client); // Herdando as características da classe Person.