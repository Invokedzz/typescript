export class happyTriangle {
    constructor (
        private element: string,
        private elementt: string,
    ) {};

    public creatingtheTriangle (): void {
        let limit = 5;
        for (let q = 0; q <= limit; q++) {
            this.element += '*';
            console.log(this.element);
        }
    };

    public creatingmoreTriangles (): void {
        let lim = 0;
        for (let y = 5; y >= lim; y--) {
            this.elementt = this.elementt.slice(0, -1); 
            console.log(this.elementt);
        } 
    }

};

// NÃO ENTENDO PORQUE EM UM PODE FAZER NORMALMENTE, E NO OUTRO NÃO. ENFIM A HIPOCRISIA!!!!!!!!!!!!!!!!!!!!!!

const startingtheTriangle = new happyTriangle('*', '*******');
startingtheTriangle.creatingtheTriangle();
startingtheTriangle.creatingmoreTriangles();