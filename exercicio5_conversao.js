// declara variável de entrada de temperatura em Fahrenheit a, e temperatura em Celsius b
var a = parseFloat(prompt("digite temperatura em Fahrenheit"));
var b 

//função para realizar a conversão
function conversao(a){
  b = ((a-32)*5)/9;
  return b;
}

console.log (conversao(a) + "ºC");