//  Localizando palavra em um vetor e após achar aplicar o comando break


const listaFrutas = ["banana", "mamão", "maçã", "uva", "melão", "caqui", "laranja"];

for (let fruta of listaFrutas) {
    console.log ("Verificando item: " + fruta);
    if (fruta === "uva") {
    console.log("Existe a palavra ", fruta ,"na lista");
    break
  } 
}

// Filtrar elementos com letra definida
// Push - coloca um item dentro da variavel no final da lista
// POP - retira o item da variavel no final da lsita

const outralista = ["casa", "apartamento", "sítio", "garagem", "loja", "pavilhão", "Armazém"];
var resultado = [];

resultado.push("chalé");
console.log(resultado);
resultado.pop();
console.log(resultado);


// variavel local é uma array dentro da array outraLista, uma array dentro de outra.


for (let local of outralista) {
  if (local[0] ===  "A" || local[0] === "a") {
    resultado.push(local);
  }
}
    console.log(resultado);
    resultado.pop();
    console.log(resultado);
    resultado.pop();
    console.log(resultado);


for (let local of outralista) {
  if (local[1] ===  "A" || local[1] === "a") {
    resultado.push(local);
  }
}
    console.log(resultado);
    resultado.pop();
    resultado.pop();
    resultado.pop();
    console.log(resultado);

for (let local of outralista) {
  if (local[1] ===  "A" || local[1] === "a") {
    resultado.push(local);
  }
}
    console.log(resultado);
    resultado.shift(); // retira o elemento do início da lista
    console.log(resultado);
    resultado.pop(); // retira elemento do final da lista
    console.log(resultado);

for (let local of outralista) {
  if (local[1] ===  "A" || local[1] === "a") {
    resultado.push(local);
  }
}
    console.log(resultado); 

    // limpando a lista (retirando os elementos) da variável resultado com while

  while (resultado.length ) {
    resultado.pop();
}
    console.log(resultado);