const nome = 'Reidylla Lima';
const sobrenome = 'dos Santos';
const idade = 22;
const peso = 52;
const altura = 1.80;
let imc; // peso/ (alt*alt)
let anoNascimento;

/*
Reidylla Santos de Lima tem 21 anos, pesa 52 kg
tem 1.8 de altura e seu IMC é de 25.9595
Reidylla Lima nasceu em 1998
*/
imc = (peso / (altura * altura));
anoNascimento = 2020 - idade;
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa ', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em ', anoNascimento);

// Ou posso usar template strings
console.log(`${nome} nasceu em ${anoNascimento}`);
