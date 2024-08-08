import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('#form') as HTMLFormElement;
const username = document.querySelector('#username') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const repassword = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    hideErrormessage(form);
    checkEmptyFields(username, email, password, repassword);
    checkEmail(email);
    checkPassword(password, repassword);
    if (sendForm(form)) console.log('Send!')
}); 

function hideErrormessage (form: HTMLFormElement) {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function checkEmptyFields (...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value) showErrorMessage(input, 'Insert valid information');
    });
}

function checkEmail (email: HTMLInputElement): void {
    if (!isEmail(email.value)) showErrorMessage(email, 'Insert a valid email');
}

function checkPassword (password: HTMLInputElement, repassword: HTMLInputElement): void {
    if (password.value !== repassword.value) {
        showErrorMessage(password, 'Password and RePassword must be equal');
        showErrorMessage(repassword, 'Password and RePassword must be equal');
    }
}

function showErrorMessage (input: HTMLInputElement, msg: string): void {
    const formField = input.parentElement as HTMLDivElement;
    const errorMSG = formField.querySelector('.error-message') as HTMLSpanElement;
    errorMSG.innerText = msg;
    formField.classList.add(SHOW_ERROR_MESSAGES);
}

function sendForm (form: HTMLFormElement) {
    let parameter = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (parameter = false));
    return parameter;
}

export default 1;