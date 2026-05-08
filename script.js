// Create a boolean variable to track current mod
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector()
lets us SELECT an HTML ELEMENT and store a reference (pointer) to it in a VARIABLE */


const body=document.querySelector("body");

//heading is a VARIABLE that points to the h1 element with id="main-heading"-> just like css selection
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");

//Js can now change attributes & properties
heading.textContent ="light & dark Mode website";


//define what happens when button is clicked 
function toggleMode () {
    console.log("function triggered");
    //1. flip the boolean value
    darkMode = !darkMode;
    console.log(darkMode);
//2. Conditionally apply styles based on mode
if (darkMode==true) {
    console.log("apply dark mode styles");
    body.style.background = "black";
   heading.style.color = "lightgrey";
   description.style.color= "white";
   description.textContent= "switch to dark";
   toggleBtn.textContent ="switch to light";
   image.src = "dark.png";
}
    else{
console.log("apply light mode styles");
body.style.background = "white";
heading.style.color = "black";
   description.style.color= "black";
   description.textContent= "switch to light";
   toggleBtn.textContent ="switch to dark";
   toggleBtn.style.background= "lightgrey";
   image.src = "light.png";
    }
}
// attatch the funtion to the button
toggleBtn.addEventListener("click", toggleMode);
