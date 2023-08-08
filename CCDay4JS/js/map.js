console.log("from map.js");

/** MAP method is related to ARRAYS */

const array = ["Peter", "Klaus", "Markus", "Robert"];
console.log(array)
/* map is exapting a CALLBACK-FUNCTION */
array.map(function(){console.log("here is something processed")})

/* widley used writing style of map() */

array.map((item)=>{console.log(item)})

//DOM MANIPULATE