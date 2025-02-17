/* Crie uma variável com var dentro de uma função.
Crie outra variável com let dentro de um bloco (como um if ou for).
Tente acessar as duas variáveis fora de onde foram definidas. O que acontece?.

*/
// var 

console.log("task 1.");
function testeVar() {
    var nome = "Vinicius"; // Escopo de função
    if (true) {
        var nome = "Ferro"; // Redeclara a mesma variável (escopo de função)
        console.log("Dentro do bloco com var:", nome); // Ferro
    }
    console.log("Fora do bloco com var:", nome); // Ferro
}

testeVar();

function testeLet() {
    let idade = 25; // Escopo de função
    if (true) {
        let idade = 30; // Escopo de bloco (diferente do escopo de fora)
        console.log("Dentro do bloco com let:", idade); // 30
    }
    console.log("Fora do bloco com let:", idade); // 25
}

testeLet();

