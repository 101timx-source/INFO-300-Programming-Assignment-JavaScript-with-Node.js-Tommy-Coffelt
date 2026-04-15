var readLineSync = require('readline-sync');
var input = readLineSync.question("Enter a string: ");
var str = input.toLowerCase();
var frequency = {};
var firstRepeat = null;
for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char >= 'a' && char <= 'z') {
        frequency[char] = (frequency[char] || 0) + 1;

        if (frequency[char] === 2 && firstRepeat === null) {
            firstRepeat = char;
        }
    }
}
console.log("\nLetter Frequency:");
console.log("─".repeat(20));
Object.keys(frequency)
    .sort()
    .forEach(function(letter) {
        console.log(letter + ": " + frequency[letter]);
    });
console.log("─".repeat(20));
if (firstRepeat) {
    console.log("First letter that appears more than once: " + firstRepeat);
} else {
    console.log("No letter appears more than once.");
}