// Protected pode ser acessado na classe em que foi criado e nas respectivas subclasses.
export class myCompany {
    constructor (
       public nameEmployee: string,
       public numberEmployee: number,
       protected employeePergroup: string [],
    ) {
        this.nameEmployee = nameEmployee;
        this.numberEmployee = numberEmployee;
        this.employeePergroup = employeePergroup;
    };

    public joinEmployees (newemployees: string []): void {
        const limit = 3;
        for (let i = 0; i <= limit; i++) {
            this.employeePergroup.push(newemployees[i]);
            console.log(this.employeePergroup);
        }
    }

    public checknumberofEmployees (): number {
        if (this.numberEmployee <= 0) throw new Error('Insert a valid number of employees');
        return this.numberEmployee;
    }

    public OldemployeesName (): string {
        return this.nameEmployee;
    }

}

export class subCompanies extends myCompany {}

const creatingCompany = new myCompany('Chico, Thom Yorke', 10, []);
creatingCompany.joinEmployees(['Depression', 'Anxiety', 'Sad thoughts', 'An empty feeling']);

export default 1;