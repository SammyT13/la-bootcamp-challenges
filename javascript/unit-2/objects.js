const person = {
    name: {
        first: "Sam",
        last: "Torres"
    },
    age: 42,
    bio () {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`)
    },
    introSelf () {
        console.log(`Hi! I'm ${this.name[0]}`)
    }
}

console.log(person)
console.log(person["name"]) // instead of dot notation I used bracket notation
console.log(person["name"]["first"] + " " + person.name.last) // in this example I used both bracket and dot notation, respectively
console.log(person.age)
person.bio()
person.introSelf()

// Setting (updating) objects
    // can be done using dot or bracket notation

person.age = 4
person["name"]["first"] = "Mateo"

console.log(person["age"])
console.log(person.name.first)

// We can also add new members (property) or functions (methods) to objects (bracket or dot notations)

person["eyes"] = "hazel"
person.farewell = () => {
    console.log("Bye everybody!")
}

console.log(person.eyes)
person.farewell()

//Using bracket notation can also be used to set member names and value (dot notation won't allow this)

const myDataName = "height"
const myDataValue = "36in"
person[myDataName] = myDataValue

console.log(person)
console.log(person.height)

// this keyword: refers to the current object the code is being written inside

const person1 = {
    name: "Daniel",
    introduceSelf () {
        console.log(`Hi! I'm ${this.name}.`)
    }
}

const person2 = {
    name: "Ashley",
    introduceSelf () {
        console.log(`Hi! I'm ${this.name}.`)
    }
}

person1.introduceSelf()
person2.introduceSelf()

//Destructuring

const obj = {a: 1, b: 2}
const {a, b} = obj

console.log(a)
console.log(b)

//Binding and assignment
const obj1 = {e: 1, b: {c: 2}}
const {e, b: {c: d},} = obj1

console.log(e)
console.log(b)

// More Destructuring examples

const foo = ["one", "two", "three"]

const[red, yellow, green] = foo

console.log(red)
console.log(yellow)
console.log(green)

// Swapping Variables
    // Two variables values can be swapped in one destructuring expression

let x = 1
let y = 3

console.log(x)
console.log(y)

// [x, y] = [y, x]

console.log(x)
console.log(y)
