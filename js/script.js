

//Chiedo all'utente il numero di chilometri che deve percorrere

// Chiedo all'utente la sua età 

// Calcolo il prezzo senza sconti che sarà numero di km * 0,21 euro 

//Se l'utente ha tra 0 e 17 anni il prezzo
// andrà ridotto del 20% 

//Se l'utente ha più di 65 anni il prezzo
// andrà ridotto del 40% 

// Prosecuzione dell'esercizio 

// Descrizione:**
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora finalizzeremo il layout di pagina, in cui l’utente vedrà il form stilizzato e tutto l’output stampato in pagina (il prezzo dovrà sempre essere formattato con massimo due decimali).
// Nota: Se non vi sentite particolarmente creativi, questa (che abbiam visto insieme poco fa, dello screeshot allegato) potrebbe essere un’implementazione da seguire per il secondo milestone.
// Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


// Chiedo all'utente quanti km deve percorrere 

function calcolaPrezzo () { 

const userKm = parseInt (document.getElementById ("kmInput").value);

console.log(userKm)

const userAge = parseInt (document.getElementById ("ageInput").value);

console.log(userAge)

const normPrice =  (userKm * 0.21);
const price20 = ((userKm * 0.21)*0.8); 
const price40 = ((userKm * 0.21)*0.6); 

let price;

if (userAge < 18) {
    price = price20
}

else if (userAge > 65) {
    price = price40;
}

else  {
    price = normPrice;
}

// Convertire il prezzo in euro e centesimi... 

// const formattedPrice = `${Math.floor(price)} euro e ${(price % 1 * 100).toFixed(0)} centesimi`;

const formattedPrice = `${Math.floor(price)} euro e ${(price % 1 * 100).toFixed(0)} cent`;



console.log(price);

document.getElementById("price").innerHTML = formattedPrice;

// Input del Name 

let userName = (document.getElementById ("userNameInput").value);

// Input del SurName 

let userSurname = (document.getElementById ("userSurnameInput").value);

// Stringa Nome Cognome 

document.getElementById("guest").innerHTML = `${userName} ${userSurname}`;

// Carrozza numero...?!?

let carriage = (Math.floor(Math.random() * 11)+1);

document.getElementById("carrozza").innerHTML = carriage;

// Classe Numero...? 

let classe = (Math.floor(Math.random() * 4)+1);

document.getElementById("classe").innerHTML = classe;

}
 


document.addEventListener('mouseup', function () {

    var selectedText = window.getSelection().toString();

    if (selectedText.length > 0) {
        alert('Hai selezionato del testo per truffare le Ferrovie dello Stato?!? ' + "Attenzione! Provare a stampare il biglietto è un reato punibile con una torta in faccia!"); }
})


