//declara variáveis contar votos
var a = 0;
var b = 0;

// do while para realizar votação enquanto título for maior que 0
do {
  var titulo = prompt("Digite seu título de eleitor");
  // para o código caso título menor que 0 - não pergunta voto para quem entrar com título menor que 0
  if (titulo < 0) {
    break;
  } else {
    // faz a votação aceitando valores 1 e 2 e gravando nas variáveis a e b
    var voto = parseInt(
      prompt("Digite 1 para votar no José \n Digite 2 para votar no João")
    );
    if (voto == 1) {
      a = a + 1;
    } else if (voto == 2) {
      b = b + 1;
    } else {
      alert("valor não permitido");
    }
  }
} while (titulo >= 0);

//imprime no console o resultado da eleição
console.log("Candidato A:" + a + "votos /n Candidato B:" + b + "votos");