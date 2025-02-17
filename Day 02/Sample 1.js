function exemploVar() {
    var x = 10;
    if (true) {
        var x = 20; // Sobrescreve a variável anterior
        console.log("Dentro do bloco:", x); // 20
    }
    console.log("Fora do bloco:", x); // 20
}
exemploVar();


function exemploLet() {
    let x = 10;
    if (true) {
        let x = 20; // Essa variável só existe dentro do bloco
        console.log("Dentro do bloco:", x); // 20
    }
    console.log("Fora do bloco:", x); // 10
}
exemploLet();

// Variável com const
const pi = 3.14;
console.log(pi); // 3.14
// pi = 3.14159; // Isso causaria um erro: Assignment to constant variable


// Tentando reatribuir
// pi = 3.14159; // Erro: Assignment to constant variable

const frutas = ["maçã", "banana"];
frutas.push("laranja"); // Adiciona um item à lista
console.log(frutas); // ["maçã", "banana", "laranja"]
