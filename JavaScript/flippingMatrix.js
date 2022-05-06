/*
https://www.hackerrank.com/challenges/flipping-the-matrix

If you need a graphical explanation to understand how works this, please review this document:
https://docs.google.com/spreadsheets/d/1vGX8IO4o7UNO4ADxGrkittBIet6eIxm8Vq6sgkHmsyA/edit?usp=sharing

112   42   83  119
 56  125   56   49
 15   78  101   43
 62   98  114  108

a1	b	b	a2
c	d	d	c
c	d	d	c
a3	b	b	a4

positions
a1 = [ i ] [ j ]
a2 = [ i ] [ size-1-j ]
a3 = [ size-1-i ] [ j ]
a4 = [ size-1-i ] [ size-1-j ]
*/

let input = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]];
//let input = [[517,37,380,3727],[3049,1181,2690,1587],[3227,3500,2665,383],[4041,2013,384,965]];
console.log(flippingMatrix(input));


function flippingMatrix(matrix) {
    // Write your code here
    let size = matrix.length; //size of matrix
    let hSize = size/2; //half
    let total = 0; //the sum of the maximal elements in the matrix's upper-left quadrant

    for (let i=0; i<hSize; i++) {
        for (let j=0; j<hSize; j++) {
            // Obtain the numbers on the matrix corners
            let a1=matrix[i][j];
            let a2=matrix[i][size-1-j];
            let a3=matrix[size-1-i][j];
            let a4=matrix[size-1-i][size-1-j];
            //console.log ('a1='+a1+' a2='+a2+' a3='+a3+' a4='+a4);
            total += Math.max(a1,a2,a3,a4); // find the max number on the corners
        }
    }
    return total; //result
}
