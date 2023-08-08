console.log("from operators.js")

/**
 * basic operators
 * 
 * + => mathematical operator for adding values
 * - => mathematical opeator
 * / => divide operator
 * * => multiply operator
 * OR => checks if one value of multiple values exist
 * AND => checks if both / all values are existing
 * 
 */

const resultOfTwoNumbers = 2 + 4;
console.log(resultOfTwoNumbers);

const numberAsNumber = 34+6;
const numerAsString = "34"+6;
console.log(numberAsNumber,numerAsString);

console.log("peter " + "wolf");

const divideTwoNumersWithString = "12" / "6";
console.log(divideTwoNumersWithString);

const divideTwoNumbers = 12/6;
//console.log("12 / 6=",divideTwoNumbers);



/** if / else statement */
/**
 * = =>assign a value
 * == => check if both sides are the same value
 * === => check if both sides are the same value and data type
 */

if(divideTwoNumbers === 2) {console.log("that is correct")}
else{console.log("that is wrong")};

/** The OR and AND operators
 * || => OR operator
 * 
 */

const value1 = 22;
const value2 = 22;

if(value1 == "22" && value2 === 22){console.log("values are true")} else {console.log("not right")};


