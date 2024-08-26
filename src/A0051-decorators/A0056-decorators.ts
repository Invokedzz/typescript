function decorator (
    classProto: any,
    name: string | symbol,
): any {
    console.log(name);
    let propertyValue: any;
    return {
        get: () => propertyValue,
        set: (value: any) => {
            if (typeof value === 'string') {
                propertyValue = value
                .split('')
                .reverse()
                .join('');
                console.log(value);
            };

            propertyValue = value;

        },
    };
}

export class Person {
    @decorator private name: string;
    constructor (name: string) {
        this.name = name;
    };

    returnName (): string {
        return this.name;
    };

}

const startClass = new Person('Pablo');
console.log(startClass.returnName()); 


export default 1;