export class Products {
    constructor (
       public name: string,
       public material: string,
    ) {};

    public callName (): string {
        return this.name;
    }

    public callMaterial (): string {
        return this.material;
    }

}

export class anotherProduct extends Products {
    constructor (
        name: string,
        material: string,
        private room: number,
    ) {
        super(name, material);
        this.room = room;
    }

    callMaterial(): string {
        const result = super.callMaterial();
        return result;
    }

   public callRoom (): void {
        const callingRoom = this.room;
        console.log(callingRoom);
    }

};

const callinganotherProduct = new anotherProduct('Wood', 'Tree', 1);
callinganotherProduct.callRoom();


export default 1;