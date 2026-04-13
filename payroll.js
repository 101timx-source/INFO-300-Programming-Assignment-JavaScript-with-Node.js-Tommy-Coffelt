var readLineSync = require('readline-sync');
let employees = []; 
for (let i = 0; i < 3; i++) {
    console.log("\nEmployee #" + (i + 1));
let name = readLineSync.question("Please Enter Full Legal name: ");
let wage;
    while (true) {
        wage = readLineSync.questionFloat("Please Enter Accurate Hourly Wage:");
        if (wage > 0) {
            break;
        } else {
            console.log("Please Enter a Positive Number");
        }
    }
let hours;
    while (true) {
        hours = readLineSync.questionFloat("Enter All Hours Worked Please:");
        if (hours >= 0 && hours <= 80) {
            break;
        } else {
            console.log("Please Enter Your Accurate Hours 0 through 80");
        }
    }
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
    } else {
    }
}
console.log("Payroll Report For All Employees");
for (let emp of employees) {
    console.log("\nName: " + emp.name);
    console.log("Hours: " + emp.hours);
    console.log("Regular Pay: $" + emp.regularPay.toFixed(2));
    console.log("Overtime Pay: $" + emp.overtimePay.toFixed(2));
    console.log("Total Pay: $" + emp.totalPay.toFixed(2));
}
console.log("\nHighest Paid Employee: " + highest.name + " ($" + highest.totalPay.toFixed(2) + ")");