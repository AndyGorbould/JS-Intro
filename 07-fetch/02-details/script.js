// run button
let run = document.getElementById("run");
run.addEventListener("click", getX);

// make the api path as variable
let url = "http://localhost:5500/_shared/api.json"

// make the "grab from" function
async function getX() {

    // get user input
    // regex is checking if input is a number
    let regex = /^\d+$/;

    let input = document.getElementById("hero-id").value;
    // ! is asking if this is NOT a number
    if (!input.match(regex)) {
        alert("not number :(");
        return;
    }

    let i = parseInt(input);

    // fetch the data
    let response = await fetch(url);

    // catch an error
    if (!response.ok) {
        let message = `SOMETHING BAD!: ${response.status}`;
        alert(`SOMETHING BAD!: ${response.status}`);
        throw new Error(message);
    }

    // convert data into json (readable)
    let data = await response.json();

    // show in console
    console.log(data);

    let dude = data.heroes[i - 1];
    if (i > data.heroes.length || i < 1) {
        alert("I need more heros");
    } else {

        console.log(dude);

        // this looks for the template
        let template = document.getElementById("tpl-hero");
        let copyTemplate = template.content.cloneNode(true);

        // write content
        // copyTemplate.querySelector(".title").textContent = (dude.id);
        copyTemplate.querySelector(".name").textContent = (dude.name);
        copyTemplate.querySelector(".alter-ego").textContent = (dude.alterEgo);
        copyTemplate.querySelector(".powers").textContent = (dude.abilities);

        // write content to doc
        document.getElementById("target").appendChild(copyTemplate);
    }
}