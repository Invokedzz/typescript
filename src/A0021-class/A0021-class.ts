export class Company {
    public readonly employee: string[];
    public readonly leader: string;
    private readonly helpers: Helpers [] = [];
    protected readonly CNPJ: string;
    constructor (employee: string[], leader: string, CNPJ: string) {
        this.employee = employee;
        this.leader = leader;
        this.CNPJ = CNPJ;
    }
    
    public addHelper (helper: Helpers): void {
        this.helpers.push(helper);
    }

}

export class Helpers {
    constructor (public readonly: string, public readonly username: string) {};
}


const firstCompany = new Company(['Appu', 'Homer'], 'Burns', '111111');
const helper = new Helpers('Pablo', 'Honey'); 
// console.log(helper);
firstCompany.addHelper(helper);
console.log(firstCompany);
export default 1;