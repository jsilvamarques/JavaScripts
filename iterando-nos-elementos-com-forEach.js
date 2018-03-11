var nomes = ['João', 'Pedro', 'Maria', 'José']

console.log('For tradicional')
for(var i = 0; i < nomes.length; i++){
	console.log('Nomes[', i, ']=', nomes[i]);
}

console.log('ForEach')
nomes.forEach(function(e) {
	console.log(e);
});