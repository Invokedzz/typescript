function receiveNumbers <X extends new (...arg: any []) => any> (target: X): X {
    return class extends target {
        firstColor: string;
        secondColor: string;

        constructor (...arg: any []) {
            super(...arg);
            this.firstColor = arg[0];
            this.secondColor = arg[1];
        }

        displayValues (firstColor: string, secondColor: string): void {
            console.log(firstColor, secondColor);
        }

    };
}

@receiveNumbers

export class giveNumbers {
    constructor (
        private num: string,
        private secondNum: string,
    ) {};

    returnValues (): string {
        return this.num + this.secondNum;
    };

}

const callDecorator = receiveNumbers(giveNumbers);
const newClass = new callDecorator('red', 'blue');
console.log(newClass);


export default 1;