/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let url = "http://localhost:5500/_shared/api.json"

    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data);
        }
        

        
        );

})();

// https://www.youtube.com/watch?v=-ooaEey3X7w
// ^^^^ very helpful :)