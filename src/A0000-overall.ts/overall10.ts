export class Arrayanalyser {
    verifysameNumbers (arrayEnter: number []): number [] {
        let arrayFirst: number [] = [];
        for (let value of arrayEnter) {
            if (!arrayFirst.includes(value)) arrayFirst.push(value);
            console.log(arrayFirst);
        };
        return arrayFirst;
    };
}

// Forma de garantir que o array só retorne os valores unicos.

//const arrayAnalyser = new Arrayanalyser();
//arrayAnalyser.verifysameNumbers([1, 1, 2, 3, 1]);

export class newArrayAnalyser {
    verifyNumbers (enterArray: number []): number [] {
        let numbersofArrays = new Set<number> ();
        for (let value of enterArray) {
            numbersofArrays.add(value);
            console.log(numbersofArrays);
        };
        return Array.from(numbersofArrays);
    };

    thisFunction (value: number []): boolean {
        if (value) return true;
        return false;
    };
}

//const classes = new newArrayAnalyser();
//let result = classes.verifyNumbers([1, 1, 2, 3, 1]);
//console.log(classes.thisFunction(result));

export default 1;