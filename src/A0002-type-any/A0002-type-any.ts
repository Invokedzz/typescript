function showMessage(msg: any) {
    return msg;
}

console.log(showMessage(1));
console.log(showMessage('Hello!'));
console.log(showMessage(true));
console.log(showMessage(['asmr vampiro']));

// Utilize o any apenas em último caso. FUJA dele.