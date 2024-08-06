// Array<T> - T[]
export function multiplicationArgs(...args: Array<number>) {
    return args.reduce((ac, value) => ac * value, 1);
}

export function alyStrings(...args: string[]) {
    return args.reduce((ac, value) => ac + value);
}

const result = multiplicationArgs(2, 3);
const result2 = alyStrings('Vasco', 'da gama');

console.log(result, result2);