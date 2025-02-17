function saudacao(nome) {
  return `Olá, ${nome}! Seja bem-vindo.`;
}

console.log(saudacao("Vinicius"));



const saudacao2 = (nome) => `Olá, ${nome}! Seja bem-vindo.`;

console.log(saudacao2("Vinicius2"));



/*arefas Práticas
1️⃣ Função tradicional:

Crie uma função chamada dobrarNumero que recebe um número e retorna o dobro dele.


2️⃣ Arrow function:

Crie uma função soma que recebe dois números e retorna a soma. */

// USANDO FUNCTION TRADICIONAL

function dobrarNumero(numero) {
  return numero * 2;
}

let num = parseFloat(prompt("Digite um número:"));
console.log( `O dobro e  ${dobrarNumero(num)}`);

// USANDO ARROW FUNCTION

const soma = (a, b) => a + b;

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

console.log(`A soma de ${num1} e ${num2} é ${soma(num1, num2)}`);
