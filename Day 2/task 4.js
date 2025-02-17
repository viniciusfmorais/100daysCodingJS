/*

Tarefa 4: Praticando Tipos e Boas Práticas
Crie uma variável com let e atribua um número.
Altere o valor da variável para uma string.
Tente acessar essa variável fora do bloco onde foi declarada. O que acontece?
Reflita sobre a importância de dar nomes significativos às variáveis.

*/
console.log("task 4.");
let valor = 42; // Declarando um número
console.log("Tipo inicial:", typeof valor); // number

valor = "Agora sou uma string"; // Alterando o valor para uma string
console.log("Tipo após alteração:", typeof valor); // string

if (true) {
    let valor = "Outro valor"; // Novo escopo de bloco
    console.log("Dentro do bloco:", valor); // Outro valor
}

console.log("Fora do bloco:", valor); // Agora sou uma string
