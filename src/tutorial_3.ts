interface Person {
    name: string
}

interface DogOwner extends Person {
    dogName: string
}

interface Managers extends Person {
    managePeople(): void
    delegateTasks(): void
}

const employee: Person | DogOwner | Managers = getEmployee()

function getEmployee(): Person | DogOwner | Managers {
    const randomNum = Math.random();

    if(randomNum < 0.33) {
        return {
            name: 'john',
        } as Person;
    } else if (randomNum < 0.66) {
        return {
            name: 'sarah',
            dogName: 'rex'
        } as DogOwner
    } else {
        return {
            name: 'bob',
            managePeople() {
                console.log("Manage people")
            },
            delegateTasks() {
                console.log("Delegate tasks")
            } ,
        } as Managers
    }
}

function isManager(obj: Person | DogOwner | Managers): obj is Managers {
    return 'managePeople' in obj;
}

if(isManager(employee)) {
    employee.delegateTasks()
}

// 12. Tuples

let people:[string, number] = ['john', 25]
let data: readonly[number, number, number] = [1, 4, 7]
// data.push(5)


// 13. Enums
enum ServerResponseStatus {
    success = 200,
    error = 500
}

interface ServerResponse {
    result: ServerResponseStatus;
    data: string[]
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.success,
        data: ['first item', 'second item']
    }
}

// 13.1. Enums -> Reverse Mapping

// Important to add instead of number values, add strings
enum ServerResponseStatusTest {
    success = 'success',
    error = 'error'
}

// for the first interface ServerResponseStatus with number values it prints also the keys not only the values.
// to solve this issue, we can add a type guard or transform the value to a string

enum UserRole {
    Admin,
    Manager,
    Employee
}

type UserTest = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string]
}

function createUser(user: UserTest): UserTest {
    return user
}

const usr: UserTest = createUser({
    id: 1, name: 'ciprian', role: UserRole.Manager, contact: ['ciprian@yahoo.com', '123123123']
})

// 14. Type Assertion

let someValue: any = 'it is a string'

let strLength: number = (someValue as string).length

enum Statuses {
    Pending = 'pending',
    Declined = 'declined'
}

type Users = {
    name: string,
    status: Statuses
}

const statusVal = 'pending'

const users: Users = {
    name: 'john',
    status: statusVal as Statuses
}

// 15. Type - 'unknown'

let unknownVal: unknown;

unknownVal = 'something here'
unknownVal = [1, 2, 3]
unknownVal = 123
// unknownVal.toFixed(2) not working here. We need to provide some type checks as below because the type is unknown

if(typeof unknownVal === 'number') {
    unknownVal.toFixed(2)
}

// 16. Type - 'never'

let aValue: never

type Theme = 'light' | 'dark'

function checkTheme(theme: Theme): void {
    if(theme === 'light') {
        console.log('light theme')
    }

    if(theme === 'dark') {
        console.log('dark theme')
    }

    // theme -> in this case theme will be of type never, we handle all the possible values
}

// 17. Type Guards - Typeof
type ValueType = string | number | boolean;
let value: ValueType;
value = Math.random() < 0.33 ? 'Hello' : Math.random() < 0.66 ? 123.456 : true

function checkValue(value: ValueType): void {
    if(typeof value === 'string') {
        console.log(value.toLocaleLowerCase())
        return
    }

    if(typeof value === 'number') {
        console.log(value.toFixed(2))
        return
    }

    if(typeof value ==='boolean') {
        console.log("boolean: ", value)
    }
}

// 18. Type Guards - Instanceof

function checkInput(input: Date | string): string {
    if(input instanceof Date) {
        return input.getFullYear().toString()
    } else {
        return input
    }
}

const year = checkInput(new Date()) // instance of Date
const random = checkInput('2020-05-05') // string

// 19. Type Predicate

type Student = {
    name: string;
    study: () => void
}

type User2 = {
    name: string;
    login: () => void
}

type Person2 = Student | User2

const randomPerson = (): Person2 => {
    return Math.random() > 0.5 ? { name: "john", study: () => console.log('studying')} : { name: 'mary', login: () => console.log("logging")}
}

const person2 = randomPerson()

function isStudent(person: Person2): person is Student {
    return (person as Student).study !== undefined
}

// 20. Type Guards - Discriminated Unions

