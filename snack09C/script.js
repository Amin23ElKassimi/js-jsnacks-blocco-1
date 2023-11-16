// Chiedi all'utente due numeri,
//  uno piu' piccolo (due cifre)
//   e uno piu' grande (almeno quattro cifre):
let number1 = parseInt(prompt('Inserisci un numero di 2 cifre'));
let number2 = parseInt(prompt('Inserisci un numero di 4 cifre'));


//    moltiplica il primo numero per 2 finche'
//     non arriva ad essere maggiore del secondo numero.
//      21        2001
// ( ! negazione (number1 > number2) condizione che si vuole raggiungere) oppure   (number1 < number2) 
while (!(number1 > number2)) {
    number1 = number1 * 2;
}
console.log(number1);
console.log(number2);

