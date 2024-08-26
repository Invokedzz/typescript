function decorator (
    classProto: any,
    methodName: string,
    descriptor: PropertyDescriptor,
): any {
    console.log(classProto);
    console.log(methodName);
    console.log(descriptor);
    return {
        value: function (...arg: string []) {
            return arg[0].toLowerCase();
        }
    };
};

export class randomPerson {
    private name: string;
    private nickname: string;
    constructor (name: string, nickname: string) {
        this.name = name;
        this.nickname = nickname;
    };

    @decorator method (msg: string): string {
        return msg;  
    };

    public getfullName (): string {
        return this.name + ' ' + this.nickname;
    };

}

const person = new randomPerson('Pablo', 'Honey');
const meth = person.method('HAHAHAHA');
console.log(meth);
console.log(person.getfullName());

export default 1;