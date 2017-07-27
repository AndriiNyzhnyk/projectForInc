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


$("#code").on("click", function () {
    dynamicColorText(this.id);
});

$("#cvc").on("click", function () {
    dynamicColorText(this.id);
});

$("#expiry").on("click", function () {
    dynamicColorText(this.id);
});

$("#fullName").on("click", function () {
    dynamicColorText(this.id);
});

// connect "id input" to " id block text Angular"
function getPId(inputId) {
    var reqItem;
    if(inputId == "code") {
        reqItem = "codeCard";
    } else if(inputId == "cvc") {
        reqItem = "cvcCode";
    } else if(inputId == "expiry") {
        reqItem = "textAngular";
    } else {
        reqItem = "namePerson";
    }
    
    return reqItem;
}

// function dynamic color text
var previousReqItem;
function dynamicColorText(inputId) {
    var reqItem = getPId(inputId);

    if(reqItem != previousReqItem) {
        $("#" + reqItem + " p").css("color", "white");
        if(previousReqItem !== undefined) {
            $("#" + previousReqItem + " p").css("color", "#a8a3a3");
        }
        previousReqItem = reqItem;

    }

    previousReqItem = reqItem;
}
