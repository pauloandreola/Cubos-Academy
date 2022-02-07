// Objetos

const pessoa = {
  nome: "Paulo",
  idade: 46,
  idade1: 50,
  idade2: 100,
  peso: 90,
  idadeMaior: true,
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.idade1);
console.log(pessoa.idadeMaior);

// condicionais
// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL 
// <= MENOR OU IGUAL
// == IGUAL
// != DIFERENTE
// === COMP DE IGUALDADE *COMPARA CONTEUDO E TIPO*
// !== COMP DE NÃO IDENTICO


if (pessoa.idade > 20) {
  console.log("Essa pessoa é maior que 20 anos.");

} else {
  console.log("Essa pessoa é menor que 20 anos");

};


if (pessoa.idade < 20) {
  console.log("Essa pessoa é menor que 20 anos.");

} else {
  console.log("Essa pessoa é velha");

};


if (pessoa.idade <= 46) {
  console.log("Essa pessoa é menor ou igual a 46 anos.");

} else {
  console.log("Essa pessoa é nova");

};

if (pessoa.idade >= 46) {
  console.log("Essa pessoa é maior ou igual a 46 anos.");

} else {
  console.log("Essa pessoa é nova");

};

if (pessoa.idade == 46) {
  console.log("Essa pessoa tem 46 anos.");

} else {
  console.log("Essa pessoa não tem 46 anos.");

};

if (pessoa.idade != 46) {
  console.log("Essa pessoa não tem 46 anos.");

} else {
  console.log("Essa pessoa tem 46 anos.");

};
  
idade:  "46";//conteúdo de texto em formato de número

if (pessoa.idade === 46) {
  console.log("Essa informação não é a mesma.");

} else {
  console.log("Essa informação é a mesma.");

};

if (pessoa.idade !== 46) {
  console.log("Essa informação é a mesma.");

} else {
  console.log("Essa informação não é a mesma.");

};

// condicional com 3 resultados

if (pessoa.idade1 < 18) {
  console.log("Essa pessoa é menor de idade.");
} else if (pessoa.idade1 < 60) {
  console.log("Essa pessoa adulta.");
} else {
  console.log("Essa pessoa é idosa.");
};

if (pessoa.idade2 < 18) {
  console.log("Essa pessoa é menor de idade.");
} else if (pessoa.idade2 < 60) {
  console.log("Essa pessoa adulta.");
} else {
  console.log("Essa pessoa é idosa.");
};

// condicionais com diversos if esle if

if (pessoa.idade < 10) {
  console.log ("Essa pessoa tem menos de 10 anos")
} else if (pessoa.idade < 20){
  console.log ("Essa pessoa tem menos de 20 anos")
} else if (pessoa.idade < 30) {
  console.log ("Essa pessoa tem menos de 30 anos")
} else if (pessoa.idade < 40) {
  console.log ("Essa pessoa tem menos de 40 anos")
} else if (pessoa.idade < 50) {
  console.log ("Essa pessoa tem menos de 50 anos")
}
  console.log ("Essa pessoa tem", pessoa.idade, "anos")

if (pessoa.idade1 <= 10) {
  console.log ("Essa pessoa tem 10 anos ou menos")
} else if (pessoa.idade1 <= 20){
  console.log ("Essa pessoa tem 20 anos ou menos")
} else if (pessoa.idade1 <= 30) {
  console.log ("Essa pessoa tem 30 anos ou menos")
} else if (pessoa.idade1 <= 40) {
  console.log ("Essa pessoa tem 40 anos ou menos")
} else if (pessoa.idade1 <= 50) {
  console.log ("Essa pessoa tem 50 anos ou menos")
  
}
  console.log ("Essa pessoa tem", pessoa.idade1,"anos") 

if (pessoa.idade2 <= 10) {
  console.log ("Essa pessoa tem 10 anos ou menos")
} else if (pessoa.idade2 <= 20){
  console.log ("Essa pessoa tem 20 anos ou menos")
} else if (pessoa.idade2 <= 30) {
  console.log ("Essa pessoa tem 30 anos ou menos")
} else if (pessoa.idade2 <= 40) {
  console.log ("Essa pessoa tem 40 anos ou menos")
} else if (pessoa.idade2 <= 50) {
  console.log ("Essa pessoa tem 50 anos ou menos")
} else if (pessoa.idade2 <= 60) {
  console.log ("Essa pessoa tem 60 anos ou menos")
} else if (pessoa.idade2 <= 70) {
  console.log ("Essa pessoa tem 70 anos ou menos")
} else if (pessoa.idade2 <= 80) {
  console.log ("Essa pessoa tem 80 anos ou menos")
} else if (pessoa.idade2 <= 90) {
  console.log ("Essa pessoa tem 90 anos ou menos")
} else if (pessoa.idade2 <= 100) {
  console.log ("Essa pessoa tem 100 anos ou menos")
}
  console.log ("Essa pessoa tem", pessoa.idade2, "anos")