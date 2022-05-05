/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


const bRed = document.getElementById("red");
bRed.addEventListener("click", function(e) {
    console.log("clicked!");
    document.body.style.backgroundColor = 'red';
});

const bGreen = document.getElementById("green");
bGreen.addEventListener("click", function(e) {
    console.log("clicked!");
    document.body.style.backgroundColor = 'green';

});

const bYel = document.getElementById("yellow");
bYel.addEventListener("click", function(e) {
    console.log("clicked!");
    document.body.style.backgroundColor = 'yellow';

});

const bBlu = document.getElementById("blue");
bBlu.addEventListener("click", function(e) {
    console.log("clicked!");
    document.body.style.backgroundColor = 'blue';

});
