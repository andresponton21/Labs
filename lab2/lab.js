// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. Log a string with the result, 
//for example "The result of squaring the number 3 is 9."

const squareNumber = num => {
    let result= num*num
    console.log(`The result of squaring the number ${num} is ${result}`)
    return result
}
squareNumber(3)

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. Log a string with the result, for example: "Half of 5 is 2.5.".

const halfNumber = num => {
    let result= num/2
    console.log(`Half of: ${num} is: ${result}`)
    return result
}
halfNumber(10)

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result.
//Log a string with the result, for example: "2 is 50% of 4."

const percentOf = (num1, num2) => {
    let result= (num1/num2)*100
    console.log(`${num1} is ${result.toFixed(2)}% of ${num2}`)
    return result
}
percentOf(25, 100)
// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on parameter, and return the result. 
//Log a string with the result, for example: "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Do some searching to see if you can find a way to round the result so that there are exactly two fixed digits after the decimal.
const areaOfCircle = rad => {
    let result= ((rad**2)*Math.PI)
    console.log(`The area for a circle with radius ${rad} is ${result.toFixed(2)}`)
    return result
}

areaOfCircle(5)

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, calling to the functions you wrote earlier
//      1. Calculate half of the starting number and store the result
//      2. Square the result of the first step (#1) and store it
//      3. Find the area of a circle, using the previous result (#2) as its radius  
//      4. Calculate what percentage the squared result (#2) is of the circle's area (#3)
//      5. Format the final result for output to the console

const runAll = num => {
    let result0= halfNumber(num)
    let result1= squareNumber(result0)
    let result2=  areaOfCircle(result1)
    let result3= percentOf(result1, result2.toFixed(2))
    
    return [num, result0, result1, result2, result3]
}

const results=runAll(20)
console.log(`The half of ${results[0]} is  ${results[1]} the square of that is ${results[2]} the area of a circle is ${results[3].toFixed(2)} the porcentage is ${results[4].toFixed(2)}%`)