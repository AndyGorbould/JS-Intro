/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.








var run = document.getElementById("run").addEventListener("click", output);

function output() {

 //user inputs
var uDay = document.getElementById("dob-day").value;
var uMon = document.getElementById("dob-month").value;
var uYear = document.getElementById("dob-year").value;

//current
var date = new Date();
var cDay = date.getDate();
var cMon = date.getMonth();
var cYear = date.getFullYear();

//calculations
var outYear = cYear - uYear;
        console.log(outYear);  //this works :D

var outMon = cMon - uMon +1;
        console.log(outMon);

var outDay = cDay - uDay +1;
        console.log(outDay);

//print        
document.getElementById("out").innerHTML = "You are: </br> YEARS: " + outYear + "</br> MONTHS: " + outMon + "</br> DAYS: " + outDay;

}



