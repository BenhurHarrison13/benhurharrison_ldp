// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.
function processNumbers(numbers, processFunction){
    for (let i = 0; i < numbers.length; i++) {
      processFunction(numbers[i]);
    }
}  
function squareNumber(number){
    console.log(number * number);
}
const numbers = [1, 2, 3, 4, 5];  
processNumbers(numbers,squareNumber);

/*
Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents 
the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
*/


const getFirstLetters = (firstName, lastName) => {
    const firstWordInitial = firstName[0];
    const lastWordInitial = lastName[0];
    return `${firstWordInitial}${lastWordInitial}`;
};

console.log(getFirstLetters('Roger', 'Waters')); 