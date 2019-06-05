// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

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
    if (array === 'kicks' || array === 'snares' || array === 'hiHats' || array === 'rideCymbals') {
        eval(array).fill(false);
    }
}

// Toggles individual drum state
const toggleDrum = (drum, i) => {
    if (i < 0 || i > 16) return;
    if (drum && typeof(i) === 'number') {
        eval(drum)[i] = !eval(drum)[i];
    }
}

// Invert array
const invert = (array) => {
    if (array === 'kicks' || array === 'snares' || array === 'hiHats' || array === 'rideCymbals') {
        array = eval(array);
        array.forEach((item, index) => {
            toggleDrum(array, index);
        })
    }
}