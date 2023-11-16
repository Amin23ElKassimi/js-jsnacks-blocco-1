// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby 
// (createlo voi con almeno 5 nomi), chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.



const newArray = [
    "Amino",
    "Riccardo",
    "Giuseppe",
    "Fraancesco",
    "Giada",
    "Gaia",
   
]
let len = newArray.length;

// ############## CLICK ##############
const search = document.querySelector('#search');
search.addEventListener('click',function() {
let found = false ;
        // --------------- FOR ---------------
        for (var i = 0; i < len; i++) {
            const email = document.getElementById("in-email");

            if (email.value == newArray[i]) {
                console.log("Nome trovato");
                found = true ;
            }
        }
        // --------------- IF ---------------
        if (found == false) {
            console.log("Nome non trovato");
        }

});
