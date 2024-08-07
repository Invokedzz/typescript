function add (a: number, b: number): number {
    return a + b;
}

function conCat (a: string, b: string | number): string | number {
    return a + b;
}

console.log(add(10, 2));
console.log(conCat('10', 20));