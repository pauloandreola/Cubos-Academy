//Calculando IMC

let massa = prompt('Digite o seu peso: ');
let altura = prompt('Digite a sua altura: ');

// const massa = 60
// const altura = 1.76

resultado = massa / (altura * altura);
retorno = resultado.toFixed(2);

console.log("O IMC é: ", retorno);

if (resultado >= 39) {
    console.log('Muita atenção, você tem obesidade mórbida');
} else if (resultado >= 29 && resultado < 39) {
    console.log('Cuidado, peso considerado obesidade moderada');
} else if (resultado >= 24 && resultado < 29) {
    console.log('Atenção, Obesidade considerava leve.');
} else if (resultado >= 20 && resultado < 24 ) {
    console.log('Parabéns, peso considerado normal.');
} else if (resultado < 20) {
    console.log('Cuidado, pessoa abaixo do peso.');
};