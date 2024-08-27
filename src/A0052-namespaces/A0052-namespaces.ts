namespace myNamespace {
    export const myClass = "Marquitos";
    export const otherThings = 'otherThings lol';

    export class namespacePerson {
        constructor (
            public name: string,
        ) {};
    };

}

const personNamespace = new myNamespace.namespacePerson("Robb");
console.log(myNamespace.otherThings);
console.log(myNamespace.myClass);
console.log(personNamespace.name);

console.log('#####################');

namespace anotherNamespace {
    export class sum {
        constructor (
            private num: number,
            private num2: number,
        ) {};

        private doSum (): number {
            return this.num + this.num2;
        };

        public showSum (): void {
            console.log(this.doSum());
        };

    };
}

const startNamespace = new anotherNamespace.sum(1, 3);
startNamespace.showSum();
