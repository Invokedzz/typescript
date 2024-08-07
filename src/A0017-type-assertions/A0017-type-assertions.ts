// Conditional 
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Non-null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement; // Tem vários outros htmlElement.
body3.style.background = 'Green';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Anything';
input.focus();