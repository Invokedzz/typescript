class returningPromise {
    msg: string;
    constructor () {
        this.msg = 'This is a message for all the mankind!';
    }

    waitsomeSeconds () {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }

    waitmoreTime () {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 4000);
        });
    }


    async gatheringtheFunctions () {
        try {
            await this.waitsomeSeconds();
            await this.waitmoreTime();
            console.log(this.msg);
        } catch (e) {
            console.error(e);
            return null; 
        }    
    }

}

/* const vascodaGama = new returningPromise();
vascodaGama.gatheringtheFunctions(); */

class anotherPromise {
    message: string;
    constructor () {
        this.message = "Let's see...";
    }

    waitforStrings () {
        return new Promise <string> ((resolve) => {
            setTimeout(() => {
                resolve('Resolving...'); // Temos que informar o tipo de resolve. Nesse caso, retornou uma string. Caso não retornarmos nada, é void.
            }, 2000);
        });
    }

    async receiveTrojanHorse () {
        try {
            await this.waitforStrings();
            console.log(this.message);
        } catch (err) {
            console.error(err);
        }
    };

};

/* const proceed = new anotherPromise();
proceed.receiveTrojanHorse(); */