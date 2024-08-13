// O que deve existir num mercado? 
// Produtos = string [];
// Contagem de produtos, soma de preços, a possibilidade de adicionar algo;

export class marketPlace {
    private readonly myproducts: myProduct [] = []; 
    addingProductstotheCart (...products: myProduct []): void {
       for (const product of products) {
            this.myproducts.push(product);
       }
    };

    overallQuantity (): number {
        return this.myproducts.length;
    }

    addtoValue (): number {
        return this.myproducts.reduce((ac, val) => ac + val.productValue, 0);
    }

}

export class myProduct {
    constructor (
       private _productName: string,
       private _productPrice: number,
    ) {};

    get returnName (): string {
        return this._productName;
    };

    get productValue (): number {
        return this._productPrice;
    };

}

const analysis = new myProduct('Trash can', 10);
const analysis2 = new myProduct('Garbage', 20);
const coffee = new marketPlace();
coffee.addingProductstotheCart(analysis, analysis2);
console.log(coffee.overallQuantity());
console.log(coffee.addtoValue());
console.log(coffee);
export default 1;