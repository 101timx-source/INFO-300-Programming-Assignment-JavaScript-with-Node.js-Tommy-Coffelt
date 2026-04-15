var readLineSync = require('readline-sync');
var n = readLineSync.questionInt("Please Enter A Number Greater Than 0: ");
if (n <= 0) {
    console.log("Please Enter a Number Greater Than 0.");
    process.exit();
}
var fibonacci = [];
for (var i = 0; i < n; i++) {
    if (i === 0) {
        fibonacci.push(0);
    } else if (i === 1) {
        fibonacci.push(1);
    } else {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
}
var oddFibonacci = fibonacci.filter(function(num) {
    return num % 2 !== 0;
});
console.log("First " + n + " Fibonacci numbers:", fibonacci);
console.log("Odd Fibonacci numbers:", oddFibonacci);