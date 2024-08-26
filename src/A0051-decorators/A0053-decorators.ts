function showParams (value1: string, value2: string) {
    return function <Y extends new (...arg: any []) => any> (target: Y): Y {
        return class extends target {

            color: string;

            constructor (...arg: any []) {
                super(...arg);
                this.color = this.callColor(arg[0]);
              //  console.log(value1, value2);
            };

            callColor (ourValue: string): string {
                console.log(ourValue);
                return `${ourValue}`;
            };

        };
    };
}

@showParams('Goodbye', 'World')

export class noIdea {
    constructor (
        private color: string,
    ) {};
}

const call = new noIdea('blue');
console.log(call);
export default 1;
