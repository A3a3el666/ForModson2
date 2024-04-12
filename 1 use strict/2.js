'use strict';

function isInArray(arr, value) {
    return arr.includes(value);
}

const arr = [1, 2, 3, 4, 5];
console.log(isInArray(arr, 3));
console.log(isInArray(arr, 6)); 
