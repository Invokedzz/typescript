type someFunctions = {
    (x: number): number;
    (x: number, y: number): number;
    (...args: number []): number;
}

//const argsFunctions: someFunctions = (x: number, y: number, ...args: number []) => {
  //  if (args.length > 0) return args.reduce((ac, val) => ac + val, 0) + x + (y || 0);
   // return x + (y || 0);
//}

//console.log(argsFunctions(1, 2, 3, 4, 5, 6));