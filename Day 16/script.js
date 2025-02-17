// 1️⃣ Criando um array com três frutas
let frutas = ['Maçã', 'Banana', 'Laranja'];
console.log(frutas);


// 2️⃣ Adicionando uma nova fruta ao final do array
frutas.push('Manga');
console.log(frutas);


// 3️⃣ Removendo a última fruta do array
frutas.pop();
console.log(frutas);

// 4️⃣ Adicionando uma fruta no início do array
frutas.unshift('Uva');
console.log(frutas);

// 5️⃣ Removendo a primeira fruta do array
frutas.shift();
console.log(frutas);

// 6️⃣ Encontrando a posição de uma fruta específica
let indice = frutas.indexOf('Banana');
console.log(`A Banana está na posição: ${indice}`);

// 7️⃣ Removendo um item específico do array
if (indice !== -1) {
  frutas.splice(indice, 1); // Remove a fruta na posição encontrada
}
console.log(frutas);

// 8️⃣ Criando um novo array com uma parte do array original
let novasFrutas = frutas.slice(0, 2); // Pegando os dois primeiros elementos
console.log(novasFrutas);
