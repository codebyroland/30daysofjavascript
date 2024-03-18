'use strict'

const usersText = `{
    {
        'firstName': 'Asabeneh',
        'lastName': 'Yetayeh',
        "age": 25,
        "email": "asabeneh@example
    },
    {
        'firstName': 'Funmi',
        'lastName': 'Adepoju,
        'age': 25,
        'email': 'funmilolade@example.com'
    },
    {
        'firstName': 'Maryam',
        'lastName': 'lekie',
        'age': 28,
        'email': 'lidiya@lidiya.com'
    }
}`;

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

//converting object to json
const users = {
    Alex: {
        email: 'alex@gmail.com'
    }
}