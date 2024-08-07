let x = 20;
x = 0b1010;

const y = 10;
let a: 100 = 100 as const;
// a agora é tratado como constante. 

const person: {name: string, nickname?: string | number} = {
    name: 'Peter' as const,
    nickname: '93',
}

function chooseColor (color: 'Red' | 'Green' | 'Blue'): string {
    if (!color) throw new Error('No');
    return color;
}

console.log(chooseColor('Green'));

// Module mode
export default 1;