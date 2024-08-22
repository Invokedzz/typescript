export function somanyObjects <x, y> (firstObj: x, secondObj: y): x & y {
    return {...firstObj, ...secondObj}; // União dos objetos!
};

const firstObject = {
    fkey: 'fvalue',
    tkey: 'tvalue',
};
const secondObject = {
    skey: 'svalue',
    xkey: 'xvalue',
    ykey: 'yvalue',
};

console.log(somanyObjects(firstObject, secondObject));

export class test <a, b, c> {
    constructor (
        private name: a,
        private identity: b,
        private password: c,
    ) {};

    public prepareName (addElement: string []): boolean | string {
        if (addElement.length >= 0) return this.name + addElement.join(' ');
        return false;
    };

    private obtainPassword (): string | c {
        if (!this.password) return '';
        return this.password;
    };
    
    private obtainIdentity (): b {
        return this.identity;
    };

    public displayPassword (): void {
        console.log(this.obtainPassword());
    };

    public displayIdentity (): void {
        console.log(this.obtainIdentity());
    };

}

const startClass = new test('', '', '');
console.log(startClass.prepareName(['Pablo', 'Peter']));

export default 1;