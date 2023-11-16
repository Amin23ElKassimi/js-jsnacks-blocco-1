
// Chiedi un numero di 7 cifre all'utente 

const number = prompt('Inserisci un numero di 7 cifre');

// e calcola la somma di tutte le cifre che compongono il numero.
 
const Digit0Str = number.charAt(0);
const Digit0Num = Number(Digit0Str);
 
const Digit1Str = number.charAt(1);
const Digit1Num = Number(Digit1Str);

const Digit2Str = number.charAt(2);
const Digit2Num = Number(Digit2Str);

const Digit3Str = number.charAt(3);
const Digit3Num = Number(Digit3Str);

const Digit4Str = number.charAt(4);
const Digit4Num = Number(Digit4Str);

const Digit5Str = number.charAt(5);
const Digit5Num = Number(Digit5Str);

const Digit6Str = number.charAt(6);
const Digit6Num = Number(Digit6Str);

const summResult = (Digit0Num + Digit1Num + Digit2Num + Digit3Num + Digit4Num + Digit5Num + Digit6Num);
console.log(summResult);
