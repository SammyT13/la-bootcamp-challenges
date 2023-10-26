// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}

// Write the code that accesses the first name of the person object.

console.log(person.firstName)
console.log(person["firstName"])

// Write the code that accesses the last name of the person object.

console.log(person.lastName)
console.log(person["lastName"])

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

const myDataName = "homePlanet"
const myDataValue = "Earth"
person[myDataName] = myDataValue

// Alternate way an object a property and set value
// person["homePlanet"] = "Earth"

console.log(person.homePlanet)
console.log(person["homePlanet"])

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// When updating an object with a method and using dot notation, your string literals cannot use 'this' keyword. It must call the objects name

person.bio = () => {
  console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}.`)
}

console.log(person)
person.bio()

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

product.describeProduct = () => {
  console.log(`The product is a ${product.name}. It costs ${"$" + product.price}.`)
}

console.log(product)
product.describeProduct()

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

product.totalWithTax = () => {
  let salesTax = 1.07
  let chairPrice = product.price
  let totalPrice = (salesTax * chairPrice).toFixed(2)
  console.log(`The total price with tax is ${"$" + totalPrice}`)
}

product.totalWithTax()

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

// Write the code that accesses the ingredients property.

// This is how to destructure a property containing an array
const {ingredients:[item1, item2, item3] } = lunch

console.log(item1)
console.log(item2)
console.log(item3)

// Write the code that access the third ingredient of the lunch object.

// I can use the destructured item3 in ingredienst, but here I will log the ingredients property using brackets method
console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const sandwichMaker = () => {
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}
console.log(sandwichMaker())
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

product.pbbSandwhich = () => {
  console.log(`The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`)
}

product.pbbSandwhich()

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const cats = animals.filter((value) => value.type === "cat")
console.log(cats)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const animalNames = animals.map((value) => value.name)
console.log(animalNames)

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const olderAnimals = animals.filter(value => value.age > 10).map(value => value.name)
console.log(olderAnimals)

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const animalDescription = animals.forEach((value) => {
  let description = `${value.name} is a ${value.type} who is ${value.age}.`
  console.log(description)
})
animalDescription


// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

// Write the code that destructures the author object so that the following code snippet will run successfully:

const {name, genre} = author
console.log(`${name} is a ${genre} author`)
// output: "H. G. Wells is a science fiction author"

// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = (pokemon) => {
  return `${pokemon.species} is a ${pokemon.pokemon_type}`
}

console.log(describePokemon(pokeOne))
// output: "Charmandar is a Fire pokemon"

console.log(describePokemon(pokeTwo))
// output: "Magikarp is a Water pokemon"

// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}

// Modify the triangleDimensions object to have a method that returns the area of the triangle.

triangleDimensions.area = () => {
  return (triangleDimensions.height * triangleDimensions.base) / 2
}
console.log(triangleDimensions.area())

// Write the code that will update the base to be the value of 6.

triangleDimensions["base"] = 6
console.log(triangleDimensions.base)
console.log(triangleDimensions.area())

