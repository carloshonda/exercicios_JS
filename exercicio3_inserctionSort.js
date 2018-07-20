//cria variável array com 10 elementos
var a = new Array(10); 
var temp;
var k;

//gera um valor aleatório 10 vezes e atribui o valor para cada posição do array (vetor)
for(var i=0;i<=9;i++){
  var randomico = Math.floor(Math.random()*65536);
  a[i] = randomico;
}

//realiza o metódo inserction sort
for(var j=1;j<=9;j++){
    temp = a[j];
    k = j-1;
  while(k>=0 && temp < a[k]){
    a[k+1] = a[k];
    k--;
  }
  a[k+1] = temp;
}

//imprime os valores ordenados
for(var z=0; z<=9; z++){
  console.log(a[z]);
}