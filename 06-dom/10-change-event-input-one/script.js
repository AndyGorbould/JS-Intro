/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let pass = document.getElementById("pass-one");
    let indic = document.getElementById("counter");

    pass.addEventListener("input", () => {
        let count = pass.value.length;

    indic.innerHTML = count + "/10";
    });


    // console.log(count);



})();


// check https://www.youtube.com/watch?v=bIk5RBnfP24