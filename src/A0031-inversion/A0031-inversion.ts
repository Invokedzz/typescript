export class Rectangle {
    private _triangle: Triangle | null = null;
    constructor (
        private _username: string,
        private _password: string,
    ) {};

    get actualPassword (): string {
        return this._password;
    };

    get actualUsername (): string {
        return this._username;
    };

    set triangleInfo (triangle: Triangle | null) {
        this._triangle = triangle;
    };

    get triangleValue (): Triangle | null {
        return this._triangle;
    };
}

export abstract class Triangle {
    constructor (
        public _triangle: string,
    ) {};

    get anothertriangleValue (): string {
        return this._triangle;
    }
}

export default 1;