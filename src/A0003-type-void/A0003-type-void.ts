function noReturn (...args: Array<string>): void {
    console.log(args.join(''));
}

const person = {
    nome: 'Louis',
    sobrenome: 'Lane',
    
    showName (): void {
        console.log(this.nome + '' + this.sobrenome);
    }
}

person.showName();
noReturn('Vasco', 'da gama');

export { person };

// Void quer dizer que não vai retornar nada. Ou seja: sem return.