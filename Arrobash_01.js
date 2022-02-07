/ Exercicio Arrobash

// Primeira possibilidade


function solucao(textoCodificado) {

  let palavra = "";

  for (i = 0; i < textoCodificado.length; i+=4) {
    const codigo = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2] + textoCodificado[i+3];
    console.log(codigo);
      if (codigo === "####") {
          palavra += "P"
      } else if (codigo === "##@#") {
          palavra += "A"
      } else if (codigo === "#@##") {
          palavra += "U"
      } else if (codigo === "#@@#") {
          palavra += "L"
      } else if (codigo === "@###") {
          palavra += "O"
      } else if (codigo === "@#@#") {
          palavra += "N"
      } else if (codigo === "@@##") {
          palavra += "D"
      } else if (codigo === "@@@#") {
          palavra += "R"
      } else if (codigo === "@@@@") {
          palavra += "E"
      }
 
  }
   console.log(palavra);
} 
solucao("######@##@###@@#@#####@#@#@#@@##@@@#@@@@@####@@###@#");