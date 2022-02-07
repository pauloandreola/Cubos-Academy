// Teste parâmetros
// Horário de funcionamento 12hs até as 13:59hs (14hs não pode cosniderar cupom)
// dentro do horário cupom 10% desconto
// se a compra for acima de 100 reais 20% de desconto

function testeValorDesconto(hora, cupom, valorCompra) {
let valorDesconto;
let valorFinal;

if (hora >= 12 && hora < 14 ) {
  if (cupom === "cupom") { 
   if (valorCompra >=100) {
        console.log("O cliente ganhou 20% de desconto com cupom na compra de mais de 100 reais");
          valorDesconto = valorCompra * 20/100;
          valorFinal = valorCompra - valorDesconto;
          console.log("O valor ca compra foi de ",valorCompra," e o valor final ficou em R$ " + valorFinal);
          
    } else {
    console.log("O cliente galhou 10% de desconto");
    valorDesconto = valorCompra * 10/100;
    valorFinal = valorCompra - valorDesconto;
    console.log("O valor da compra foi de R$ ",valorCompra," e o valor a ser pagou ficou em R$ " + valorFinal);
  }  
  } else {
    console.log("Não foi encotrado cupom.");
    console.log("O valor de seu pedido é " + valorCompra);
  }

} else {
  console.log("Fora de horário do uso de cupom.");
  console.log("O valor de seu pedido é " + valorCompra);
} 
}
testeValorDesconto(13,"cupom",201);