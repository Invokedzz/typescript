type Age = number;
type Person = {
    name: string,
    age: Age,
    cash: number,
    color?: allColors,
};

type colorRGB = 'Red' | 'Green';
type colorMYK = 'Magenta' | 'Blue';
type allColors = colorMYK | colorRGB;

const person: Person = {
    age: 200,
    name: 'Pablo Honey',
    cash: 200_000,
    color: 'Red',
}

export function setAll (person: Person, color: allColors) {
    return {...person, color: color};
}

console.log(setAll(person, 'Magenta'));

export default 1;