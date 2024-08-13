export class Car {
    private readonly engine = new Engine();

    on (): void {
        this.engine.on();
    }

    stop (): void {
        this.engine.stop();
    }

}

export class Engine {
    on (): void {
        console.log("Start your engines!");
    }

    stop (): void {
        console.log("Stop your engines!");
    }

}

const vrum = new Car();
vrum.on();
vrum.stop();

export default 1;