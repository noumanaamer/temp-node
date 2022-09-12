// complete function
// invoking function in same file
// no use of export
// directly importing this file in app.js or other file 

const num1 = 3
const num2 = 2

function addValues() {
    console.log(`The sum of ${num1} amd ${num2} is: ${num1 + num2}`)
}

addValues()