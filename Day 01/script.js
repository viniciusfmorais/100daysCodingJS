/*
// Exibe mensagem no console
console.log("Olá, mundo! Este é meu primeiro código em JavaScript.");

// Adiciona funcionalidade ao botão
document.getElementById("meuBotao").addEventListener("click", function () {
  alert("Você clicou no botão! Parabéns!");
});

// Variáveis em JavaScript
let nome = "Vinicius"; // Armazena um nome
let idade = 34;        // Armazena uma idade
let gostaDeProgramar = true; // Armazena um valor booleano (verdadeiro/falso)

// Exibe as variáveis no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Gosta de programar?", gostaDeProgramar);

// Fazendo cálculos simples
let numero1 = 10;
let numero2 = 20;
let soma = numero1 + numero2;

// Fazendo Calculos
console.log("A soma de", numero1, "e", numero2, "é:", soma);

// Perguntando nome e desejando msg positiva
let nomeUsuario = prompt("Qual é o seu nome?");
alert("Olá, " + nomeUsuario + "! Seja bem-vindo ao JavaScript!");


//Exercicio 1 perguntar o nome e responder msg dependendo da hora
let nomeUsuario2 = prompt("Qual é o seu nome?");
let dataAtual = new Date();
let hour = dataAtual.getHours();

if (hour < 12) {
    alert("Bom dia, " + nomeUsuario2 + "!");
}   else if  (hour >= 12 && hour <= 18 ) {
        alert("Boa Tarde, " + nomeUsuario2 + "!" );
}   else  {
        alert("Boa Noite, " + nomeUsuario2 + "!");
}

//Exercicio que pergunta 2 numes para usuario e soma

*/

let num1 = parseFloat(prompt("Por favor, digite o primeiro número!"));
let num2 = parseFloat(prompt("Por favor, digite o segundo número!"));
let operacao = prompt("Qual operação deseja realizar? (soma, subtração, multiplicação, divisão)");

let resultado;

if (operacao === "soma") {
    resultado = num1 + num2;
} else if (operacao === "subtração") {
    resultado = num1 - num2;
} else if (operacao === "multiplicação") {
    resultado = num1 * num2;
} else if (operacao === "divisão") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        resultado = "Erro: Não é possível dividir por zero.";
    }
} else {
    resultado = "Operação inválida!";
}

alert("O resultado é: " + resultado);