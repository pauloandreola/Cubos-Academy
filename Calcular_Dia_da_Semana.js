// calcular dia da semana para frente
// referência com Domingo

function diaDaSemana (dias) {
  const resto = dias % 7;

  if (resto == 0) {
    console.log("Domingo")
  } else if (resto == 1) {
    console.log("Segunda")
  } else if (resto == 2) {
    console.log("Terça")
  } else if (resto == 3) {
    console.log("Quarta")
  } else if (resto == 4) {
    console.log("Quinta")
  } else if (resto == 5) {
    console.log("Sexta")
  } else if (resto == 6) {
    console.log("Sábado")
   
  } 
}
diaDaSemana(23); // Valor inserido vai definir qual dia da semana será