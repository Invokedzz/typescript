export class watchtheGnomes {
    firstInvasion () {
        type maGnomeAttack = {
            storeName: string,
            knightsNearby: number,
            success: boolean,
        };

        const invadeStarbucks: maGnomeAttack = {
            storeName: 'Starbucks Coffee',
            knightsNearby: 1,
            success: true,
        };

        return invadeStarbucks;

    }

    gatheringInfo_FirstInvasion () {
        return new Promise <void> ((resolve) => {
            setTimeout(() => {
                resolve();
            }, Math.ceil(Math.random() * 2));
        });
    }

   async checkProgress () {
        try {
            await this.gatheringInfo_FirstInvasion();
            const preparingInvasion = this.firstInvasion();
            if (preparingInvasion.success) this.secondInvasion();
        } catch (err) {
            console.error(err);
            throw new Error('Something bad happened!');
        }
    }

    secondInvasion () {

    }

}


export default 1;