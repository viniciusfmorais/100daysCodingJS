

//Verificar se um número é positivo ou negativo

let numeros = -5;

if (numeros > 0) {
    console.log("O número é positivo.");
} else if (numeros === 0) {
    console.log("O número é zero.");
} else {
    console.log("O número é negativo.");
}

//Verificar a maioridade

let idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//Validar uma senha

let senha = "12345";

if (senha === "123459") {
    console.log("Acesso permitido.");
} else {
    console.log("Senha incorreta. Acesso negado.");
}

// Par ou impar

let numero = prompt("Digite um número:");

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}

// Aprovacao escolar 

let nota = parseFloat(prompt("Digite sua nota:"));

if (nota >= 6) {
    console.log("Você foi aprovado!");
} else if (nota >= 4 && nota < 6) {
    console.log("Você está de recuperação.");
} else {
    console.log("Você foi reprovado.");
}

//Calculadora Simples

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação: +, -, *, /");

if (operacao === "+") {
    console.log(`O resultado é: ${numero1 + numero2}`);
} else if (operacao === "-") {
    console.log(`O resultado é: ${numero1 - numero2}`);
} else if (operacao === "*") {
    console.log(`O resultado é: ${numero1 * numero2}`);
} else if (operacao === "/") {
    console.log(`O resultado é: ${numero1 / numero2}`);
} else {
    console.log("Operação inválida.");
}

let metas = `
Minhas metas de estudo para os próximos meses:
- Aprender JavaScript avançado.
- Completar o projeto de 100 dias de coding.
- Melhorar minhas habilidades com React.
- Desenvolver um portfólio online.
`;

console.log(metas);
// Output:
// Minhas metas de estudo para os próximos meses:
// - Aprender JavaScript avançado.
// - Completar o projeto de 100 dias de coding.
// - Melhorar minhas habilidades com React.
// - Desenvolver um portfólio online.
