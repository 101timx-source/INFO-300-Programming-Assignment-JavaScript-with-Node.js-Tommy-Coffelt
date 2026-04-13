var readLineSync = require('readline-sync')
var currentAvg = readLineSync.questionFloat("Enter your current course average: ")
if (currentAvg < 0 || currentAvg > 100) {
    console.log("Invalid average!")
    process.exit()
}
for (var i = 0; i < 3; i++) {
    var finalExam = readLineSync.question("Please Enter Your final Exam Score: ")
    finalExam = Number(finalExam)
    if (finalExam < 0 || finalExam > 100) {
        console.log("Invalid score! Must be between 0 and 100.")
        continue
    }
    var finalAvg = (currentAvg * 0.75) + (finalExam * 0.25)
    var grade = ""
    if (finalAvg >= 90) {
        grade = "A"
    } else if (finalAvg >= 80) {
        grade = "B"
    } else if (finalAvg >= 70) {
        grade = "C"
    } else if (finalAvg >= 60) {
        grade = "D"
    } else {
        grade = "F"
    }
    var result = ""
    if (finalAvg > currentAvg) {
        result = "Improved"
    } else if (finalAvg < currentAvg) {
        result = "Declined"
    } else {
        result = "Stayed the same"
    }
    console.log("\nFinal Exam Score: " + finalExam)
    console.log("Final Course Average: " + finalAvg.toFixed(2))
    console.log("Letter Grade: " + grade)
    console.log("Result: " + result + "\n")
}