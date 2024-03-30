// 8. Type Alias
type User = {
    id: number,
    name: string,
    isActive: boolean
}

const johnObj: User = {
    id: 1,
    name: 'john',
    isActive: false
}

type Employee = {
    id: number,
    name: string,
    department: string
}

type Manager = {
    id: number,
    name: string,
    employees: Employee[]
}

type Staff = Manager | Employee

function printStaffDetails(input: Staff): void {
   if('employees' in input) {
    console.log(`${input.name} is an manager for ${input.employees.length} employees`)
   } else {
    console.log(`${input.name} is an employee in the ${input.department}`)
   }
}

const alice: Employee = { id: 1, name: 'alice', department: 'sales'}
const andrew: Employee = {id: 3, name: "andrew", department: 'IT'} 
const johnny: Manager = { id: 2, name: 'johnny', employees: [alice, andrew]}

// printStaffDetails(johnny)

// 9. Intersection Type
type Book = {
    id: number;
    name: string;
    price: number;
    discount?: number
}

const book1: Book = {
    id: 1,
    name: "Book1",
    price: 123
}

// 10. Interfaces
// -> shape of an object

interface BookWork {
    readonly isbn: number,
    title: string,
    author: string,
    genre: string,
    // method
    printAuthor(): void,
    printTitle(message: string): string
}

const deepWork: BookWork = {
    isbn: 123,
    title: 'deep work',
    author: 'cal newport',
    genre: 'self help',
    printAuthor() {
        console.log(this.author)
    },
    printTitle(message) {
        return `${this.title} ${message}`
    }
}

interface Computer {
    readonly id: number,
    brand: string,
    ram: number,
    storage?: string,
    upgradeRam(num: number): number
}

const comp: Computer = {
    id: 1,
    brand: "Acer",
    ram: 16,
    upgradeRam(num) {
        this.ram += num
        return this.ram;
    }
}

comp.upgradeRam(32)

// 11. Interfaces - Merge and Extend

interface Person {
    name: string;
    getDetails(): string;
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

interface Person {
    age: number
}

const person: Person = {
    name: 'john',
    age: 30,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

interface Employeer extends Person {
    employeerId: number
}

const employeer: Employeer = {
    employeerId: 123,
    name: "Ciprian",
    age: 30,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, EmployeerId: ${this.employeerId}`
    }
}

