// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// -FUNZIONE pari 
function isEven(number) {
  return number % 2 === 0;
}
// -funzione dispari 
function isOdd(number) {
  return number % 2 !== 0;
}
// -chiedere all utente se pari o dispari tramite prompt 
let userChoice = prompt('Scegli se Pari o Dispari');
console.log('Hai scelto:' + ' ' + userChoice);

let userNumber
// -chiedere all utente di inserire un numero da 1 a 5 tramite prompt
while (true) {
  userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

  if ( userNumber >= 1 && userNumber <= 5) {
    console.log(true)
  } else {
    alert('Scegli un numero da 1 a 5');
  }console.log('Il tuo numero è:' + ' ' + userNumber);
}


// -generare numero random pc math.floor
let computerNumber = Math.floor(Math.random() * 5) + 1;
console.log('Il Bot ha scelto il numero:' + ' ' + computerNumber)

// -fare la somma dei due numeri 
let sum = userNumber + computerNumber;
console.log(sum)

// -SE l'utente sceglie 'pari' e la somma dei numeri è === a % 2 === 0 
if (userChoice === isEven && sum % 2 === 0) {
  console.log('Hai vinto'); //   -ALLORA consol.log ('hai vinto')
} else {
  console.log('Hai perso');// -ALTRIMENTI console.log ('hai perso') 

}




