'use strict'

let student_1 = { yearOfStuding: 2021, facultyName: 'someName_1' };
let student_2 = { yearOfStuding: 2013, facultyName: 'someName_2' };
let student_3 = { yearOfStuding: 2019, facultyName: 'someName_3' };
let student_4 = { yearOfStuding: 2017, facultyName: 'someName_4' };
let student_5 = { yearOfStuding: 2014, facultyName: 'someName_5' };
let student_6 = { yearOfStuding: 2016, facultyName: 'someName_6' };
let student_7 = { yearOfStuding: 2020, facultyName: 'someName_7' };
let student_8 = { yearOfStuding: 2022, facultyName: 'someName_8' };
let student_9 = { yearOfStuding: 2018, facultyName: 'someName_9' };
let student_10 = { yearOfStuding: 2015, facultyName: 'someName_10' };

let studentArray = [];

studentArray.push(student_1, student_2, student_3, student_4, student_5, student_6, student_7, student_8, student_9, student_10);

console.log(studentArray);
let facultyNames = studentArray.map(function(name){
    return name.facultyName;
})
console.log(facultyNames);

let yearsOfStudyingSum = studentArray.reduce(function(yearsSum, currentObj){
return yearsSum + currentObj.yearOfStuding;
}, 0) 

console.log("Years of studying sum number: "+yearsOfStudyingSum);
