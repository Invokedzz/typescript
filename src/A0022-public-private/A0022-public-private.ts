export class gnomeAttack {
    public readonly gnome: string;
    public readonly item: string [];
    constructor (
        gnome: string, 
        item: string [],
    ) {
        this.gnome = gnome;
        this.item = item;
    }

    showCharacter (): string {
        return this.gnome;
    }

    showItems (): string [] {
        return this.item;
    }

    showAll (): void {
        const catchCharacter = this.showCharacter();
        const catchItems = this.showItems();
        console.log(catchCharacter, catchItems);
    }

}

//const overView = new gnomeAttack('Crawly', ['Nest', 'White hat', 'Green cloak']);
//overView.showAll();

export class RICK_MORTY {
    
    private async doingtheFetch () {
        try {
        const response = await fetch ('https://rickandmortyapi.com/api/character');
        
        if (!response.ok) {
            throw new Error('Something happened!');
        }

        const data = await response.json();
        return data;

        } catch (err) {
            console.error('Fetch error!');
            return null;
        }

    }

    public receivetheFetch () {
        this.doingtheFetch()
        .then((waiting) => console.log(waiting))
        .catch((err) => console.error(err));
    }

}

//const rickMortyapi = new RICK_MORTY();
//rickMortyapi.receivetheFetch();

export class testingPrivate {
    private readonly cc: cc [] = [];

    findCooperators (cooperator: cc): void {
        this.cc.push(cooperator);
    }

}

export class cc {
    constructor (
        public readonly name: string,
        public readonly nickname: string,
    ) {};
}

const cz = new testingPrivate();
const newCooperator = new cc('Pablo', 'Honey');
cz.findCooperators(newCooperator);
console.log(cz);

export default 1;