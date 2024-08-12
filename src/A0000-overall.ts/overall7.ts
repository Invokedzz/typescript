export class verifyAccount {
    private static account: verifyAccount;
    private constructor (
        private name: string,
        private nickname: string,
        private password: string,
    ) {};

    public connectionwithAccount (): void {
        console.log(`${this.name}, ${this.nickname}, ${this.password}`);
    }

    static obtainuserDatabase (
        name: string,
        nickname: string,
        password: string,
    ): verifyAccount {
        if (verifyAccount.account) return verifyAccount.account;
        verifyAccount.account = new verifyAccount(name, nickname, password);
        return verifyAccount.account;
    }

}

const accountSystem = verifyAccount.obtainuserDatabase('Herry', 'Kane', '139-e');
accountSystem.connectionwithAccount();

export class applyDatabase {
    private static access: applyDatabase;
    private constructor (
        private hostPlace: string,
        private passwordAccess: string,
        private itsValid: boolean,
    ) {};

    public viewInformations (): void {
        console.log(`${this.hostPlace}, ${this.passwordAccess}, ${this.itsValid}`);
    }

    static enterDatabase (
        hostPlace: string,
        passwordAccess: string,
        itsValid: boolean,
    ): applyDatabase {
        if (applyDatabase.access) return applyDatabase.access;
        applyDatabase.access = new applyDatabase(hostPlace, passwordAccess, itsValid);
        return applyDatabase.access;
    }

}

const vascoGama = applyDatabase.enterDatabase('Interwebs', 'URUBUDOPIX123', true);
vascoGama.viewInformations();

export default 1;