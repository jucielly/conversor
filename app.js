
let celcius = prompt("digite aqui a temperatura em C°: ");
celcius = parseFloat(celcius);

let result = ((celcius*1.8) + 32);

document.write("A temperatura " + celcius + " em F° é  " + result);

console.log("o resultado da conversão é " + result);