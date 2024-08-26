function addtoGru (Dru: string) {
    return function (target: any) {
        console.log(`This is ${Dru}`);
        return target;
    }
};

@addtoGru('Dru')

export class Gru {
    constructor (
        public Gru: string,
    ) {};

    public callGru (): string {
        return `This is ${this.Gru}`;
    };

}

const callGru = new Gru('Gru');
console.log(callGru.Gru);
