const arrayNum: number [] = [1, 2, 3];
const arrayNum2: Array <number> = [1, 2, 3];
console.log(arrayNum, arrayNum2);

function giveaPromise (): Promise <number> {
    return new Promise <number> ((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
            console.log("We are doing a Promise!");
        }, 2000);
    });
}

giveaPromise().then((data) => console.log(data + 1));