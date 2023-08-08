
/** this is a comment */
/** console.log prints output to console */
console.log("hello")
console.error("there is something wrong")
console.warn("this is a warning")


/** declarations 
 * const (declares a unmutible variable)
 * firstname (name of variable)
 * = (defines the value for the variable)
 * "Peter" (value for the variable)
*/


/** declare user variables */
const firstName =  "Peter";
let lastName = "Wolf";
const age = 44;
const email = "peter@wolf.com"
/**end user variables */


lastName = "Mueller"

/** calling variables only possible AFTER declaration !!! */
console.log("firstname:",firstName)
console.log("lastname:",lastName)
/** Basic data types */

const string = "Peter";
const number = 34;
const float = 34.56 // comma number are floats - not numbers
const boolean = true // true OR false are the 2 options



/** data type object combienes related information */
const userObject = {
    firstName: "Peter",
    lastName: "Wolf",
    age: 44,
    email: "peter@wolf.com"
}
console.log("complet object",userObject)

/** call specific entry in object with DOT-NOT-NOTATION */
console.log("complet object",userObject.email)

/** call specific entry in object with [] */
console.log("alternative call of email:", userObject["email"])




const arrayOfColors = ["red", "blue","yellow", "green"];
const arrayOfCars = ["audi", "bmw"];

console.log(arrayOfColors)
console.log("call the blue color:", arrayOfColors[1]);

console.log("complete array", arrayOfColors);
/** call a specific entry in an arry with [] */

const listOfUsers = [
    {
    name: "peter",
    age: 44
    }
    {
     name: "max",
     age: 66
    }
    userObject
]