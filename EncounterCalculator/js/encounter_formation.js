// Won't run locally due to CORS. Will run fine when uploaded anywhere though.

// Tables
let encounters, formations, maps, rng;

// Reads a file and turns it into an object.
const loadFiles = async (file) => {
    let response = await fetch(`./js/${file}.json`);
    let parsed = await response.json();
    return Promise.resolve(parsed[0]);
}

// General first function to load everything we need.
const start = async () => {
    encounters = await loadFiles('encounters');
    formations = await loadFiles('formations');
    maps = await loadFiles('maps');
    rng = await loadFiles('rng');
}

// Load all our json files into the script.
start();

const prevEncFormationInput = document.getElementById("prev-enc-formation");
const prevEncNumberInput = document.getElementById("prev-enc-number");
const mapIdInput = document.getElementById("map-id");
const submitButton = document.getElementById('submit-button');
const resultsDiv = document.getElementById('results');

const nextEncFormation = (a) => {
    // If map id was provided, return enemy encounter formation.
    // If not, then just return the formation number.
    let mapId = mapIdInput.value;
    let possibleFormations = (mapId in formations) ? formations[mapId] : null;
    
    if (rng[a] < 128) {
        resultFormation = (possibleFormations) ? encounters[possibleFormations[0]] : 1;
    } else if (rng[a] < 192) {
        resultFormation = (possibleFormations) ? encounters[possibleFormations[1]] : 2;
    } else if (rng[a] < 240) {
        resultFormation = (possibleFormations) ? encounters[possibleFormations[2]] : 3;
    } else {
        resultFormation = (possibleFormations) ? encounters[possibleFormations[3]] : 4;
    }
}

submitButton.addEventListener('click', () => {
    if (prevEncNumberInput.value === "") {
        alert("Enter a previous encounter number")
    } else {
        const result = nextEncFormation(parseInt(prevEncNumberInput.value));
        resultsDiv.innerHTML = `<h1>Formation: ${resultFormation}</h1>`
    }
});