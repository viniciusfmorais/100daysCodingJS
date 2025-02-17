// Variável com var
var nome = "Vinicius";
console.log(nome); // Vinicius
nome = "Ferro";
console.log(nome); // Ferro

// Variável com let
let idade = 34;
console.log(idade); // 25
idade = 35; // Reatribuir valor
console.log(idade); // 26

// Escopo de bloco com let e const
if (true) {
    let linguagem = "JavaScript";
    const framework = "React";
    console.log(linguagem); // JavaScript
    console.log(framework); // React
}
// console.log(linguagem); // Erro: linguagem não está definida
// console.log(framework); // Erro: framework não está definida



// Array com const
const frutas = ["maçã", "banana"];
console.log(frutas); // ["maçã", "banana"]

// Modificando o array
frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]

// Objeto com const
const pessoa = {
    nome: "Vinicius",
    idade: 34
};
console.log(pessoa); // {nome: "Vinicius", idade: 25}

// Modificando o objeto
pessoa.idade = 35; // Permitido, pois alteramos uma propriedade, não o objeto em si
console.log(pessoa); // {nome: "Vinicius", idade: 26}
