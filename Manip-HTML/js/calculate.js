//let result = document.querySelector('#result');
document.body.addEventListener('change', function (e) {
    CalculateTotal();
});

function CalculateTotal() {
    var total = 189;

    var choosables = document.querySelectorAll('input');

    for (var i = 0; i < choosables.length; i++) {
        if (choosables[i].checked) {
            total += TryParseInt(choosables[i].value);
        }
    }

    var selects = document.querySelectorAll('select');

    for (var i = 0; i < selects.length; i++) {
        total += TryParseInt(selects[i].value);
    }

    UpdateCount(total);
}

function TryParseInt(x) {
    const parsed = Number.parseInt(x);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}

function ResetAllFields() {
    var choosables = document.querySelectorAll('input');
    for (var i = 0; i < choosables.length; i++) {
        choosables[i].checked = false;
    }

    var selects = document.querySelectorAll('select');
    for (var i = 0; i < selects.length; i++) {
        selects[i].value = 0;
    }

    CalculateTotal();
}

function UpdateCount(x) {
    document.getElementById('count').innerHTML = x;
}