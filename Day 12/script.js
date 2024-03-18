class Person {}
const person = new Person()
console.log(person)

class Person1 {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person1()

console.log(person1)

class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person2 = new Person2('Asabeneh', 'Yetayeh')

console.log(person2)