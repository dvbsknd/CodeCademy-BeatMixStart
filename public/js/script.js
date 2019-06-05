// Drum Arrays
let kicks = ['test', 'data', 1];
let snares = [];
let hiHats = []; 
let rideCymbals = [];

// Function to initialise drum arrays as empty according to provided size
const initArray = (arrays, size) => {

    arrays.forEach(array => {
        // empty the array
        while (array.length !== 0) {
            array.pop();
        }
        // fill the array with 'false' entries
        let i;
        for (i = 0; i < size; i++) {
            array.push(false);
        }
    });
    
}

// Set all values in an existing array to false
const clear = (array) => {
    initArray([array], array.length)
}

// Toggles individual drum state
const toggleDrum = (drum, i) => {
    drum[i] = !drum[i];
}

// Invert array
const invert = (array) => {
    array.forEach((item, index) => {
        toggleDrum(array, index);
    })
}

// Initialise and test the arrays
initArray([kicks, snares, hiHats, rideCymbals], 16);
kicks = [false, true, false];
invert(kicks);
console.log(kicks);