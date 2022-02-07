// Invertendo o texto

const novaFrase = "Eu gosto de inverno"

let novaPalavra = "";// Vari[avel palavra p/ vetor
const palavraVetor = [];// Criação de Vetor
for (let i = 0; i < novaFrase.length; i++) {
  if (novaFrase[i] === " ") {
    palavraVetor.push(novaPalavra);
    novaPalavra = "";
    continue;
  }
  novaPalavra += novaFrase[i];
  //Concatenando a string contida em frase dentro de novaFrase caracter por caracter em novaPalavra

}
palavraVetor.push(novaPalavra);
console.log(palavraVetor);
  //Colocando a frase em um vetor
  //As palavas foram sepradas em um vetor

const textoInvertido = [];
for (let i = palavraVetor.length -1; i >= 0; i--) {
  textoInvertido.push(palavraVetor[i]);
}

console.log(textoInvertido);