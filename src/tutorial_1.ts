// 1. Type Annotations

let awesomeName: string = 'Ciprian'
let isMarried: boolean = true
let amount: number = 19

// 2. Type Inference
// TypeScript infers the type on a variable, if you don't specify it in the variable.

// 3. Union Type
let tax: number | string = '10'
let requestStatus: 'pending' | 'success' | 'error' = 'pending'

// 4.  Type Any
let notSure: any = 4;
notSure = false

// Practical Example
const books = ['1984', 'Brave World', 'Fahrenheit']

let foundBook: string | undefined;

for(let book of books) {
    if (book === '1984') {
        foundBook = book;
        break;
    }
}

// 5. Arrays
let prices: number[] = [20, 19, 30]
let arr: (string | number)[] = [1, 2, 3, "four", 'five']

// 6. Objects
type Car = {
    brand: string,
    year: number
}

type Items = {
    title: string,
    cost?: number
}

let car: Car = {
    brand: "BMW",
    year: 2020
}

let items: Items[] = [
    {
        title: "Book1",
        cost: 100
    },
    {
        title: "Book2",
        // cost: 150
    }
]

// 7. Functions
function sayHi(name: string): string {
    return name
}
const arr1: string[] = ['Ciprian', "Cosmin", 'Andrei']
function checkName(name: string): boolean {
    return arr1.includes(name)
}

// checkName('Ciprian')

// 7.1. Functions - Optional Params
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0)
}

let priceAfterDiscount = calculatePrice(100, 20)

// 7.2. Functions - Default Parameter
function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
    return initialScore - penaltyPoints
}

let score = calculateScore(100);

// 7.3. Functions - Rest Parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, el) => {
        return acc + el }, 0)
}

let sum_1 = sum(1, 3, 4, 5)

// 7.4. Void Keyword - absence of the value, the function does not return a value
function logMessage(message: string): void {
    console.log(message)
}

// 7.5 Type Guards
function processInput(num: number |  string) {
    if(typeof num === 'number') {
        console.log(num * 2)
    }

    if(typeof num === 'string') {
        console.log(num.toLocaleUpperCase())
    }
}

// 7.6. Functions - Objects as Parameters
function createEmployee({id}: {id: number}):{
    id: number;
    isActive: boolean
} {
    return {
        id,
        isActive: id % 2 === 0
    }
}

function processData(input: string | number, config: { reverse: boolean } = { reverse: false }): string | number {
    if(typeof input === 'number') {
        return input ** 2
    } 

    if(typeof input === 'string' && config.reverse) {
        const reversedStr = input.split("").reduce((acc, char) => char + acc, "")
        return reversedStr.toLocaleUpperCase()
    } else {
        return input.toLocaleUpperCase()
    }   
}