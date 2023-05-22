const   numeros = [2, 7, 9];
const   letras  = ["a", "D", "h"];
const   diaSem  = ["lun", "Mie", "SAB"];

console.log(numeros);
console.log(letras);
console.log(diaSem);

console.log("Ahora elimino el segundo elemento de cada vector");
numeros.splice(1,1);
letras.splice(1,1);
diaSem.splice(1,1);
console.log(numeros);
console.log(letras);
console.log(diaSem);
