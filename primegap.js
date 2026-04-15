var readLineSync = require('readline-sync');
var positivenum = readLineSync.questionFloat("Please Enter A Positive Number: ");
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let primes = [];
for (let i = 2; i <= positivenum; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}
console.log("Primes up to " + positivenum + ": " + primes);
let largestGap = 0;
let gapStart = 0;
let gapEnd = 0;
let totalGap = 0;
for (let i = 0; i < primes.length - 1; i++) {
  let gap = primes[i + 1] - primes[i];
  totalGap += gap;
  if (gap > largestGap) {
    largestGap = gap;
    gapStart = primes[i];
    gapEnd = primes[i + 1];
  }
}
let averageGap = primes.length > 1 ? totalGap / (primes.length - 1) : 0;
console.log("The largest gap is " + largestGap + ", between " + gapStart + " and " + gapEnd);
console.log("The average gap is " + averageGap.toFixed(2));