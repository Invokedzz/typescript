let q;
if (typeof q === 'undefined') q = 18;
console.log(q * 2);

export function createPerson(firstName: string, lastName?: string) {
    return {
        firstName,
        lastName,
    }
}

export function squareOf(x: number): void {
    let calc = x * x;
    if (!calc) x = 0;
    console.log(calc);
}