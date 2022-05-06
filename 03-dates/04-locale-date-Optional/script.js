/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {

//     // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

//     // your code here

// })();



setInterval(function () {

var today = new Date();

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var dateForm = today.toLocaleDateString("en-UK", options)

var time = today.toLocaleTimeString("en-UK")

document.getElementById("target").innerHTML = dateForm + ' ' + time

});