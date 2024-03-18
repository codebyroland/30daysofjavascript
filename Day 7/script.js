// Objects in javascript
const person = {
    firstName: 'Williams',
    lastName: 'Adams',
    age: 20,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Node',
        'MongoDB',
        'Python',
    ],
    address: {
        street: 'African Lane',
        city: 'Helsinki'
    },
    isMarried: true,
    getFullName: function() {
        return `My name is ${this.firstName} ${this.lastName}. I am ${person.age}`
    },
    email: 'willadms@gmail.com'
}

person.nationality = 'Ethiopian'
person.country = 'Finland'