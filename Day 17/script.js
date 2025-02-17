// map()

const numeros = [1, 2, 3, 4, 5, 6];
const dobrados = numeros.map(num => num * 2);
console.log(`Dobrados:`, dobrados); 

// filter()

const pares = numeros.filter(num => num % 2 ===0);
console.log(`numeros pares:`, pares); 

//reduce()

const soma = numeros.reduce((total, num) => total + num, 0);
console.log(`soma total:`, soma);