/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let grabSource = document.getElementsByTagName("img");

    console.log(grabSource);

        let grabLink = grabSource.getAttributeNS("data-hover:");

        console.log(grabSource.getAttributeNS("data-hover:"));

})();
