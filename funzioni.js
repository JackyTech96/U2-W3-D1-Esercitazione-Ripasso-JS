/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  const calcoloArea = l1 * l2;
  return calcoloArea;
};
let l1 = 5;
let l2 = 10;

console.log("L'area del rettangolo è ", area(l1, l2));

/* ESERCIZIO 2
   Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
   La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
   la loro somma moltiplicata per tre.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  const sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  }
  return sum;
};

let num1 = 3;
let num2 = 3;
console.log("La somma dei numeri è ", crazySum(num1, num2));

/* ESERCIZIO 3
   Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
   Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
  */

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num3) {
  const diff = Math.abs(num3 - 19);
  if (num3 > 19) {
    return diff * 3;
  }
  return diff;
};

let num3 = 20;
console.log("La differenza tra i due numeri è ", crazyDiff(num3));

/* ESERCIZIO 4
   Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
   se n è uguale a 400.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20) & (n <= 100) || n === 400) {
    return true;
  }
};

let n = 400;
console.log(boundary(n));

/* ESERCIZIO 5
   Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
   La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
   ritornare la stringa originale senza alterarla.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  const parolaDaAggiungere = "Epicode";
  if (str.startsWith("Epicode")) {
    return str;
  } else {
    return parolaDaAggiungere.concat(" " + str);
  }
};
let str = "funziona";
console.log(epify(str));

/* ESERCIZIO 6
   Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
   di 3 o di 7. (Suggerimento: usa l'operatore modulo)
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n2) {
  if (n2 <= 0) {
    return false;
  }
  if (n2 % 3 === 0 || n2 % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

let n2 = -24;
console.log("Il numero è multiplo di 3 o di 7? ", check3and7(n2));

/* ESERCIZIO 7
   Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (stringa) {
  return stringa.split("").reverse("").join("");
};

let stringa = "Epicode";
console.log(reverseString(stringa));

/* ESERCIZIO 8
   Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
   La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (stringa2) {
  const words = stringa2.split(" ");

  for (let i = 0; i < words.length; i++) {
    const firstChar = words[i].charAt(0).toUpperCase();
    const lastChars = words[i].substring(1);
    words[i] = firstChar.concat(lastChars);
  }
  return words.join(" ");
};

let stringa2 = "La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.";

console.log(upperFirst(stringa2));

/* ESERCIZIO 9
   Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
   della stringa originale.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (str3) {
  const cut = str3.slice(1, -1);
  return cut;
};
let str3 = "La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale.";

console.log(cutString(str3));

/* ESERCIZIO 10
   Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (numero) {
  const arr = [];
  for (let i = 1; i <= numero; i++) {
    const numeriRandom = Math.floor(Math.random() * 10) + 1;
    arr.push(numeriRandom);
  }
  return arr;
};

console.log(giveMeRandom(5));

// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
