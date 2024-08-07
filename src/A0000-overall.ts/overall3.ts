function letsStart (a: number | string, b: number, c: number):void {
    if (typeof a === 'string') console.log(a + b + c);
    if (typeof a !== 'string') console.log(b * c);
}

// letsStart('10', 20, 30);

/* class learningDOM {
    form: HTMLFormElement | null;
    constructor () {
       this.form = document.querySelector('.form') as HTMLElement;
    }

    gettingStarted () {
        this.form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
        });
    }
} => a quick test to learn class + DOM in TypeScript! */

const animeCharacter: {name: string, powerLevel: number} = {
    name: 'Goku',
    powerLevel: 9000,
}

type AnimeCharacter = {
    name: string,
    technique: string,
    anime?: string,
    powerLevel?: number,
}

const obtainAnimeData: AnimeCharacter = {
    name: 'Steve',
    technique: 'Building things',
    anime: 'Minecraft',
    powerLevel: Infinity,
}

class gameCharacter {

    addsomeTime () {
        return new Promise <string> ((resolve) => {
            setTimeout(() => {
                resolve('Wait for the process...');
            }, 5000);
        });
    }

    explainingChar () {
        type wholeContext = {
            name: string,
            gameFranchise: string,
            powerLevel: number,
        }

        const chosenCharacter: wholeContext = {
            name: 'Sephiroth',
            gameFranchise: 'Final Fantasy',
            powerLevel: 9000,
        }

        return chosenCharacter;
    }

    async showMessage () {
        try {
            await this.addsomeTime();
            const characterInfo = this.explainingChar();
            console.log(characterInfo);
        } catch (e) {
            console.error(e);
            return null;
        }
    };

}

/* const seeCharacter = new gameCharacter();
seeCharacter.showMessage(); */

type ID = {id: string};
type username = {username: string};
type usernameID = ID & username;
const user: usernameID = {
    username: 'Pablo',
    id: '784gujwhn',
}

// console.log(user);

class MedievalAdventure {

    loginScreen () {
        type username = {username: string};
        type password = {password: string};
        type valid = {valid: boolean};
        type userInfo = username & password & valid;
        const user: userInfo = {
            username: 'pabloHoney',
            password: '12345@',
            valid: true,
        }
        return user;
    }

    checkUser (): void {
        const user = this.loginScreen();
        if (user.valid) this.seeCharacter();
        if (!user.valid) throw new Error('Invalid user');
    }

    loadingScreen () {
        return new Promise <string> ((resolve) => {
            setTimeout(() => {
                resolve('Loading...');
            }, 1000 * Math.ceil(Math.random()));
        });
    }

   async seeCharacter () {
        await this.loadingScreen();
        
        type classCharacter = {
            Characterclass: string;
            CharacterPower: string;
            CharacterWeapon: string;
        };

        const userCharacter: classCharacter = {
            Characterclass: 'Dwarf',
            CharacterPower: 'Walk around',
            CharacterWeapon: 'butterfly net',
        }

        console.log(userCharacter);

    }

}

const adventure = new MedievalAdventure();
adventure.checkUser(); 

export default 1;