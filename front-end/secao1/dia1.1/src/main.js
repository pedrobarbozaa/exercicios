import validator from 'validator';

const inputEl = document.getElementById('input');
const selectorEl = document.getElementById('selector');
const btnEl = document.getElementById('button');
const outputEl = document.getElementById('output')

button.addEventListener('click', () => {
  const inputValue = inputEl.value;
  const selectorValue = selectorEl.value;

  if (selectorValue === 'email') {
    console.log(validator.isEmail(inputValue));
  }
  if (selectorValue === 'url') {
    console.log(validator.isURL(inputValue));
  }
})