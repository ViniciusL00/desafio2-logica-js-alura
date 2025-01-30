// Dias da semana ou fim de semana
diaDaSemana = prompt ('Olá, qual dia da semana está acessando nossa página');

if (diaDaSemana == 'Sábado'){
    alert('Bom fim de semana');
} else if (diaDaSemana == 'Domingo'){
    alert ('Bom fim de semana');
} else {
    alert ('Boa semana');
}

// Números positivos ou negativos
numero = prompt('Digite um número positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

// Pontuação para um jogo
pontuacao = 105;
if (pontuacao >= 100){
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

// Saldo da conta
let saldoConta = 15000 // Saldo da conta
alert(`Seu saldo é de R$ ${saldoConta}.`);