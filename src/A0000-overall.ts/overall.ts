class Analysis {
    game: string;
    year: number;
    constructor () {
        this.game = 'Nier Replicant';
        this.year = 2010;
    }

    bestGame () {
        return new Promise((resolve, reject) => {
            if (this.game === 'Nier Replicant') {
                resolve({
                    success: true,
                    msg: 'Yes! This game is awesome!',
                });
            }

            if (this.game !== 'Nier Replicant') {
                reject({
                    success: false,
                    msg: "I'm talking about Nier Replicant!",
                });
            }

        });
    }

    yearLaunch () {
        return new Promise((resolve, reject) => {
            if (this.year === 2010) {
                resolve({
                    success: true,
                    msg: 'Yeah. Right!',
                });
            }

            if (this.year !== 2010) {
                reject({
                    success: false,
                    msg: "That's wrong!!",
                });
            }

        });
    }

   async receiveMessage () {
        try {
            const messageReceived = await this.bestGame();
            const yearReceived = await this.yearLaunch();
            console.log(messageReceived, yearReceived);
        } catch (err) {
            console.error(err);
            return;
        }
    }
    
}

//const createdClass = new Analysis();
//createdClass.receiveMessage(); 

function obtainNumbers (a: number, b: number, c: number): void {
    const addition: number = a + b + c;
    console.log(addition);
}

//obtainNumbers(10, 2, 3);

function obtainStrings (firstWord: string, secondWord: string): void {
    const stringsAddition = firstWord + secondWord;
    console.log(stringsAddition);
}

const radioheadAlbum: {name: string, data: string, songs?: string[]} = {
    name: 'OK Computer',
    data: '21 May 1997',
    songs: ['No Surprises', 'Karma Police'],
}

//console.log(radioheadAlbum);

//obtainStrings('a', 'b');