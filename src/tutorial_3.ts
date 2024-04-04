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


