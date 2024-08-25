const obtainNumber = 2478;
const changeValue = obtainNumber.toString() // Transforma nosso valor em string;
.split('') // Divide cada termo do nosso número (string): '2', '4', '7', '8'.
.map(value => parseInt(value)) // Volta a transformação em inteiro;
.reduce((ac, val) => ac + val, 0); // Soma todos os termos (2, 4, 7, 8). Resultado = 21.


console.log(changeValue);