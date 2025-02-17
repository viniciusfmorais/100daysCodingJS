/*tipos de loops


//for

for (let i = 1; i <= 6; i++) {
    console.log(`Contagem: ${i}`);
}

//while

let contador = 1;
while (contador <= 5) {
    console.log(`Contagem: ${contador}`);
    contador++;
}

//Do while

let contadors = 1;
do {
    console.log(`Contagem: ${contadors}`);
    contadors++;
} while (contadors <= 5);


//Contagem de números ímpares de 1 a 10 usando for.


for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) { // Verifica se o número é ímpar
        console.log(i); // Imprime o número ímpar
    }
}

// Simulação de login: Use while para continuar pedindo a senha até o usuário acertar.

const senhaCorreta = "1234"; // Defina a senha correta
let tentativa;

while (tentativa !== senhaCorreta) {
    tentativa = prompt("Digite sua senha:"); // Solicita a senha ao usuário
    if (tentativa !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente.");
    }
}

//	Quando queremos garantir pelo menos uma execução.

let numero;

do {
    numero = parseInt(prompt("Digite um número positivo:"));
} while (numero <= 0);

console.log(`Você digitou o número: ${numero}`);

*/



/*
1. Tarefa com for:
Crie um programa que some todos os números de 1 a 50.

Use um loop for para calcular a soma e exiba o resultado no console.


let soma = 0; // Variável para armazenar a soma

for (let i = 1; i <= 50; i++) {
    soma += i; // Soma o valor atual de i à variável soma
}

console.log(`A soma de todos os números de 1 a 50 é: ${soma}`);

2. Tarefa com while:
Peça ao usuário para adivinhar um número secreto entre 1 e 10.

Continue pedindo até que o número correto seja adivinhado.
Quando o usuário acertar, mostre uma mensagem de "Parabéns!".



const numero = "2"; // Defina a senha correta
let tentativa;

while (tentativa !== numero) {
    tentativa = prompt("Adivinhe um número secreto entre 1 e 10:"); // Solicita um numero ao usuário
    if (tentativa !== numero) {
        alert("Numero incorreto. Tente novamente.");
    }
}



/*

3. Tarefa com do...while:
Faça um programa que continue pedindo um número ao usuário até que ele insira o número 0.

Mostre todos os números digitados pelo usuário no console, exceto o 0.



let numeros = []; // Array para armazenar os números digitados
let numero; // Variável para o número digitado pelo usuário

do {
    numero = parseInt(prompt("Digite um número (digite 0 para sair):")); // Solicita o número
    if (numero !== 0) { 
        numeros.push(numero); // Adiciona o número ao array se não for 0
    }
} while (numero !== 0); // Continua enquanto o número não for 0

console.log("Números digitados (exceto o 0):", numeros);

Tarefa 1: Tabuada usando for
Peça ao usuário para digitar um número.
Use um loop for para exibir a tabuada desse número (de 1 a 10) no console.



let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


Tarefa 2: Soma de números usando while
Solicite números ao usuário repetidamente.
Pare de solicitar quando o usuário digitar um número negativo.
Exiba a soma total de todos os números positivos digitados.



let soma = 0;
let numero;

do {
  // Solicita ao usuário para digitar um número
  numero = parseInt(prompt("Digite um número (digite um número negativo para parar):"));
  
  // Se o número for positivo, adiciona à soma
  if (numero >= 0) {
    soma += numero;
  }
} while (numero >= 0);

console.log("Soma total dos números positivos: " + soma);

Tarefa 3: Fatorial usando do...while
Peça ao usuário para digitar um número positivo.
Calcule o fatorial do número usando um loop do...while.
Exiba o resultado no console.

*/

let numero = parseInt(prompt("Digite um número positivo para calcular o fatorial:"));
let fatorial = 1;

if (numero >= 0) {
  do {
    fatorial *= numero;
    numero--;
  } while (numero > 0);
  
  console.log("Fatorial: " + fatorial);
} else {
  console.log("Por favor, digite um número positivo.");
}

