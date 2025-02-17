// 1️⃣ Criando um array de produtos com objetos
const produtos = [
    { nome: 'Notebook', preco: 3500, categoria: 'Eletrônicos' },
    { nome: 'Teclado Mecânico', preco: 250, categoria: 'Acessórios' },
    { nome: 'Cadeira Gamer', preco: 1200, categoria: 'Móveis' },
    { nome: 'Monitor 24"', preco: 900, categoria: 'Eletrônicos' },
    { nome: 'Mouse Sem Fio', preco: 150, categoria: 'Acessórios' }
];

// 2️⃣ Exibindo os produtos no console
console.log('Lista de Produtos:');
produtos.forEach(produto => {
    console.log(`Produto: ${produto.nome} - Preço: R$${produto.preco}`);
});

// 3️⃣ Criando um novo array com nomes em caixa alta usando map()
const nomesMaiusculos = produtos.map(produto => produto.nome.toUpperCase());
console.log('\nProdutos em caixa alta:', nomesMaiusculos);

// 4️⃣ Filtrando apenas produtos com preço abaixo de R$1000
const produtosAcessiveis = produtos.filter(produto => produto.preco < 1000);
console.log('\nProdutos abaixo de R$1000:');
produtosAcessiveis.forEach(produto => {
    console.log(`Produto: ${produto.nome} - Preço: R$${produto.preco}`);
});
