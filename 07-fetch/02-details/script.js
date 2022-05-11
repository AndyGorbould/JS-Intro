/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();




// run button
let run = document.getElementById("run");
run.addEventListener("click", getX);





// place to write to!
let target = document.getElementById("target");




// make the api path as variable
let url = "http://localhost:5500/_shared/api.json"

// make the "grab from" function

async function getX() {

    // fetch the data
    let response = await fetch(url);

    // make data into json (readable)
    let data = await response.json();

    // show in console
    console.log(data);



    // write to target
    document.getElementById("target").innerHTML = "XXXXXXMMMMMMEEEEENNN";
    //= data[name[1]];


    
}















// return key & value to 'li' - "hero-id"


// abilities: (2) ['Optic force blasts', 'Master tactician']
// alterEgo: "Scott Summers"
// id: 1
// name: "Cyclops"