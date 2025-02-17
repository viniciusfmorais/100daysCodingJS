for (let i = 1; i <= 10; i++) {
  if (i === 7) {
      console.log("Número 7 encontrado! Parando o loop.");
      break; // Sai do loop ao encontrar o número 5
  }
  console.log(i);
}


for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
      continue; // Pula os números pares
  }
  console.log(i);
}


/*

Usando break:

Peça para o usuário digitar números.
Se ele digitar 0, interrompa o loop e exiba uma mensagem.
Usando continue:

Faça um loop que imprima os números de 1 a 10.
Mas pule o número 7 sem interromper o loop.

*/


while (true) {
  let numero = parseInt(prompt("Digite um número (digite 0 para sair):"));

  if (numero === 0) {
      console.log("Você digitou 0. Encerrando o programa.");
      break; // Interrompe o loop
  }

  console.log(`Você digitou: ${numero}`);
}


for (let i = 1; i <= 10; i++) {
  if (i === 7) {
      continue; // Pula o número 7
  }
  console.log(i);
}
