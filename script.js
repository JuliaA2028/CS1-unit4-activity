


const body=document.querySelector("body");
//heading is a VARIABLE that points to the h1 elelment with id="main-heading"-> just like css selection

//Js can now change attributes & properties
heading.textContent ="light & dark Mode website"
heading.style.color
//define what happens when button is clicked 
function toggleMode () {
    console.log("function triggered");
    //1. flip the boolean value
    darkMode = !darkMode;
    console.log(darkMode);
}

//2. Conditionally apply styles based on mode
if (darkMode==true) {
    console.log("apply dark mode styles")
    body.style.background = "black";
   heading.style.color = "lightgrey";
   Description.style.color= "white";
   Description.textContent= "switch to dark";
   toggleBtn.textCOntent ="switch to light";
}
    else{
console.log("apply light mode styles")
body.style.background = "white";
    }

// attatch the funtion to the button
toggleBtn.addEventListener("click", toggleMode);
