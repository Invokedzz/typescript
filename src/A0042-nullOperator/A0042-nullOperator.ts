type something = {
    title: string,
    data: string,
    songs?: string[],
};

const listofItems: something = {
    title: 'OK Computer',
    data: new Date().toLocaleDateString('en-US'),
    songs: ['No Surprises', 'Karma Police'],
};

console.log(listofItems.songs?.toLocaleString('en-US') ?? 'No songs');
console.log(null ?? 'Vascoooo');

// Forma utilizada para evitar uso excessivo de "IFs". O "??" quer dizer: se o negócio não funcionar, usa o outro negócio.

export default 1;