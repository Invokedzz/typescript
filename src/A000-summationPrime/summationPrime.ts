// Find the sum of all the primes below two million.

// Essa aqui foi utilizando o método padrão. Todavia, em termos de velocidade, não é tão eficiente - pois estamos verificando cada termo passado. Ou seja, BigO(n).

export class Primes {
    constructor (
        private num: number,
    ) {};

    isPrime (num: number): boolean {
        if (num === 2) return true;
        if (num <= 1) return false;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        };

        return true;

    };

    verifyPrimes (max: number = 2000000, val: number = 2) {
        for (let i = this.num; i <= max; i++) {
            if (i >= 2000000) break;
            if (this.isPrime(i)) val += i;
        };

        return val;

    }; 
}

const callClass = new Primes(0);
console.log(callClass.verifyPrimes());

// Abaixo, vamos testar um método mais eficiente:

export class Primes2 {
    private primeArray: boolean [] = [];
    constructor (
        private num: number,
    ) {
        this.primeArray = new Array(this.num).fill(true);
        this.primeArray[0] = false;
        this.primeArray[1] = false;
        this.verifyPrime();
    };

    public verifyPrime (): void {
        const limit = Math.sqrt(this.num);
        for (let i = 2; i <= limit; i++) {
            if (this.primeArray[i]) {
                for (let j = i * i; j < this.num; j += i) {
                    this.primeArray[j] = false;
                };
            };
        };
    };

    public sumPrimes () {
        let sum = 0;
        for (let i = 2; i < this.num; i++) {
            if (this.primeArray[i]) {
                sum += i;
            };
        };

        return sum;

    };
}

//const primeClass = new Primes2(2000000);
//console.log(primeClass.sumPrimes());

export default 1;