const obtainNumber = 2478;
const changeValue = obtainNumber.toString() // Transforma nosso valor em string;
.split('') // Divide cada termo do nosso número (string): '2', '4', '7', '8'.
.map(value => parseInt(value)) // Volta a transformação em inteiro;
.reduce((ac, val) => ac + val, 0); // Soma todos os termos (2, 4, 7, 8). Resultado = 21.

export class verifyNumbers {
    public addValue (a: bigint): number {
        return a
        .toString()
        .split('')
        .map(ourValue => parseInt(ourValue, 10))
        .reduce((ac, val) => ac + val, 0);
    };

    public testMax (maxX: number, maxY: number): number {
        let maxValue = 0;
        for (let a = 1; a <= maxX; a++) {
            for (let b = 1; b <= maxY; b++) {
                const newValue = BigInt(a) ** BigInt(b);
                const checkValue = this.addValue(newValue);
                if (checkValue > maxValue) maxValue = checkValue;
            };
        };

        return maxValue;

    };

}

const maxX = 200;
const maxY = 200;
const getClass = new verifyNumbers();
console.log(getClass.testMax(maxX, maxY));