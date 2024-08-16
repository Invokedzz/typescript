export abstract class definingCity {
    constructor (
        private country: string,
        private capital: string,
        private population: number,
    ) {};

    private displayCity(): string {
        if (!this.country) return 'Country not defined';
        return `Name: ${this.country} & ${this.capital}`;
    };

    private displayPopulation (): string {
        if (this.population <= 0) return 'Population not defined';
        const birthNum = Math.floor(Math.random() * 1000);
        const birthRate = birthNum * 1000 / this.population;
        return `${this.population} and the birth rate is ${birthRate}%`;
    };

    protected displayEverything (): string {
        return `${this.displayCity()} and ${this.displayPopulation()}`
    }; // Essa bomba só pode ser acessada por outras subclasses

}

export class newElement extends definingCity {
    constructor (
        country: string,
        capital: string,
        population: number,
    ) {
        super(country, capital, population);
    };

    showEverything (): string {
        return super.displayEverything();
    };
}

const element = new newElement('France', 'Paris', 160000);
console.log(element.showEverything());

// Usamos abstract para aquelas classes que vão fornecer "unicamente" propriedades._
