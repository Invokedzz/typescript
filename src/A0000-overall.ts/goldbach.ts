// Vamos brincar com o teste de primalidade e a conjectura de Goldbach!!
// Calcule o resto da divisão de n por cada inteiro M com 2 <= M <= N ** 1/2. 
// Continuando... se o resto for 0 em algum caso, então N é composto e encontramos um divisor: e se isso nunca ocorrer, n é primo.
// Já sabemos que: 1 e 2 são primos. Portanto, vamos considerar: 2 <= M <= N ** 1/2.
// A Conjectura de Goldbach é uma afirmação matemática que diz que todo número par maior que 2 pode ser representado como a soma de dois números primos.

export class testePrimalidade {
    constructor (
        private m: number,
        private n: number,
    ) {};

    public validatingPrimalidade(proporcionalidadeAlgoritmo: number) {
        if (this.m < 4 || this.n <= 1) return 'Insira um valor maior';
        let limit = proporcionalidadeAlgoritmo;
        for (let iterableValue = 1; iterableValue <= limit; iterableValue += 1) {
            if (this.m >= 2 && this.m <= Math.sqrt(this.n)) {
               const NMvalue = this.n % this.m;
               if (NMvalue !== 0) {
                    console.log('N é primo!');
                    return this.n;
               };
               this.m += iterableValue;
            };
        }; // Primeiro valor obtido: N. Preciso de outro valor: então teremos que aplicar essa lógica 2x.
        // Posso fazer iterando vários valores diferentes de M, ou fazer de uma forma mais "estática".
    }    
}

const callClass = new testePrimalidade(10, 0);
callClass.validatingPrimalidade(100);
export default 1;