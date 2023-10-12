// #Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// -chiedere all'utente di inserire la parola tramite prompt 
let word = prompt ('inserisci una parola');//-dichiarare una variabile per la parola inserita 
console.log(word)
let reverse = '';       //-dichiarare variabile per parola al contrario

for (let i = word.length -1; i >= 0; i--){//-ciclo for per scomporre le lettere della parola e decrementando stamparla al contrario
    reverse += word[i];
}
console.log (reverse) 

// -condizionali 
if (word === reverse){//-SE la parola dello user è ugaule alla parola al contrario
  console.log("true")     //-ALLORA true
}else {                   //-ALTRIMENTI false
  console.log("false")
}


