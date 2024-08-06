export function createError (): never {
    throw new Error('A generic error!');
}

// O never quer dizer que nunca haverá retorno. Isso nos faz lembrar do void, mas o void apenas diz que não haverá retorno. O never pode ser usado em loops e mensagens de erro.