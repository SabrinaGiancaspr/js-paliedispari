// #Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// #Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//-dichiarare una variabile per la parola inserita 
let word;
//-chiedere all'utente di inserire la parola tramite prompt 
word = prompt ('inserisci parola');
//-creare funzione con un parametro (word)
function isPalindroma (word){
word = word.reverse();          //-fare l'operazione della funzione e invertiamo i caratteri (reverse())
word === word.reverse();                               //-confrontiamo le due parole (word === (word.reverse))
}                           


//-SE la parola è uguale è true
//-ALTRIMENTI è false
//creao variabile peril risultato
