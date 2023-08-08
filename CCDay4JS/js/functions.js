
/**
 * Types of Functions:
 * anonymous function
 * named function
 * arrow function
 * IIFE (inmediate invoked function expression
 * Higher Order Function
 * contstructor Function)
 */


//Anonymous Function

const user1= "Markus"

const myName = function (name, id, email) {console.log(name, id, email)}

myName("paul", 1, "peter@gmail.com");

//named function

function myCarColor(carColor){
    console.log(`My car has the color ${carColor} `);
    console.log("My car has the color " + carColor)
}
myCarColor("blue");
myCarColor("yellow");

//ARROW FUNCTION => ECMASCRIPT 5 and newer
//always declare functions with CONST to protect the purpose of the function => let will not protect the function 
const myAge =  (age) => {
    console.log(`my age is ${age}`)
}

myAge(33);



