// Segunda possibilidade


function solucao(textoCodificado) {

const relacao = {
      "####": "P",
      "##@#": "A", 
      "#@##": "U",
      "#@@#": "L",
      "@###": "O",
      "@#@#": "N",
      "@@##": "D",
      "@@@#": "R",
      "@@@@": "E",
      };

  let palavra = "";

  for (i = 0; i < textoCodificado.length; i+=4) {
    const codigo = textoCodificado[i] + textoCodificado[i+1] + 
    textoCodificado[i+2] + textoCodificado[i+3];
      palavra += relacao[codigo]
      console.log(codigo);

  }
   console.log(palavra);
}
solucao("######@##@###@@#@#####@#@#@#@@##@@@#@@@@@####@@###@#");