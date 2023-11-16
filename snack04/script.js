// Ciclare per i primi 100 numeri 
// e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.

const array = [];

for ( let index = 0; index <= 100 ; index++){
    if (index % 7 === 0 || index % 8 === 0){
        array.push(index);
    }
}
console.log(array);

    