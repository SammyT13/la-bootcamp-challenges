// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("tired", () => {
    it("returns drink coffee if you're tired or keep working if you're not", () => {
        expect(tired("yes")).toEqual("drink coffee")
        expect(tired("no")).toEqual("keep working")
    })
})

// Create the function that will make the test pass.

const tired = (response) => {
    return response === "yes" ? "drink coffee" : "keep working"
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("feelings", () => {
    it("returns relax if you're stressed or keep going if you're not stressed", () => {
        expect(feelings("yes")).toEqual("relax")
        expect(feelings("no")).toEqual("keep going")
    })
})

// Create the function that will make the test pass.

const feelings = (response) => {
    return response === "yes" ? "relax" : "keep going"
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () => {
    it("returns in budget if price is lower than $300", () => {
        let item1 = 299
        expect(inBudget(item1)).toEqual("in budget")
        
        let item2 = 300
        expect(inBudget(item2)).toEqual("out of budget")
    })
})

// Create the function that will make the test pass.

const inBudget = (price) => {
    return price < 300 ? "in budget" : "out of budget"
}

// Write the test for a function that takes in two numbers and returns the smaller number.

describe("isSmaller", () => {
    it("returns the smaller number of two arguments", () => {
        expect(isSmaller(0,1)).toEqual(0)
        expect(isSmaller(1,1)).toEqual("numbers are equal")
    })
})

// Create the function that will make the test pass.

const isSmaller = (num1, num2) => {
    return num1 === num2 ? "numbers are equal" : num1 < num2 ? num1 : num2 
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe("isOdd", () => {
    it("returns whether a number is odd or even", () => {
        let num1 = 5
        let num2 = 12
        expect(isOdd(num1)).toEqual("odd")
        expect(isOdd(num2)).toEqual("even")
    })
})

// Create the function that will make the test pass.

const isOdd = (num) => num%2 === 1 ? "odd" : "even"

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
    it("returns the color of a fruit", () => {
        let banana = "banana", apple = "apple", grape = "grape"
        expect(fruitColor(banana)).toEqual("yellow")
        expect(fruitColor(apple)).toEqual("red")
        expect(fruitColor(grape)).toEqual("purple")
    })
})

// Create the function that will make the test pass.

const fruitColor = (fruit) => {
    if(fruit === "banana") {
        return "yellow"
    }
    else if(fruit === "apple") {
        return "red"
    }
    else if(fruit === "grape") {
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("returns the name Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

// Create the function that will make the test pass.

const rick = () => "Morty"

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
    it("returns a greeting with a name", () => {
        let name = "Daniel"
        expect(greeter(name)).toMatch("Daniel")
    })
})

// Create the function that will make the test pass.

const greeter = (name) => {
    return `Hello, ${name}!`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
    it("takes a number as an argument and returns odd or even", () => {
        let num1 = 13
        let num2 = 14
        expect(oddOrEven(num1)).toEqual("odd")
        expect(oddOrEven(num2)).toEqual("even")
    })
})

// Create the function that will make the test pass.

const oddOrEven = (num) => num & 1 ? "odd" : "even"

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("it takes a number and returns a number multiplied by 2", () => {
        let num = 20
        expect(doubler(num)).toEqual(40)
    })
})

// Create the function that will make the test pass.

const doubler = (num) => num * 2

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
    it("takes two numbers and returns numbers multiplied", () => {
        expect(multiply(10, 6)).toEqual(60)
    })
})

// Create the function that will make the test pass.

const multiply = (num1, num2) => {
    return num1 * num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleyBy", () => {
    it("takes to number and returns if numbers are evenly divisible", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    })
})

// Create the function that will make the test pass.

const divisibleBy = (num1, num2) => {
    if(num1%num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    }
}
