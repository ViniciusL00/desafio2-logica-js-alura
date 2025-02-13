# desafio-logica-programação-javascript-2.
 Segundo desafio de logica de programção com Javascript.

1- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!.
diaDaSemana = prompt ('Olá, qual dia da semana está acessando nossa página');

if (diaDaSemana == 'Sábado'){
    alert('Bom fim de semana');
} else if (diaDaSemana == 'Domingo'){
    alert ('Bom fim de semana');
} else {
    alert ('Boa semana');
}

2- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Digite um número positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}

3 -Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.
pontuacao = 105;
if (pontuacao >= 100){
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

4 -Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 15000 // Saldo da conta
alert(`Seu saldo é de R$ ${saldoConta}.`);

5- Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Como você se chama?');
alert(`Seja bem-vindo ${nome}`);

