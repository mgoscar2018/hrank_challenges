/*
https://www.hackerrank.com/challenges/linkedin-practice-caesar-cipher
*/

console.log(caesarCipher('middle-Outz',2));
console.log(caesarCipher('www.abc.xy',87));

function caesarCipher(s, k) {
    // Write your code here
    let ns = '';
    let k2 = k%26;
    for (let i=0; i<s.length; i++) {
      let letra=s.charCodeAt(i);
      if (letra>=97 && letra<=122) {
        letra += k2;
        if (letra>122) letra -= 26;        
      } else if (letra>=65 && letra<=90) {
          letra += k2;
          if (letra>90) letra -= 26;          
      }
      ns+=String.fromCharCode(letra);
    }
    return (ns);    
}