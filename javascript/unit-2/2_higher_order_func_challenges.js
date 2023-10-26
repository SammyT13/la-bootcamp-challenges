// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

const multiplier = arr => {
    return arr.map((value) => value * 10)
}

console.log(multiplier(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]

const oddNumbers = arr => arr.filter((value) => value%2 === 1)

console.log(oddNumbers(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework" 

const strOnly = (arr) => {
    return arr.filter((value) => {
        return typeof value === 'string'
    }).join('')
}

console.log(strOnly(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

const removeFalsy = arr => arr.filter((value) => !!value)

console.log(removeFalsy(filterArrayValues))

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
const arr5 = ['Sammy', 'Apple', 'Ivan', "Mateo"]
// output: "jvscrpt s wsm"

const removeVowels = (str) => {
    return str.replace(/[aeiou]/gi, '')
}

const arrRemoveVowels = (arr) => {
    return arr.map((value) => value.replace(/[aeiou]/gi, ''))
}
console.log(removeVowels(str))
console.log(arrRemoveVowels(arr5))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr3 = [3, 7, 10, 5, 4, 3]
const arr4 = [7, 8, 2, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

const noDuplicates = (...arr) => {
    let newArr = arr.flat(Infinity)

    return newArr.filter((value, i) => newArr.indexOf(value) === i)
}

console.log(noDuplicates(arr3, arr4))