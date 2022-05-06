/*
https://www.hackerrank.com/challenges/30-2d-arrays

Graphical Explanation: 
https://docs.google.com/spreadsheets/d/1_2xb1tRenzbHk59yhdSpPog2o52T-BmQBFcT-y9XpMQ/edit?usp=sharing

Hourglass pattern						
a	b	c	-	-	-	
-	d	-	-	-	-	
e	f	g	-	-	-	
-	-	-	-	-	-	
-	-	-	-	-	-	
-	-	-	-	-	-	
*/

let arr2 = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ]];

let  arr = [[-1,-1, 0,-9,-2,-2],
            [-2,-1,-6,-8,-2,-5],
            [-1,-1,-1,-2,-3,-4],
            [-1,-9,-2,-4,-4,-5],
            [-7,-3,-3,-2,-9,-9],
            [-1,-3,-1,-2,-4,-5]];

const hSize = 3; // hourglass size 3x3
const aSize = arr.length; // array size
//console.log ('h='+hSize+' a='+aSize);

let maxHSum = 0;

for (let i=0; i+hSize<=aSize; i++) {
    for (let j=0; j+hSize<=aSize; j++) {
        let a=arr[i][j];
        let b=arr[i][j+1];
        let c=arr[i][j+2];
        let d=arr[i+1][j+1];
        let e=arr[i+2][j];
        let f=arr[i+2][j+1];
        let g=arr[i+2][j+2];
        let sum = a+b+c+d+e+f+g;
        //console.log ('a='+a+' b='+b+' c='+c+' d='+d+' e='+e+' f='+f+' g='+g);
        //console.log ('SUM='+sum);
        if ((i==0 && j==0) || sum>maxHSum) maxHSum = sum;
    }
}

console.log (maxHSum);