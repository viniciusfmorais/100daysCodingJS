let pessoa = {
    nome: "Vinicius",
    idade: 25,
    cidade: "São Paulo"
};

console.log(pessoa); 
// { nome: 'Vinicius', idade: 25, cidade: 'São Paulo' }


console.log(pessoa.nome); // "Vinicius"
console.log(pessoa.idade); // 25
console.log(pessoa.cidade); // "São Paulo"


console.log(pessoa["nome"]); // "Vinicius"


pessoa.idade = 35;
console.log(pessoa.idade); // 26


pessoa.profissao = "Desenvolvedor";
console.log(pessoa); 
// { nome: 'Vinicius', idade: 26, cidade: 'São Paulo', profissao: 'Desenvolvedor' }


let usuario = {
    nome: "Ana",
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

console.log(usuario.saudacao()); // "Olá, meu nome é Ana"
 

let carro = {
    marca: "Ferrari",
    modelo: "F320",
    ano: "2025"
};

console.log(carro);

carro.cor = "Vermelho";


console.log(carro);

carro.ano = "2024";

console.log(carro);



carro.detalhes = function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, ano: ${this.ano}, Cor: ${this.cor}`;
};

console.log(carro.detalhes());

carro.marca = "Fusca";
carro.modelo = "88";
carro.ano = "1988";
carro.cor = "Azul";

console.log(carro.detalhes());