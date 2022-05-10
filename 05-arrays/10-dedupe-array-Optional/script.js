/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    const btn = document.getElementById('run');
    btn.onclick = function () {

        Array.prototype.unique = function () {
            let unique = [];
            for (i = 0; i < this.length; i++) {
                var current = this[i];
                if (unique.indexOf(current) < 0) unique.push(current);
            }
            return unique;
        }
        console.log(fruits.unique());



    }
})();

// https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
// Adding a unique Method to the Array Prototype

