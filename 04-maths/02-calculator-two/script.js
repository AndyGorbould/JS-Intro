/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // to get the value of an input: document.getElementById("element-id").value

    function performOperation(operation) {
        // perform the operation
    }

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);

            let valA = parseInt(document.getElementById("op-one").value);
            let valB = parseInt(document.getElementById("op-two").value);
            switch ($btn.id) {

                case "addition":
                    let addition = valA + valB;
                    document.getElementById("result").innerHTML = "answer: " + addition;
                    break;

                case "substraction":
                    let substraction = valA - valB;
                    document.getElementById("result").innerHTML = "answer: " + substraction;
                    break;

                case "multiplication":
                    let multiplication = valA * valB;
                    document.getElementById("result").innerHTML = "answer: " + multiplication;
                    break;

                case "division":
                    let division = valA / valB;
                    document.getElementById("result").innerHTML = "answer: " + division;
                    break;
            }

        });
    });

})();



