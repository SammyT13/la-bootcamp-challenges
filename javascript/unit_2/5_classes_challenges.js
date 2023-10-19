// Coffe Maker: create a class for Coffee
class Coffee {
    constructor(type, cream, sugar) {
        this.type = type
        this.cream = cream
        this.sugar = sugar
    }
    coffeeProfile() {
        return `A ${this.type.toLowerCase()} coffee with ${this.creams()}, ${this.sugars()}`
    }
    creams() {
        return this.cream > 1 ? `${this.cream} creams` : `${this.cream} cream.`
    }
    sugars() {
        return this.sugar > 1 ? `${this.sugar} sugars` : `${this.sugar} sugar.`
    }
}

// Write the code that makes a black coffee object

// created an empty object for black coffee
const blackCoffee = new Coffee()
console.log(blackCoffee)

// added black coffee property
blackCoffee.type = "black"
blackCoffee.cream = 0
blackCoffee.sugar = 0
console.log(blackCoffee)

// Write the code that outputs the black coffee's profile

console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars
// Updated blackCoffee with 1 cream and 2 sugars
blackCoffee.cream = 1
blackCoffee.sugar = 2
console.log(blackCoffee)
// Write the code that outputs the 1 cream and 2 sugars coffee profile

console.log(blackCoffee.coffeeProfile())

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
class Latte {
    constructor(flavor, milkType, shot) {
        this.flavor = flavor
        this.milkType = milkType
        this.shot = shot
    }
    latteProfile() {
        return `A ${this.flavor.toLowerCase()} latte with ${this.milk()} and ${this.shots()} of expresso.`
    }
    shots() {
        return this.shot === "single" ? `${this.shot} shot` : `${this.shot} shots`
    }
    milk() {
        return this.milkType.toLowerCase() === "milk" ? `${this.milkType}` : `${this.milkType} milk`
    }
}
// Write the code that makes a regular, single shot latte

const regularLatte = new Latte("regular","milk", "single")
console.log(regularLatte)

// Log the regular, single shot latte's profile

console.log(regularLatte.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.

const hazelnutLatte = new Latte("Hazelnut", "almond", "double")
console.log(hazelnutLatte)
// Log the double shot, hazelnut latte with almond milk's profile.

console.log(hazelnutLatte.latteProfile())

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places

class Cylinder {
    constructor(cylinderName,radius, height) {
        this.c = cylinderName
        this.r = radius
        this.h = height
        this.pi = Math.PI
    }
    volume() {
        return `Volume of ${this.c} is ${(this.pi * this.r * 2 * this.h).toFixed(4)}.`
    }
}
// Write the code that creates three unique cylinder objects

const cylinder1 = new Cylinder("Cylinder 1",4, 6)
console.log(cylinder1)
console.log(cylinder1.volume())

const cylinder2 = new Cylinder("Cylinder 2",3.5, 5.49)
console.log(cylinder2)
console.log(cylinder2.volume())

const cylinder3 = new Cylinder("Cylinder 3",10.24, 1.94)
console.log(cylinder3)
console.log(cylinder3.volume())
