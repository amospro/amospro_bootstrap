/** DOM Manipulation */


const body = document.body;
//console.log(body);

const myContent = document.getElementById("myContent");

/** manipulate the innerText // innerHTML of the selected element my Content */
myContent.innerText = "This is from javascript";
myContent.innerHTML = `<h1>this is my h1 from Java Script</h1>`

/** Add an element to the frontend */
const newElement = document.createElement("div");
newElement.className = "redBackgroung";
newElement.innerText = "this is my new element"
console.log(newElement)

myContent.append(newElement);


