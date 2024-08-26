function idontknow (target: any) {
    if (!target) return;
    console.log(`Modifying the class: ${target.name}`);
}
 
@idontknow
export class Person {  

    constructor (
        public name: string,
    ) {};

    returnName (): string {
        return this.name;
    };

}

const startAll = new Person('Pablo Honey');
console.log(startAll.returnName());

export default 1;