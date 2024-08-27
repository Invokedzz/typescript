// Objetivo: encontrar o maior divisor primo de 600851475143

export class findNumber {

    public getLargestPrime (num: number) {
    
        while (num % 2 === 0) num /= 2;
    
        while (num % 3 === 0) num /= 3;
    
        for (let i = 5; i * i <= num; i += 6) {
            while (num % i === 0) num /= i;
            while (num % (i + 2) === 0) num /= (i + 2);
        };
    
        if (num > 1) return num;
    
        return 1;
    
    }

}

const initClass = new findNumber();
console.log(initClass.getLargestPrime(600851475143));

export default 1;
