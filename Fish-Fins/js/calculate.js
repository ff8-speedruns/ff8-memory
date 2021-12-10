// ಠ_ಠಠ_ಠಠ_ಠಠ_ಠ
// ಠ_ಠ         ಠ_ಠ
// ಠ_ಠ         ಠ_ಠ
// ಠ_ಠ       ಠ_ಠ
// ಠ_ಠ         ಠ_ಠ
// ಠ_ಠ         ಠ_ಠ
// ಠ_ಠ         ಠ_ಠ
// ಠ_ಠಠ_ಠಠ_ಠಠ_ಠ

let vals;

// Inputs
let inputSwitch = document.getElementById("flexSwitchCheckDefault");
let wizardDiv = document.getElementById("wizard");
let inputDiv = document.getElementById("inputmode");
let inputBox = document.getElementById('pattern');

// Wizard
let atk1 = document.querySelector('input[name="attack1"]');
let dmg1 = document.getElementById('dmg1');
let atk2 = document.querySelector('input[name="attack2"]');
let dmg2 = document.getElementById('dmg2');
let atk3 = document.querySelector('input[name="attack3"]');
let dmg3 = document.getElementById('dmg3');

// Outputs
let index = document.getElementById('index');
let patD = document.getElementById('pat');
let atb = document.getElementById('atb');
let drop = document.getElementById('drop');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let gc = document.getElementById('gc');

// Initialize & load data
window.onload = async function () {
    let fins = await fetch('./data/fins.json');
    vals = await fins.json();
    CalculatePattern();
}

// Search for pattens automatically.
document.body.addEventListener('change', function (e) {
    CalculatePattern();
});
document.body.addEventListener('keyup', function (e) {
    if(dmg1.value.includes('.')) {
        dmg1.value = '';
    }
    if(dmg2.value.includes('.')) {
        dmg2.value = '';
    }
    if(dmg3.value.includes('.')) {
        dmg3.value = '';
    }
    CalculatePattern();
});

// Handling switching between input/wizard modes
inputSwitch.addEventListener('change', function (e) {
    if (inputSwitch.checked) {
        wizardDiv.style.display = "none";
        inputDiv.style.display = "block";
        inputBox.focus();
    } else {
        wizardDiv.style.display = "block";
        inputDiv.style.display = "none";
    }
});

// Radio Buttons UX: Focus damage box after a selection is made
document.querySelectorAll("input[name='attack1']").forEach((input) => {
    input.addEventListener('change', function (e) {
        dmg1.focus();
        dmg1.value = '';
    });
});
document.querySelectorAll("input[name='attack2']").forEach((input) => {
    input.addEventListener('change', function (e) {
        dmg2.focus();
        dmg2.value = '';
    });
});
document.querySelectorAll("input[name='attack3']").forEach((input) => {
    input.addEventListener('change', function (e) {
        dmg3.focus();
        dmg3.value = '';
    });
});

// Formats the pattern based on the user's input
function CalculatePattern() {
    let pat = "";
    if (inputSwitch.checked) {
        pat = document.getElementById('pattern').value;
    } else {
        pat = GetRadioValue("battle_state") + " "
            + GetRadioValue("attack1") + GetTextValue("dmg1") + " "
            + GetRadioValue("attack2") + GetTextValue("dmg2") + " "
            + GetRadioValue("attack3") + GetTextValue("dmg3");
    }

    UpdatePattern(pat);
    UpdateIndex(pat);
}
function GetRadioValue(radioName) {
    let val = document.querySelector('input[name="' + radioName + '"]:checked');
    return (val !== null) ? val.value : "";
}
function GetTextValue(textName) {
    let val = document.querySelector('input[name="' + textName + '"]');
    return (val !== null) ? val.value : "";
}
function UpdatePattern(x) {
    document.getElementById('pattern').value = x.trim();
}
function UpdateIndex(pat) {
    var tbodyRef = document.getElementById('results').getElementsByTagName('tbody')[0];

    pat = pat.trim();
    pat = pat.replace(/ /g, '');
    idx = vals.filter(element => element.pattern.replace(/ /g, '').startsWith(pat));

    var tableRows = "";
    idx.forEach((row) => {
        tableRows += `
                        <tr>
                            <th scope="row" id="index">${row.index}</th>
                            <td id="pat">${row.pattern}</td>
                            <td id="atb">${row.atbRefresh}</td>
                            <td id="drop">${row.drop}</td>
                            <td>${row.phase1Comment ? `Phase 1: ${row.phase1Comment}` : ""}<br />
                                ${row.phase2Comment ? `Phase 2: ${row.phase2Comment}` : ""}<br />
                                ${row.phase3Comment ? `Phase 3: ${row.phase3Comment}` : ""}<br />
                                ${row.generalComment ? `General: ${row.generalComment}` : ""}
                            </td>
                        </tr>
                        `;
    });
    tbodyRef.innerHTML = tableRows;
}