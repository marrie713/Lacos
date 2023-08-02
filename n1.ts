const entrada = require("readline-sync");

try {
    let numero: number = parseInt(entrada.question("Digite o numero: "));
    for(numero; numero >= 0; numero = numero - 2){
        console.log(numero)
    }
} catch (error) {
  console.log('Digite um valor inteiro')  
}
