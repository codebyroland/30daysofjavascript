'use strict'

const year = document.getElementById('year');
const date = document.getElementById('date');
const python = document.getElementById('python');
const js = document.getElementById('js');
const react = document.getElementById('react');
const fullstack = document.getElementById('fullstack');
const data = document.getElementById('data');
const reactnative = document.getElementById('reactnative');
const machinelearning = document.getElementById('machinelearning');

// Change year color every 1 second

const yearColors = ['red', 'blue', 'green', 'purple'];
let yearColorIndex = 0;
setInterval(() => {
    year.style.color = yearColors[yearColorIndex];
    yearColorIndex = (yearColorIndex + 1) % yearColors.length;
}, 1000);

// Change date and time background color every 1 second

const dateColors = ['lightblue', 'lightgreen', 'lightyellow', 'lightpink' ];
let dateColorsIndex = 0;
setInterval(() => {
    date.style.backgroundColor = dateColors[dateColorsIndex];
    dateColorsIndex = (dateColorsIndex + 1) % dateColors.length;
}, 1000);