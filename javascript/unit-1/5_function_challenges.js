// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}

console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) => {
    return `Welcome, ${name}!`
}

console.log(greeting("Sam"))
console.log(greeting("Mateo"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (num) => {
    if (num%2 === 0) {
        return "even"
    }
    else if (num%2 === 1) {
        return "odd"
    }
    else {
        return "needs to be a number"
    }
}

console.log(oddOrEven(23))
console.log(oddOrEven(34))
console.log(oddOrEven("hello"))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num) => {
    return num * 3
}

console.log(triple(5))
console.log(triple(4))
console.log(triple(0))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) => {
    return num1 * num2
}

console.log(multiply(4, 5))
console.log(multiply(2.2, 6.0))
console.log(multiply(0, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
    if (num1%num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    }
    else {
        return `${num1} is not evenly divisible by ${num2}`
    }
}

console.log(divisibleBy(10, 5))
console.log(divisibleBy(5, 10))
console.log(divisibleBy(10, 10))
console.log(divisibleBy(81, 9))
console.log(divisibleBy(8, 2))
console.log(divisibleBy(4, 0))
console.log(divisibleBy(0, 4)) // could make a case if num1 is equal to 0 then say somehting else

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (num) => {
     if (num >= 90) {
        return "A"
     }
     else if (num < 90 && num >= 80) {
        return "B"
     }
     else if (num < 80 && num >= 70) {
        return "C"
     }
     else if (num < 70 && num >= 65) {
        return "D"
     } 
     else {
        return "F"   
     }
}

console.log(assignGrade(90))
console.log(assignGrade(100))
console.log(assignGrade(89))
console.log(assignGrade(80))
console.log(assignGrade(79))
console.log(assignGrade(70))
console.log(assignGrade(69))
console.log(assignGrade(65))
console.log(assignGrade(64))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (str1, str2) => {
    if(str1.length === str2.length) {
        return "Both words are the same length!"
    }
    else if(str1.length > str2.length) {
        return `${str1}`
    }
    else {
        return `${str2}`
    }
}

console.log(isLonger("hello", "cat"))
console.log(isLonger("tell", "forever"))
console.log(isLonger("hello", "jello"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (n1, n2) => {
    if(n1 === n2) {
        return "Both numbers are equal!"
    }
    else if(n1 > n2) {
        return `${n1}`
    }
    else {
        return `${n2}`
    }
}

console.log(greaterNum(2, 3))
console.log(greaterNum(3, 3))
console.log(greaterNum(100, 100000))
console.log(greaterNum(10000, 100))
console.log(greaterNum(-3, -3))
console.log(greaterNum(-3, -30))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = word => word.toUpperCase()

console.log(yelling("Hello"))
console.log(yelling("yellow"))
console.log(yelling("sAmmY"))
console.log(yelling("telev3233"))


// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

const hellowWorld = (lang) => {
    if(lang === "es") {
        return "Hola Mundo"
    }
    else if(lang === "da") {
        return "Hej Verden"
    }
    else if(lang === "de") {
        return "Hallo Welt"
    }
    else if(lang === "fr") {
        return "Bonjour le monde"
    }
    else if (lang === "ro") {
        return "Salut Lume"
    }
    else {
        return "Hello World"
    }
}

console.log(hellowWorld("en"))
console.log(hellowWorld("fjsdlf"))
console.log(hellowWorld("es"))
console.log(hellowWorld("da"))
console.log(hellowWorld("de"))
console.log(hellowWorld("fr"))
console.log(hellowWorld("ro"))
