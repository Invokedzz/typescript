let x: unknown = 10;
if (typeof x === 'number') console.log(x);

let y: unknown = 20;
if (typeof x === 'number' && typeof y === 'number') console.log(x + y);

// Quando declaramos algo como "unknown" precisamos analisar o seu tipo "typeof" antes de manusearmos ele. 

// No primeiro caso, veja que eu digo "se o tipo de x for igual a número, exiba ele".

// Já no segundo caso, com mais uma variável, eu faço o seguinte: "se x for igual a um número e y também, me mostre a soma de ambos."