type Elements = number [];



export class gatheringElements {
    private elements: Elements = [];
    public addElements (Array: Elements): void {
        let firstArray = [];
        let limitOperator = 3;
        for (let i = 0; i <= limitOperator; i++) {
            firstArray.push(Array);
            console.log(firstArray);
        };

    };

    public displayElements (): void {
        console.log(this.addElements([]));
    };

}

const callClass = new gatheringElements();
callClass.addElements([12, 2, 3]);

export default 1;