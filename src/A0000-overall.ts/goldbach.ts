// Vamos brincar com o teste de primalidade e a conjectura de Goldbach!!
// Calcule o resto da divisão de n por cada inteiro M com 2 <= M <= N ** 1/2. 
// Continuando... se o resto for 0 em algum caso, então N é composto e encontramos um divisor: e se isso nunca ocorrer, n é primo.
// Já sabemos que: 1 e 2 são primos. Portanto, vamos considerar: 2 <= M <= N ** 1/2.
// A Conjectura de Goldbach é uma afirmação matemática que diz que todo número par maior que 2 pode ser representado como a soma de dois números primos.

export class testePrimalidade {
    constructor (
        private m: number [], // Divisores
        private n: number, // Primos
    ) {};

    public validatingPrimalidade(listadeValores: number []) {
        this.m = [];
        let limit = Math.sqrt(this.n);
        for (let value of listadeValores) {
            if (value > 1 && this.n % value === 0 && value <= limit) {
                this.m.push(value);
                const newValues = this.m.filter((values) => values % this.n !== 0);
                console.log(newValues);
            };
        }
        return;
    }    
}

const callClass = new testePrimalidade([], 100);
callClass.validatingPrimalidade([2, 3, 4, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
export default 1;