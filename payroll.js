var readLineSync = require('readline-sync');
let employees = []; // array of objects
for (let i = 0; i < 3; i++) {
console.log("\nEmployee #" + (i + 1));

let name = readLineSync.question("Enter name: ");
let wage;
    do {
        wage = readLineSync.questionFloat("Enter hourly wage: ");
        if (wage <= 0) {
            console.log("Wage must be positive!");
        }
    } while (wage <= 0);

let hours;
    do {
        hours = readLineSync.questionFloat("Enter hours worked: ");
        if (hours < 0 || hours > 80) {
            console.log("Hours must be between 0 and 80!");
        }
} while (hours < 0 || hours > 80);
let regularHours = Math.min(hours, 40);
let overtimeHours = Math.max(hours - 40, 0);
let regularPay = regularHours * wage;
let overtimePay = overtimeHours * wage * 1.5;
let totalPay = regularPay + overtimePay;

employees.push({
name: name,
hours: hours,
regularPay: regularPay,
overtimePay: overtimePay,
totalPay: totalPay
    });
}

let highest = employees[0];

for (let emp of employees) {
    if (emp.totalPay > highest.totalPay) {
        highest = emp;
    }
}

console.log("\n=== Payroll Report ===");

for (let emp of employees) {
    console.log("\nName: " + emp.name);
    console.log("Hours: " + emp.hours);
    console.log("Regular Pay: $" + emp.regularPay.toFixed(2));
    console.log("Overtime Pay: $" + emp.overtimePay.toFixed(2));
    console.log("Total Pay: $" + emp.totalPay.toFixed(2));
}
console.log("\nHighest Paid Employee: " + highest.name + " ($" + highest.totalPay.toFixed(2) + ")");