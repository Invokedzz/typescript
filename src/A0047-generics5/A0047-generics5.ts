export class ANOTHERperson <x, y> {
    constructor (
        private name: x,
        private nickname: y,
    ) {};

    public showResults (): void {
        console.log(this.name, this.nickname);
    };
};

const createClass = new ANOTHERperson('Who am I', 'Who are you?');
createClass.showResults();

// Perceba que, inicialmente x e y são valores "unknown". Mas, no fim da nossa aplicação, quando inserimos strings => a engine do TypeScript reconhece que x e y são do tipo string.

// LEMBRANDO: óbvio que é mais fácil só tipar. A questão é: tem valores que não saberemos do retorno. É aí que retornamos os generics.

export class stack <x> {
    private counter = 0;
    private elements: {[y: number]: x} = {};

    showCounter (): void {
        console.log(this.counter);
    };

    addCounter (element: x): void {
        this.elements[this.counter] = element;
        this.counter++;
    };

    emptyCounter (): boolean {
        return this.counter === 0;
    };

    removeCounterelement (): x | void {
        if (this.emptyCounter()) return undefined;
        const saveElement = this.elements[this.counter];
        delete this.elements[this.counter];
        this.counter--;
        return saveElement;
    };
}

const createStack = new stack(); //Assim ele retorna unknown.

export default 1;