const entrada5 = require("readline-sync");

let numerosDigitados = [];


for (let i = 1; i <= 10; i++) {
  let num = parseFloat(entrada5.question("Digite o numero: " ));
  numerosDigitados.push(num);
}


let maior = numerosDigitados[0];
for (let i = 1; i < numerosDigitados.length; i++) {
  if (numerosDigitados[i] > maior) {
    maior = numerosDigitados[i];
  }
}


let menor = numerosDigitados[0];
for (let i = 1; i < numerosDigitados.length; i++) {
  if (numerosDigitados[i] < menor) {
    menor = numerosDigitados[i];
  }
}


let soma = 0;
for (let i = 0; i < numerosDigitados.length; i++) {
  soma += numerosDigitados[i];
}
let media = soma / numerosDigitados.length;


console.log("O maior numero é: " + maior);
console.log("O menor numero é: " + menor);
console.log("A média dos numeros é: " + media);