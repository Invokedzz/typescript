interface vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
};

interface vehicle {
    model: string,
    color: string,
};

export class moreVehicles implements vehicle {
    constructor (
        public name: string,
        public year: number,
        public broken: boolean,
        public model: string,
        public color: string
    ) {};

    summary (): string {
        return `Name: ${this.name}`;
    }
}

const randomVehicle = new moreVehicles('car', 2010, false, 'ford', 'blue');
randomVehicle.summary();

const oneVehicle: vehicle = {
    name: 'car',
    year: 2010,
    broken: false,
    model: 'ford',
    color: 'blue',
    summary(): string {
        return `Name: ${this.name}`;
    }
};

console.log(oneVehicle.summary());

// Utilizando interfaces é bem mais tranquilo, mas vamos para os keytypes...

type Bus = {
    brand: string,
    year: number,
    broken: boolean,
    model: string,
    color: string
};

type anotherBus = {
    brand: Bus['brand'],
    year: Bus['year'],
    broken: Bus['broken'],
    model: Bus['model'],
    color: Bus['color'],
};

const superBus: anotherBus = {
    brand: 'Ford',
    year: 2010,
    broken: false,
    model: 'Ford',
    color: 'Blue',
};

console.log(superBus);

/* O propósito principal de usar Bus['property'] em anotherBus é garantir que qualquer alteração no tipo Bus se reflita automaticamente no tipo anotherBus, mantendo assim a consistência entre tipos que têm a mesma estrutura */

/* 
Use type quando precisar de tipos complexos, como uniões, interseções, ou quando estiver criando tipos que não serão estendidos ou implementados diretamente.

Use interface quando estiver definindo a forma de um objeto ou classe, especialmente se você espera que o tipo seja estendido ou implementado por outras partes do código. 
*/