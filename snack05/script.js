// L'utente inserisce due parole in successione, con due prompt.

const primaParola = prompt('primaParola');
const secondaParola = prompt('secondaParola');

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (primaParola.length > secondaParola.length) {
    console.log('prima parola più lunga');
} else {
    console.log('seconda parola più lunga');
}


