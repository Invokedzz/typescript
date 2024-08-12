// Singleton - GoF
export class Database {
    private static database: Database;
    private constructor (
       private host: string,
       private user: string,
       private password: string,
    ) {};

    connect (): void {
        console.log(`Connecting: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase (
      host: string,
      user: string,
      password: string,  
    ): Database {
        if (Database.database) return Database.database;
        Database.database = new Database(host, user, password);
        return Database.database;
    }

}

const databaseSystem = Database.getDatabase('LocalHost', 'Root', '123456');

// Não adianta criar mais de uma - a que já existe vai repor. 

databaseSystem.connect();

export default 1;