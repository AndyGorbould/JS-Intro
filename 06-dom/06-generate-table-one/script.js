/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function tableCreate() {
        const body = document.getElementById("target");
        let tbl = document.createElement("table");
      
        for (let i = 0; i < 10; i++) {
          const tr = tbl.insertRow();
          for (let j = 0; j < 1; j++) {
            if (i === 2 && j === 1) {
              break;
            } else {
              const td = tr.insertCell();
            }
          }
        }
        body.appendChild(tbl);
      }
      
      tableCreate();

})();


// using https://stackoverflow.com/questions/14643617/create-table-using-javascript
// I don't get this :/ the way I expected totally doesn't work


//      document.createElement("table");, "td", "tr"*10 