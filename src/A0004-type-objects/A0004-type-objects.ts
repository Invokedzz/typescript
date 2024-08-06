const objA: {chaveA: string, chaveB: string, readonly chaveC?: string} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
}

objA.chaveA = 'Another value';
objA.chaveB = 'Hmmm analysis';
console.log(objA);