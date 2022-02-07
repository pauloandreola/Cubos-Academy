// Arrays  Vetores

let inc = 0;
const lista = ["parede","piso","telhado"];
const novaLista = ["ceia","aperitivo","cafe","comida","fruta"];


console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);

// While LOOP quando eu não sei o tamanho da lista.

while (inc >= 0  && inc <= 4) {
  console.log(novaLista[inc]);
  inc++
}


while (inc < novaLista.length) {
  console.log(novaLista[inc]);
  inc++
}

// for LOOP Se eu sei o tamanho da lista usar esse //de preferência

for (let inc = 0; inc < novaLista.length; inc++ ) {
  console.log(novaLista[inc]);
}

// Outro for LOOP para passar por todos itens da // lista

//for (let item of lista) {
  //console.log(item)
//}

//for (let item of novaLista) {
  //console.log(item);
//}

// Localizando palavra em um vetor

for (let item of novaLista) {
    if (item === "comida") {
    console.log("Existe a palavra comida na lista");
  }
}