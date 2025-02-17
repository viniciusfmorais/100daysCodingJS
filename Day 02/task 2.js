/*
Tarefa 2: Modificando Arrays e Objetos com const
Crie um array com const contendo três números.
Adicione mais um número ao final do array.
Substitua um dos números existentes no array.
Tente reatribuir o array inteiro para outro valor. O que acontece?

*/
console.log("task 2.");
// Array com const
const frutas = ["maçã", "banana"];
console.log("Array inicial:", frutas); // ["maçã", "banana"]

frutas.push("laranja"); // Adicionando um elemento
console.log("Após adicionar laranja:", frutas); // ["maçã", "banana", "laranja"]

frutas[1] = "uva"; // Alterando um elemento existente
console.log("Após alterar banana para uva:", frutas); // ["maçã", "uva", "laranja"]

// Objeto com const
const pessoa = {
    nome: "Vinicius",
    idade: 34
};
console.log("Objeto inicial:", pessoa); // { nome: "Vinicius", idade: 25 }

pessoa.idade = 35; // Alterando uma propriedade
console.log("Após alterar idade:", pessoa); // { nome: "Vinicius", idade: 26 }

// Tentativa de reatribuir o array ou objeto (gera erro)
// frutas = ["melancia"]; // Erro
// pessoa = { nome: "Outro", idade: 30 }; // Erro
