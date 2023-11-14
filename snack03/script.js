
// Scrivo in console i primi 20 numeri, scrivendoli a due a due. 
// es. 0, 2, 4, 6 ...

const ul = document.querySelector('ul.list');

for ( let i = 1; i <= 10 ; i++){

    const mol = i * 2;
    const li = '<li>' + mol + '</li>';
    ul.innerHTML += li;

}

