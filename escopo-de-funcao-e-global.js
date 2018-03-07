var nome = 'AlgaWorks'; // variavel global

var capitalizar = function(){

	// nome é uma variável local à função capitalizar
	var nome = 'AlgaWorks'.toUpperCase();
}

capitalizar();
console.log('Nome: ', nome);

var capitalizar2 = function(){
	nome = nome.toUpperCase();
}

capitalizar2();
console.log('Nome2: ', nome);
