'use strict'

let customArray = [-9, 1, 10, -56, -106, 55, 102, 22, 11, -16, -1, 55, 99, 255, 124, 34, 76, 67, -2, -55, 29, 31, 0]

let ascSorting = customArray.sort(function (o1, o2) {
    return o1 - o2;
});
console.log('Ascended sorting: ' + ascSorting);
console.log('Descended sorting: ' + ascSorting.reverse());

let positiveNumbers = ascSorting.filter(function (x) {
    return x >= 0;
})

console.log();
console.log('Positive numbers: ' + positiveNumbers);

let negativeNumbers = ascSorting.filter(function (x) {
    return x < 0;
})
console.log('Negative numbers: ' + negativeNumbers);