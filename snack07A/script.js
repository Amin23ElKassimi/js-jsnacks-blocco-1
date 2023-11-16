


// Crea un array vuoto.
const array = [];
// Chiedi per 6 volte all'utente di inserire un numero,
for (let i = 1; i <= 6; i++) {

    const inNumber = parseInt (prompt('Inserisci un numero'));
    //check if the number is even
    if(inNumber % 2 == 0) {
        console.log("The number is even.");
    }
    // se è dispari inseriscilo nell'array.
    // if the number is odd
    else {
        console.log("The number is odd.");
        array.push(inNumber);
    }
}
console.log(array);


