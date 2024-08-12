function gofu () {
    return function (n: number) {
        console.log(n);
        n++;
    }
}

gofu();
