// Operadores Matemáticos
let num1 = 10;
let num2 = 3;

console.log("Adição:", num1 + num2); // 13
console.log("Subtração:", num1 - num2); // 7
console.log("Multiplicação:", num1 * num2); // 30
console.log("Divisão:", num1 / num2); // 3.333...
console.log("Resto da divisão:", num1 % num2); // 1
console.log("Exponenciação:", num1 ** num2); // 1000

// Operadores de Comparação
let valor1 = 5;
let valor2 = "5";

console.log("Igualdade (==):", valor1 == valor2); // true (compara só o valor)
console.log("Estritamente igual (===):", valor1 === valor2); // false (compara valor e tipo)
console.log("Diferente (!=):", valor1 != valor2); // false
console.log("Estritamente diferente (!==):", valor1 !== valor2); // true
console.log("Maior que (>):", valor1 > 3); // true
console.log("Menor que (<):", valor1 < 10); // true
console.log("Maior ou igual (>=):", valor1 >= 5); // true
console.log("Menor ou igual (<=):", valor1 <= 4); // false



let numero = 5;        // Tipo: Number
let texto = "5";       // Tipo: String

// Estritamente igual (===)
console.log(numero === texto); // false (tipos diferentes: Number e String)

let outroNumero = 5;   // Tipo: Number
console.log(numero === outroNumero); // true (mesmo valor e mesmo tipo)

// Estritamente diferente (!==)
console.log(numero !== texto); // true (tipos diferentes)
console.log(numero !== outroNumero); // false (mesmo valor e tipo)
