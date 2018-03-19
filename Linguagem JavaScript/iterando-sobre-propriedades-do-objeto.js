var joao = {
	nome: 'João',
	idade: 25,
	endereco: {
		logradouro: 'Av Brasil',
		numero: 100,
		complemento: 'Apto 202',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

for(var prop in joao){
	console.log(prop, '->', joao[prop]);

	if(prop === 'idade'){
		console.log('Achei o valor:', prop, ' que é ', joao[prop]);
		console.log('Sendo assim vamos parar o for...')
		break;
	}

}