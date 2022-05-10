/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    // button run
    let run = document.getElementById("run");
    run.onclick = function () {


        // get inputs
        let passOne = document.getElementById("pass-one").value;
        let passTwo = document.getElementById("pass-two").value;


        // if correct show alert box, incorrect borders red
        if (passOne === passTwo) {
            alert("Passwords match!")

        } else {
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
            alert("Try again!")

        }
    }



})();


// suprised at how fast this was :D I'd like another way to get both elements styled in one line though! >>>
        // document.getElementById("pass-one").style.border = "red", "5px";
        // document.getElementById("pass-two").style.border = "red", "5px";
        // document.querySelector("input").style.borderColor = "red";
        // document.getElementById("pass-one" && "pass-two").style.borderColor = "red";
        // document.querySelectorAll("#pass-one, #pass-two").style.borderColor = "red";