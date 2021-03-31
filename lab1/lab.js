//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: 
//job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
let jobTitle="Doctor", geoLocation="USA", annSalary=100000, companyName="Medic Ltda"

console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annSalary} for ${companyName} `)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. 
//Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
let date= new Date().getFullYear()
let birthYear = 1985
let currentAge = date-birthYear

console.log(`They are ${currentAge} years old`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. 
//Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. 
//Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let age=40
let maxAge=85
let amountDay = 5
let totalAmount = ((maxAge-age)*365)*amountDay
console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`)



//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. 
//Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let circleRadius=5
let circleDiameter=circleRadius*2
let circleCircumference=circleDiameter*Math.PI
let circleArea=((circleRadius**2)*Math.PI)

console.log(`The circumference is ${circleCircumference.toFixed(2)} and the area is ${circleArea.toFixed(2)}`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. 
//Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  
//Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celTemperature=38
let farTemperature=(celTemperature*1.8)+32
let newFarTemp=95
let newCelTemp=(newFarTemp-32)*5/9
console.log(`${celTemperature}C is ${farTemperature}F `)
console.log(`${newFarTemp}F is ${newCelTemp}C `)

