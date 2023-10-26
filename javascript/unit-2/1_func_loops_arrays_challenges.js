// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

const multilply3 = (arr) => {
    let newArr = []

    for(let i in arr) {// if I use let i of arr then I would do newArr.push(i * 3)
        newArr.push(arr[i] * 3)
    }
    return newArr
}

console.log(multilply3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

const oddNumber = (arr) => {
    let oddArr = []
    for(let i of arr) {
        if(i%2 !== 0) {
            oddArr.push(i)
        }
    }
    return oddArr
}

console.log(oddNumber(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// output: "nicework"

const strOnly = (arr) => {
    let strArr = []

    for(let i of arr) {
        if(typeof i === "string") {
            strArr.push(i)
        }
    }
    return strArr.join('')
}

console.log(strOnly(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10

const addThese2 = []
// output: 0

const sumOfArr = (arr) => {
    let sum = 0

    for(let i of arr) {
        sum += i
    }

    return sum
}

console.log(sumOfArr(addThese1))
console.log(sumOfArr(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1

const largestNumberIndex = (arr) => {
    let largestIndex = arr[0]
    for(let i of arr) {
        if(i > largestIndex) {
            largestIndex = i
        }
    }

    return arr.indexOf(largestIndex)
}

console.log(largestNumberIndex(indexHighestNumber))

// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
const arr3 = [7, 9, 'Sammy', 'Mateo', 'Mateo']
const arr4 = ['Sammy', 'Mateo', 'Ivan', 'Ivan']

// This function will take in multiple arrays (dynamically)
const newArray = (...arr) => {
    let mergedArr = arr.flat(Infinity)
    mergedArr = [...new Set(mergedArr)]

    return mergedArr
}

console.log(newArray(arr1, arr2, arr3, arr4))
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
const arrayLength1 = 6
const arrayValue1 = 0
// output: [0, 0, 0, 0, 0, 0]

const arrayLength2 = 4
const arrayValue2 = 11
// output: [11, 11, 11, 11]

const arrMaker = (num1, num2) => {
    let arr = []

    for(let i = 0; i < num1; i++) {
        arr.push(num2)
    }
    return arr
}

console.log(arrMaker(arrayLength1,arrayValue1))
console.log(arrMaker(arrayLength2,arrayValue2))

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// output: 10

const addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55

const addUp3 = 600
// output: 180300

const sumUp = (num) => {
    sum = 0
    
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(sumUp(addUp1))
console.log(sumUp(addUp2))
console.log(sumUp(addUp3))