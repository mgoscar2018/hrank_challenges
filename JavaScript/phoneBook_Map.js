/* 
https://www.hackerrank.com/challenges/linkedin-practice-dictionaries-and-maps/
*/

let fs = require('fs');
let archivo = fs.readFileSync('input01.txt', 'utf-8');
processData (archivo); //Map version
processData2 (archivo); //Object version

function processData(input) { //Versión con MAP
  //Enter your code here
  var entradas = input.split('\n');  
  var l = parseInt(entradas[0]);
  var phoneBook = new Map();
  
  // filling phoneBook
  for (var i = 1; i<=l; i++) {
      var valores=entradas[i].split(' ');
      phoneBook.set(valores[0], valores[1]);
  }
  
  // Searching in phoneBook
  for (var j =l+1; j<entradas.length; j++){
      if(phoneBook.has(entradas[j])){
        console.log(entradas[j] + '=' + phoneBook.get(entradas[j]));
      }
      else console.log('Not found');
  }    
} 

function processData2(input) { //versión con Objetos
    //Enter your code here
    let entrada = input.split('\n');
    let l = Number(entrada[0]);
    let phoneBook = new Object(); //  manera corta: let phoneBook={};

    // Llenado de la agenda
    for (let i=1; i<=l; i++) {        
        let values = entrada[i].split(' ');
        phoneBook[values[0]]=values[1];
    }
    
    //Buscando valores en la agenda  
    for (let x=l+1; x<entrada.length; x++) {
        if (entrada[x] in phoneBook)
          console.log(entrada[x]+'='+phoneBook[entrada[x]]);
        else 
          console.log('Not found');
    }

}
