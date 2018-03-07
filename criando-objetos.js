var fox = { cor: 'prata', modelo: 'Fox', fabricante: 'VW'}

console.log('fox: ', fox);
console.log(typeof fox);

console.log('Code do fox: ', fox.cor);
//pintando o fox
fox.cor = 'Branco';
console.log('Fox depois de pintado: ', fox.cor);
console.log('Modelo:', fox['modelo']);

//adicionando novo parametro no objeto
fox.peso = 1000;
console.log(fox);

//propriedade que não existe (retorna undefined)
console.log('Potência', fox.potencia);

//definindo uma função como atributo do objeto
fox.ligar = function() { console.log('Ligando o carro!')};
console.log(fox);

//chamando a função
fox.ligar();

var celta = {
	cor: 'Branco',
	modelo: 'Celta',
	fabricante: 'GM',
	ligar: function(){
		console.log('Ligando o carro!!!!')
	}
};

console.log('Celta>>>', celta);
celta.ligar();