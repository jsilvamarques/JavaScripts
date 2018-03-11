var emails = [];
emails.length
emails.push('joao@email.com');
console.log('emails: ' , emails);

emails.push('maria@email.com');
console.log('emails: ' , emails);

emails.push('jose@email.com');
console.log('emails: ' , emails);

emails.pop();
console.log('emails: ' , emails);

var e = emails.pop();
console.log('emails: ' , emails);
console.log('2: ' , e);

emails.push(e);
console.log('emails: ' , emails);

emails.unshift('pedro@email.com');
console.log('emails: ' , emails);

emails.shift();
console.log('emails: ' , emails);



//push(), inclui elementos no fim do array
//pop(), exclui o ultimo elemento do array
//unshift() exclui elementos no inicio do array
//shift() inclui elemento no inicio do array 
