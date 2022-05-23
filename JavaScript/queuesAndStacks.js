/*
https://www.hackerrank.com/challenges/30-queues-stacks
*/

class Solution {
    //Write your code here  
    constructor () {
        this._pila = [];
        this._cola = [];
    }
    
    pushCharacter(ch) {
        this._pila.push(ch)
    }    
    popCharacter() {
        return this._pila.pop();
    }
    enqueueCharacter(ch) {
        this._cola.push(ch);
    }
    dequeueCharacter() {
        return this._cola.splice(0,1);
    }
  }


  //Code below is from function main
  // read the string s
  var s='racecar';
  var len=s.length;
  // create the Solution class object p
  var obj=new Solution();
  //push/enqueue all the characters of string s to stack
  for(var i=0;i<len;i++){
      obj.pushCharacter(s.charAt(i));
      obj.enqueueCharacter(s.charAt(i));
  }

  var isPalindrome=true;
  /*
  pop the top character from stack
  dequeue the first character from queue
  compare both the characters*/

  for(var i=0;i<len/2;i++){
      if(obj.popCharacter()!=obj.dequeueCharacter()){
          isPalindrome=false;
            break;
      }
  }
  //finally print whether string s is palindrome or not

  if(isPalindrome)
      console.log("The word, "+s+", is a palindrome.");    
  else
      console.log("The word, "+s+", is not a palindrome.");