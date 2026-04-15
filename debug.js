const readlineSync = require('readline-sync');
let start = readlineSync.question("Enter start number: ");
let end = readlineSync.question("Enter end number: ");
let count = 0;
for (let i = start; i <= end; i++) {
if (i % 2 == 0)
    // Fixed: Used Correct Operator to get Interger Division ount Correctly  {
count += 1;
//Fixed: The count was being reset instead of incremented by one 
}
// Fixed: Got rid of the extra curly brace
console.log("Even numbers between " + start + " and " + end + ": " +
count);