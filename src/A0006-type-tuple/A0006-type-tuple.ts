// Tuple:

const clientData: [number, string] = [1, 'Peter'];
const clientData2: [number, string, string] = [2, 'Pato', 'Careca'];
const clientData3: [number, string, ...string[]] = [10, 'Louis', 'Lane']; 

clientData[0] = 1000;
clientData[1] = 'Chico';
console.log(clientData);
console.log(clientData2);
console.log(clientData3);

const array1: readonly string[] = ['Peter', 'Parker'];