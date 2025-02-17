/*

Tarefa 3: Calculadora com Variáveis
Crie três variáveis:
Uma chamada numero1 com o valor 10.
Outra chamada numero2 com o valor 5.
Uma terceira chamada operacao com o valor de uma operação matemática, como "soma", "subtração", etc.
Use essas variáveis para calcular o resultado com base na operação definida.
Mostre o resultado no console.

*/
console.log("task 3.");
let numero1 = 10;
let numero2 = 5;
let operacao = "soma"; // Pode ser: soma, subtração, multiplicação, divisão

let resultado;

if (operacao === "soma") {
    resultado = numero1 + numero2;
} else if (operacao === "subtração") {
    resultado = numero1 - numero2;
} else if (operacao === "multiplicação") {
    resultado = numero1 * numero2;
} else if (operacao === "divisão") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operação inválida!";
}

console.log("Resultado da operação:", resultado);

