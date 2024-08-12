export class staticStuff {
    constructor (
       public textA: string,
    ) {};

    public static methodA () {
        console.log('Hm');
    }

    public callingAnotherthing () {
        console.log(`Hm, so you are ${this.textA}`);
    }

}

const creatingInstance = new staticStuff('Peter Parker');
creatingInstance.callingAnotherthing();

staticStuff.methodA(); // Diferença de um método estático;

export class creatingAnotherclass {
    constructor (
        private num: number,
    ) {};

   private additionx (): number {
        return this.num + 10;
   }

   public triestocallIt (): number {
        return this.additionx();
   }
   
  /* public static callsAddition (): number {
        return this.additionx(); // Pelo visto você não pode utilizar um static para chamar outra function. :(
   } */

}

const creatingInstanceAgain = new creatingAnotherclass(100);
console.log(creatingInstanceAgain.triestocallIt());

export class Person {
    static normalHumanAge = 0;
    static defaultCPF = '000.000.000-00';
    constructor (
        public name: string,
        public nickname: string,
        public humanAge: number,
        public cpfValue: string,
    ) {};

    public creatingaNormalPerson (): Person {
        return new Person (this.name, this.nickname, this.humanAge, this.cpfValue);
    } // Inserimos os parâmetros que definimos para Person de uma vez só aqui. Esses parâmetros são: "name", "nickname", "humanAge" e "cpfValue".

    public static createAnotherPerson (name: string, nickname: string): Person {
        return new Person (name, nickname, this.normalHumanAge, this.defaultCPF);
    } // Veja só que interessante. Static só aceita receber outros statics. Então quando tentamos inserir outros métodos, sendo estes "não statics" - ele dá problema. Note que, foi preciso não só criar métodos static: "normalHumanAge" e "defaultCPF"; como também inserir parâmetros na função relacionados a "name" e "nickname" pois estes não eram static. 

}

const createHumanswithoutReproducing = new Person('Franchesco', 'Virgulini', 70, '111.111.111-22');
console.log(createHumanswithoutReproducing.creatingaNormalPerson());

console.log(Person.createAnotherPerson('Urubu', 'do PIX'));

export class Personpttwo {
    static randomAge = 90;
    static randomCPF = '989.799.300-78';
    constructor (
        private name: string,
        private nickname: string,
        private normalAge: number,
        private normalCPF: string,
    ) {};

    private static getItems (name: string, nickname: string): Personpttwo {
        return new Personpttwo (name, nickname, this.randomAge, this.randomCPF);
    }

    private getPerson (): Personpttwo {
        return new Personpttwo (this.name, this.nickname, this.normalAge, this.normalCPF);
    }

    public displayPerson (): void {
        console.log(this.getPerson());
    }

    public static showItems (): void {
        console.log(this.getItems('Vasco', 'da Gama'));
    }

}

Personpttwo.showItems();
const creatingsomeoneAgain = new Personpttwo('Seu', 'Madruga', 93, '000.000.000-00');
creatingsomeoneAgain.displayPerson();

export default 1;