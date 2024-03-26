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
