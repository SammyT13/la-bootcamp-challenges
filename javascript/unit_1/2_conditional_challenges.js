// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let itemPrice1 = 100
let itemPrice2 = 101
let itemPrice3 = 99
let itemPrice4 = 200

// conditional works for all 4 items

if (itemPrice1 <= 100) {
    console.log("in budget")
}
else {
    console.log("out of budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

let hungry = false

if (hungry == 1) {
    console.log("eat food")
}
else {
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "yellow"

if (trafficLight === "green") {
    console.log("go")
}
else if (trafficLight === "yellow") {
    console.log("slow down")
}
else {
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let num1 = 51
let num2 = 52

if (num1 > num2) {
    console.log(`${num1}`)
}
else if (num1 < num2) {
    console.log(`${num2}`)
}
else {
    console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let num = 3

if (num === 0) {
    console.log("zero")
}
else if (num%2 === 0) {
    console.log("even")
}
else {
    console.log("odd")
}

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let grade = 20

if (grade === 100) {
    console.log("perfect score")
}
else if (grade < 100 && grade >= 90) {
    console.log("A")
}
else if (grade < 90 && grade >= 80) {
    console.log("B")
}
else if (grade < 80 && grade >= 70) {
    console.log("C")
}
else if (grade < 70 && grade >= 65) {
    console.log("D")
}
else {
    console.log("F")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

let varType = 20000

if (typeof varType) {
    console.log(typeof varType)
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let usrPassword = "afjtbks"

if (usrPassword.length >= 12 && usrPassword.includes("!")) {
    console.log("That is a mighty strong password!")
}
else if (usrPassword.length >= 8 || usrPassword.includes("!")) {
    console.log("That password is strong enough.")
}
else {
    console.log("That is not a valid password.")
}