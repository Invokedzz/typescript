export class votingTime {
    constructor (
        private arrayPublic: string [],
        private counter: number,
        private counter2: number,
    ) {};

    public letsVote (participants: string []): string [] | boolean {
        this.arrayPublic = [];
        for (let i = 0; i <= participants.length; i++) {
            if (i >= participants.length) break;
            if (this.arrayPublic.includes(participants[i])) return false;
            this.arrayPublic.push(participants[i]);
            console.log(this.arrayPublic);
        };

        return this.arrayPublic;

    }

    public firstOption (firstChallenger: string, value: number): boolean | number {
        if (this.arrayPublic.length > 0) {
            const numbersofVote = value;
            for (let i = 0; i < numbersofVote; i++) {
                this.counter += 1;
            };
            console.log(`${firstChallenger} has a total of ${this.counter} votes`);
            return this.counter;

        };
        
        return false;
    };

    public secondOption (secondChallenger: string, value: number): boolean | number {
        if (this.arrayPublic.length > 0) {
            const numbersofVote2 = value;
            for (let i = 0; i < numbersofVote2; i++) {
                this.counter2 += 1;
            };

            console.log(`${secondChallenger} has a total of ${this.counter2} votes`);
            return this.counter2;

        };

        return false;

    };


    public analyseCounters (firstChallenger: string, secondChallenger: string): string | boolean {
        if (!this.counter && !this.counter2) return false;
        if (this.counter > this.counter2) return `${firstChallenger} is the winner!`;
        return `${secondChallenger} is the winner!`;
    };


}

const callClass = new votingTime([], 0, 0);
callClass.letsVote(['Peter', 'John', 'Pablo', 'Ana', 'Ana', 'Orleans']);
callClass.firstOption('Joe Biden', 1000000);
callClass.secondOption('Donald Trump', 1000002);
console.log(callClass.analyseCounters('Joe Biden', 'Donald Trump'));

export default 1;