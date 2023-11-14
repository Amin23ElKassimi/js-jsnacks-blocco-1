
// Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

// Seleziono l'elemento
const ul = document.querySelector('ul.list');

for ( let i = 1; i <= 5 ; i++){

    const li = '<li class="box box${index}">${index}</li>';
    ul.innerHTML += li;

}