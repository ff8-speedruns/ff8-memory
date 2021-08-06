// Won't run locally due to CORS. Will run fine when uploaded anywhere though.

// Tables
let encounters, formations, maps, rng;

let currentFormation;

// Reads a file and turns it into an object.
async function LoadFiles(file) {
    let response = await fetch(`./js/${file}.json`);
    let parsed = await response.json();
    return Promise.resolve(parsed[0]);
}

// General first function to load everything we need.
async function Start() {
    encounters = await LoadFiles('encounters');
    formations = await LoadFiles('formations');
    maps = await LoadFiles('maps');
    rng = await LoadFiles('rng');
    PopulateMapIds(maps);
    PopulateEncounterIds(formations, encounters, null);
    mapIdInput.value = "0";
    prevEncFormationInput.value = "0";
}

// Load all our json files into the script.
Start();

const prevEncFormationInput = document.getElementById("prev-enc-formation");
const prevEncNumberInput = document.getElementById("prev-enc-number");
const mapIdInput = document.getElementById("map-id");
const resultsDiv = document.getElementById('results');
const advancedMode = document.getElementById('advanced');
const advancedOptions = document.getElementById('advancedOptions');
const advancedMaps = document.getElementById('usefulMaps');
const incrementButton = document.getElementById('increment');
const offsetInput = document.getElementById('offset');

function NextEncFormation(index, previousEncounter = -1) {
    // If map id was provided, return enemy encounter formation.
    // If not, then just return the formation number.
    let mapId = mapIdInput.value;
    let offsetValue = offsetInput.value;
    console.log(`offset value: ${offsetValue}`);
    let possibleFormations = (mapId in formations) ? formations[mapId] : null;
    let previousEncs = [false, false, false, false];
    let indexValue = ( parseInt(rng[index]) + parseInt(offsetValue) );
    let rngValue = indexValue % 255;


    if (possibleFormations) {
        previousEncs[previousEncounter] = true;
    }

    if ( rngValue < 128 && !previousEncs[0]) {
        resultFormation = "1" + ((possibleFormations) ? ": " + encounters[possibleFormations[0]] : "");
        currentFormation = 0;
    } else if ( rngValue < 192 && !previousEncs[1]) {
        resultFormation = "2" + ((possibleFormations) ? ": " + encounters[possibleFormations[1]] : "");
        currentFormation = 1;
    } else if ( rngValue < 240 && !previousEncs[2]) {
        resultFormation = "3" + ((possibleFormations) ? ": " + encounters[possibleFormations[2]] : "");
        currentFormation = 2;
    } else {
        resultFormation = "4" + ((possibleFormations) ? ": " + encounters[possibleFormations[3]] : "");
        currentFormation = 3;
    }
}

function CalculateFormation() {
    if (prevEncNumberInput.value === "") {
        resultsDiv.innerHTML = `<h2>Enter a previous encounter number.</h2>`
    } else {
        const result = NextEncFormation(parseInt(prevEncNumberInput.value), parseInt(prevEncFormationInput.value));
        resultsDiv.innerHTML = `<h1>Formation ${resultFormation}</h1>`
    }
}

function PopulateMapIds(mapArray) {
    for (const [key, value] of Object.entries(mapArray)) {
        // If the mapId isn't a number, skip it.
        if (isNaN(value.locationId))
            continue;

        // Add the map id as an option in the select box
        var opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = `${key} - ${value.location}`;
        mapIdInput.appendChild(opt);
    }
}


function PopulateEncounterIds(formationArray, encounterArray, mapId) {
    // Clear the select box
    prevEncFormationInput.innerHTML = '';

    // Check if we even have formation IDs for this map.
    if (formationArray.hasOwnProperty(mapId) && Object.keys(formationArray[mapId]).length > 0) {
        var opt = document.createElement('option');
        opt.value = -1;
        opt.innerHTML = `None`;
        prevEncFormationInput.appendChild(opt);

        for (const [key, value] of Object.entries(formationArray[mapId])) {
            var opt = document.createElement('option');
            opt.value = key;
            opt.innerHTML = `${key} - ${encounterArray[value]}`;
            prevEncFormationInput.appendChild(opt);
        }
    } else {
        var opt = document.createElement('option');
        opt.innerHTML = `No Encounters`;
        prevEncFormationInput.appendChild(opt);
    }
}

prevEncFormationInput.addEventListener('change', () => {
    CalculateFormation();
});
prevEncNumberInput.addEventListener('change', () => {
    CalculateFormation();
});
offsetInput.addEventListener('change', () => {
    CalculateFormation();
});
mapIdInput.addEventListener('change', () => {
    PopulateEncounterIds(formations, encounters, mapIdInput.value);
    CalculateFormation();
});
advancedMode.addEventListener('change', () => {
    if (advancedMode.checked) {
        advancedOptions.style.display = "block";
    } else {
        // Clear everything
        advancedOptions.style.display = "none";
        mapIdInput.value = null;
        prevEncFormationInput.value = null;
        PopulateEncounterIds(formations, encounters, null);
    }
    CalculateFormation();
});
incrementButton.addEventListener('click', () => {
    prevEncNumberInput.value++;
    prevEncFormationInput.value = currentFormation;
    CalculateFormation();
});

advancedMaps.addEventListener('change', () => {
    if (usefulMaps.checked) {
        extraMaps.style.display = "block";
    } else {
        extraMaps.style.display = "none";
    }
});