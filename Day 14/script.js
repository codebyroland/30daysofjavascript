// Learning about local storage

localStorage.setItem('firstName', 'Asabeneh',);
console.log(localStorage);

localStorage.setItem('age', 200);
console.log(localStorage);

const skills = ['HTML', 'CSS', 'JS', 'REACT'];
// skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem('skills', skillsJSON);
console.log(localStorage);

let skills1 = [
    {tech: 'HTML', level: 10},
    {tech: 'CSS', level: 9},
    {tech: 'JS', level: 8},
    {tech: 'React', level: 9},
    {tech: 'Redux', level: 10},
    {tech: 'Node', level: 8},
    {tech: 'MongoDB', level: 8}
];

let skillJSON = JSON.stringify(skills1);
localStorage.setItem('skills1', skillJSON);