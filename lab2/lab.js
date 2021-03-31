// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. Log a string with the result, 
//for example "The result of squaring the number 3 is 9."
let num1 = 3
function squareNumber(num){
    return num*num
}
let result = squareNumber(num1)
console.log(`The result of squaring the number ${num1} is ${result}`)

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. Log a string with the result, for example: "Half of 5 is 2.5.".


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result.
//Log a string with the result, for example: "2 is 50% of 4."


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on parameter, and return the result. 
//Log a string with the result, for example: "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Do some searching to see if you can find a way to round the result so that there are exactly two fixed digits after the decimal.


// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, calling to the functions you wrote earlier
//      1. Calculate half of the starting number and store the result
//      2. Square the result of the first step (#1) and store it
//      3. Find the area of a circle, using the previous result (#2) as its radius  
//      4. Calculate what percentage the squared result (#2) is of the circle's area (#3)
//      5. Format the final result for output to the console

