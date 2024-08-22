export class someNumbers {
    constructor (
        private num: number,
    ) {};

    private addNumbers (value: number): number {
        return this.num + value;
    };

    public showResult (): void {
        console.log(this.addNumbers(10));
    };

}

export class someNumbersAgain {
    constructor (
        private num: string [],
    ) {};

    private addNumbersAgain (value: string []): string [] {
        let limit = 5;
        for (let i = 0; i <= limit; i++) {
            if (i >= limit) break;
            value.push('*');
            this.num.push(value[i]);
            console.log(this.num);
        };

        return this.num;

    };

    public getAccess (): string [] {
        return this.addNumbersAgain(['*']);
    };
}

//const callClass = new someNumbersAgain([]);
//callClass.getAccess();

// const callClass = new someNumbers(10);
// callClass.showResult();

type getData = {
    value: number [],
    getDate?: string [],
}
export class someStrings <x, a> {
    private getdata: getData = {
        value: [],
    };

    constructor (
        private databaseInfo: x,
        private databaseRequest: a,
    ) {};

    private accessDatabase (value: a): a | string [] {
        if (!this.databaseRequest) return this.getdata.value = [];
        return this.databaseRequest = value;
    };

    private receiveInfo (): x {
        return this.databaseInfo;
    };

    public displayInfoandRequest (value: a): void {
        console.log(this.receiveInfo(), this.accessDatabase(value))
    };
}

export default 1;