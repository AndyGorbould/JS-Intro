/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function agt() {

    var age = prompt("Age?");
    var gender = prompt("Gender?");
    var town = prompt("Town?");
    var yn = confirm(`Is this correct? \n\n Age: ${age}\n Gender: ${gender}\n Town: ${town}`);
    if (yn == true) {
        alert("Thank You!\n \n All of your data has been sold to criminals!")
    }
        else {
            alert("oh dear we all make mitsakes!");
            agt()
        }

})();