export class TryToLive {
    public addNumber(value: bigint): number {
        return value
            .toString()
            .split('')
            .map(digit => parseInt(digit, 10))
            .reduce((acc, val) => acc + val, 0);
    }

    public findMaxValue(maxA: number, maxB: number): number {
        let maxSum = 0;

        for (let i = 1; i <= maxA; i++) {
            for (let j = 1; j <= maxB; j++) {
                const number = BigInt(i) ** BigInt(j);
                const sum = this.addNumber(number);

                if (sum > maxSum) {
                    maxSum = sum;
                }
            };
        };

        return maxSum;
    }
}

// BigInt é um objeto nativo do JavaScript que permite representar números inteiros maiores que 2^53

const ourNum = new TryToLive();
console.log(ourNum.findMaxValue(100, 100)); // Esperado: 972


export default 1;