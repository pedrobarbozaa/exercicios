let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (i=0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Some todos os valores contidos no array e imprima o resultado;
let sum = 0
for (i=0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum)
// Calcule e imprima a média aritmética dos valores contidos no array;
let avg = sum / numbers.length
console.log(avg)
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (avg > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higher = 0
for (i=0; i < numbers.length; i++) {
    if (numbers[i] > higher) {
        higher = numbers[i]
    }
}
console.log(higher)
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smaller = numbers[0]
for (i=0; i < numbers.length; i++) {
    if (numbers[i] < smaller) {
        smaller = numbers[i]
    }
}
console.log(smaller)
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let evenNumbers = 0
for (i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        evenNumbers++
    }
}
console.log(evenNumbers)
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let i = 1; i <= 25; i++) {
    array.push(i);
}
console.log(array);
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (i=0; i < array.length; i++){
    console.log(array[i] / 2)
}
