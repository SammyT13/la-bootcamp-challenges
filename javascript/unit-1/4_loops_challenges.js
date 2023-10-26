// Create a for loop that logs each number from 1 - 20.

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// Create a for loop that logs every other number from 1 - 20.

for (let i = 1; i <=20; i++) {

    if (i%2 === 1){
        console.log(i)  
    }
}

// Create a for loop that logs the result of each number from 1 - 20 tripled.

for (let i = 1; i <=20; i++) {
    console.log(i * 3)
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

for (let i = 1; i <= 20; i++) {
    if(i%2 === 0) {
        console.log(i)
    }
    else {
        console.log("odd")
    }
}

// Consider this variable:

const nums = [3, 57, -9, 20, 67, 3, 70, 25]

// Create the code that will log the largest number from the array.

let largestNum = 0;

for (let num of nums) {
    if (num > largestNum) {
        largestNum = num
    }
}

console.log(largestNum)

// Create the code that will log the smallest number from the array.

let smallestNum = 0

for (let num of nums) {
    if (num < smallestNum) {
        smallestNum = num
    }
}

console.log(smallestNum)

// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1

for (let num of nums) {
    console.log(num%2)
}

// Consider this variable:

const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.

let arr = myString.split('')

let count = 0

for (let e of arr) {
    if (e === 'e') {
        count +=1
    }
}

console.log(count)

// Create the code that will log every other character in the string.

for (let i = 0; i < arr.length; i++) {
    if(i%2 !== 0){
        console.log(arr[i])
    }
}

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

for (let i = 5; i <= 15; i++) {
    if (i%2 === 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

let i = 1

while(i <= 100) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("fizzbuzz")
    }
    else if (i%3 === 0) {
        console.log("fizz")
    }
    else if (i%5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(i)
    }

    i++
}