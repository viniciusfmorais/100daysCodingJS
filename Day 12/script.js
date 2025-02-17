function multiplicar(a, b) {
  return a * b; // Retorna o resultado da multiplicação
}

let resultado = multiplicar(5, 3);
console.log(`O resultado é: ${resultado}`); // O resultado é: 15



const dividir = (x, y) => {
  return y !== 0 ? x / y : "Erro: divisão por zero!";
};

console.log(dividir(10, 2)); // 5
console.log(dividir(8, 0)); // Erro: divisão por zero!


function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}


//1️⃣ Crie uma função tradicional chamada calcularAreaRetangulo, que recebe largura e altura como parâmetros e retorna a área.
//2️⃣ Crie uma arrow function chamada subtrair, que recebe dois números e retorna a subtração entre eles.


// 1️⃣


let largura = parseFloat(prompt("Digite a largura do retângulo:"));
let altura = parseFloat(prompt("Digite a altura do retângulo:"));

console.log(`A área do retângulo é: ${calcularAreaRetangulo(largura, altura)}`);

//2️⃣

const subtrair = (a, b) => a - b;

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

console.log(`A subtração de ${num1} - ${num2} é: ${subtrair(num1, num2)}`);


