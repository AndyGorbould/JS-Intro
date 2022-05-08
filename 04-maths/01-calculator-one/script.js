/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("addition").addEventListener("click", function () {

        //input
        let valA = parseInt(document.getElementById("op-one").value);
        let valB = parseInt(document.getElementById("op-two").value);

        // perform an addition
        let sum = (valA) + (valB);
        document.getElementById("result").innerHTML = "answer: " + sum;
    });

    document.getElementById("substraction").addEventListener("click", function () {

        //input
        let valA = parseInt(document.getElementById("op-one").value);
        let valB = parseInt(document.getElementById("op-two").value);

        // perform an substraction
        let sum = (valA) - (valB);
        document.getElementById("result").innerHTML = "answer: " + sum;
    });

    document.getElementById("multiplication").addEventListener("click", function () {

        //input
        let valA = parseInt(document.getElementById("op-one").value);
        let valB = parseInt(document.getElementById("op-two").value);

        // perform an multiplication
        let sum = (valA) * (valB);
        document.getElementById("result").innerHTML = "answer: " + sum;
    });

    document.getElementById("division").addEventListener("click", function () {

        //input
        let valA = parseInt(document.getElementById("op-one").value);
        let valB = parseInt(document.getElementById("op-two").value);

        // perform an division
        let sum = (valA) / (valB);
        document.getElementById("result").innerHTML = "answer: " + sum;
    });

})();
