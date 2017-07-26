var module = angular.module("MyApp", []);

// function for validation of "input" from letters and characters
function validInputNumber(input) {
    // filter number
    var value = input.value;
    var rep = /[-+*\.;":'a-zA-Zа-яА-Я]/;

    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }

    // filter count number
    if (input.id == "cvc") {
        if (+input.value.length > 3) {
            input.value = value.substring(0, value.length - 1);
        }
    }

    if(input.id == "expiry") {
        if (+input.value.length > 5) {
            input.value = value.substring(0, value.length - 1);
        }
    }

    if (+input.value.length > 19) {
        input.value = value.substring(0, value.length - 1);
    }

}

// function for validation of "input" from numbers and characters
function validInputString(input) {
    var value = input.value;
    var rep = /[-+*/()\.;":'0-9]/;

    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }

    if(+value.length > 40) {
        input.value = value.substring(0, value.length - 1);
    }
}