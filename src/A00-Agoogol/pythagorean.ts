export class pythagorean {
    constructor (
    ) {};

    verifyValues (limit: number) {
        let maxSum = 0; // a + b + c = 1000
        for (let a = 1; a < limit; a++) {
            for (let b = a + 1; b < limit; b++) {
                for (let c = b + 1; c < limit; c++) {
                    if (a + b + c === 1000) {
                        if ((a ** 2) + (b ** 2) === c ** 2) {
                            let product = a * b * c;
                            if (product > maxSum) maxSum = product;
                        };
                    };
                };
            };
        };

        return maxSum;

    };

}

const limit = 1000;
const pythagoras = new pythagorean();
console.log(pythagoras.verifyValues(limit));

export default 1;