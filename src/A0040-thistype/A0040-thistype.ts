export class Calculator {
    constructor (
        public num: number,
    ) {};

    add (n: number): this {
        this.num += n;
        return this;
    };

    subtraction (n: number): this {
        this.num -= n;
        return this;
    };

    multiplication (n: number): this {
        this.num *= n;
        return this;
    };

    division (n: number): this {
        this.num /= n;
        return this;
    };

}

export class subCalc extends Calculator {
    power (n: number): this {
        this.num **= n;
        return this;
    }
}
const calcu = new subCalc(10);
console.log(calcu.add(5).multiplication(2).division(2).power(2));

// Chamar em cadeia só é possível por conta do "this";

class doingRequest {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;
    prepareMethod (method: 'get' | 'post'): this {
        this.method = method;
        return this;
    };

    prepareUrl (url: string): this {
        this.url = url;
        return this;
    };

    sendingData (): boolean | void {
        if (!this.method || !this.url) return false;
        console.log(`Requesting ${this.method} to ${this.url}`);
    };
}


const requestDone = new doingRequest();
requestDone.prepareUrl('http://localhost:3000').prepareMethod('post').sendingData();

