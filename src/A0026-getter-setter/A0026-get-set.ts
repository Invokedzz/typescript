export class Person {
    constructor (
        private name: string,
        private nickname: string, 
        private age: number, 
        private cpf: string,
    ) {};

    public getAge (): number {
        return this.age;
    }

    public setCPF (value: string): void {
        this.cpf = value;
    }

    public getCPF (): string {
        return this.cpf.replace(/\D/g, '');
    }

    public getfullName (): string {
        return this.name + this.nickname;
    }

}

const someGuy = new Person('David', 'Guetta', 10, '123-456-798-00');
someGuy.setCPF('123-456-798-00');
console.log(someGuy.getCPF());

export default 1;