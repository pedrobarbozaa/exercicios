import validator from 'validator';

const inputEl = document.getElementById('input');
const selectorEl = document.getElementById('selector');
const btnEl = document.getElementById('button');
const outputEl = document.getElementById('output')

btnEl.addEventListener('click', () => {
  const inputValue = inputEl.value;
  const selectorValue = selectorEl.value;

  if (selectorValue === 'email') {
    if (validator.isEmail(inputValue)) {
      outputEl.innerHTML = 'E-mail válido';
    } 
    if (!validator.isEmail(inputValue)) {
      outputEl.innerHTML = 'E-mail inválido';
    }
  }
  if (selectorValue === 'url') {
    if (validator.isURL(inputValue)) {
      outputEl.innerHTML = 'URL válida';
    } 
    if (!validator.isURL(inputValue)) {
      outputEl.innerHTML = 'URL inválida';
    }
  }
})