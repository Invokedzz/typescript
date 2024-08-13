export class marketCar {
    private readonly products: Products [] = [];
    insertProducts (...products: Products[]): void {
        for (const product of products) {
            this.products.push(product);
        }
    }

    qtdProducts (): number {
        return this.products.length;
    };

    totalValue (): number {
        return this.products.reduce((add, product) => add + product.priceValue, 0);
    }

}

export class Products {
    constructor (
        private _name: string,
        private _price: number,
    ) {};

    get nameValue (): string {
        return this._name;
    };

    get priceValue (): number {
        return this._price;
    };

}
const product = new Products ('Coffee', 10);
const car = new marketCar();
car.insertProducts(product);
console.log(car);