// Concatenando Strings

// criando objeto dados

  const dados = {
    nome: "Paulo",
    sobrenome: "Andreola",
    anos: 40,
    anos1: 10,
    altura: 1.75,
    vacinaCovid: true,
    semVacinaCovid: true,
  };

  console.log (dados.nome,"",dados.sobrenome,"tem",dados.anos,"anos.")
 
  console.log (dados.nome + " tem " + dados.anos + " anos")

  let texto = dados.nome + " " + dados.sobrenome;
  console.log(texto);

//String template

if (dados.anos > 20) {
  console.log(`${dados.nome} tem mais de 20 anos`);

} else {
  console.log("Essa pessoa é menor que 20 anos");

};

if  (dados.anos < 18) {
  console.log(`${dados.nome} é menor de idade.`);
} else if (dados.anos < 60) {
  console.log(`${dados.nome} é adulto(a).`);
} else {
  console.log(`${dados.nome} é idoso(a).`);
};

// operadores logicos
// idade mínima para brincar  = 12
// altura mínima para brincar = 1.40
// && E
// || OU
// ! NEGADO

// **** Quando este código estava junto com o calculo do IMC a variável altura declarada na linha 94 era utilizada abaixo no lugar agora da dados.altura****

if (dados.anos >= 12) {
    console.log("Ele tem",dados.anos,"anos de idade, pode brincar");
  if (dados.altura >= 1.40) {
      console.log("Ele tem altura de",dados.altura,"pode brincar");
  } else 
    console.log("Ele não tem altura para brincar");
} else
  console.log("Ele não idade para brincar");


if (dados.anos >= 12 && dados.altura >= 1.40) {
  console.log (`${dados.nome}, pode brincar no parque`);
} else {
  console.log (dados.nome, "não pode brincar no parque");
}

if (dados.anos >= 12 || dados.alutra < 1.40) {
  console.log (`${dados.nome}, tem ${dados.altura} de altura e mesmo assim pode brincar pois tem ${dados.anos} de idade`);

}

if (dados.vacinaCovid) {
  console.log("Pode acessar o estabalecimento");
} else {
  console.log("Não pode acessar o estabelecimento");
}

// No caso abaixo com o ponto de exclamação dentro de dados.vacinaCovid estou invertendo o valor

if (!dados.vacinaCovid) {
  console.log("Não pode acessar o estabelecimento");
} else {
  console.log("Pode acessar o estabelecimento");
}

if (!dados.semVacinaCovid) {
  console.log("Não pode acessar o local");
} 

if (dados.semVacinaCovid) {
  console.log("Não Pode acessar neste local");
}

if (!dados.semVacinaCovid) {
  console.log("Não Pode acessar neste local");
} else {
  console.log("Pode acessar, pois estou invertendo o valor do conteudo");
}