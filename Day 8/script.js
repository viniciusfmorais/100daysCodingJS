for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; // Pula os números pares.
    }
    console.log(i);
  }


  for (let i = 1; i <= 20; i++) {
    if (i === 50) {
      console.log("Loop interrompido no número 50.");
      break;
    }
    if (i % 3 === 0) {
      continue; // Pula os números divisíveis por 3.
    }
    console.log(i);
  }


  /*Desafio
Escreva um loop que percorre de 1 a 50 e:
Exibe "Fizz" para números divisíveis por 3.
Exibe "Buzz" para números divisíveis por 5.
Interrompe o loop ao encontrar o número 42. */

  for (let i = 1; i <= 50; i++) {
    if (i === 42) {
      console.log("Loop interrompido no número 42.");
      break; // Sai do loop ao encontrar 42.
    }
    
    if (i % 3 === 0) {
      console.log("Fizz"); // Exibe "Fizz" para números divisíveis por 3.
    } else if (i % 5 === 0) {
      console.log("Buzz"); // Exibe "Buzz" para números divisíveis por 5.
    } else {
      console.log(i); // Exibe o número normalmente se não for divisível por 3 ou 5.
    }
  }