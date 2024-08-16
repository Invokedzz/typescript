/*type colors = {
    vermelho: 'red',
    azul: 'blue',
    verde: 'green', 
    amarelo: 'yellow',
    roxo: 'purple',
    laranja: 'orange',
    branco: 'white',
    preto: 'black',
};

const colors: colors = {
    vermelho: 'red',
    azul: 'blue',
    verde: 'green', 
    amarelo: 'yellow',
    roxo: 'purple',
    laranja: 'orange',
    branco: 'white',
    preto: 'black',
}; */

// OU 

type colors = {
    vermelho: string,
    azul: string, 
    verde: string,
    amarelo: string,
    roxo: string,
};

const colorsString = {
    vermelho: 'red',
    azul: 'blue',
    verde: 'green', 
    amarelo: 'yellow',
    roxo: 'purple',
};

function chooseColor (color: keyof colors) {
    if (!color) throw new Error('Choose a proper value');
    return color;
}

console.log(chooseColor('amarelo'));
