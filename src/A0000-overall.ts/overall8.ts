type somerandomDude = {
    name: string;
    nickname: string;
    age: number;
    cash: number;
    callitsFeatures(): string
}

export class Factory implements somerandomDude {
   constructor (
    public name: string,
    public nickname: string,
    public age: number,
    public cash: number,
   ) {};

   public callitsFeatures(): string {
       return `${this.name}, ${this.nickname}, ${this.age}, ${this.cash}`;
   };
}

const worker = new Factory('Pablo', 'Honey', 30, 200.000);
worker.callitsFeatures();

export default 1;