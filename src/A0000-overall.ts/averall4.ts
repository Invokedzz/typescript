function receiveDiffvalues (carlinhos: number, dalva: boolean): boolean | number {
    if (carlinhos) return 0;
    if (dalva) return true;
    return false;
};

console.log(receiveDiffvalues(10, true));

export default 1;