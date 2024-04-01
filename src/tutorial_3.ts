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

// const employee: Person | DogOwner | Managers = getEmployee()

// function getEmployee(): Person | DogOwner | Managers {
//     const randomNum = Math.random();

//     if(randomNum < 0.33) {
//         return {
//             name: 'john',
//         };
//     } else if (randomNum < 0.66) {
//         return {
//             name: 'sarah',
//             dogName: 'rex'
//         }
//     } else {
//         return {
//             name: 'bob',
//             managePeople() {
//                 console.log("Manage people")
//             },
//             delegateTasks() {
//                 console.log("Delegate tasks")
//             },
//         }
//     }
// }

// function isManager(obj: Person | DogOwner | Managers): obj is Managers {
//     return 'managePeople' in obj;
// }

// if(isManager(employee)) {
//     employee.delegateTasks()
// }

// 12. Interface vs Type Alias

