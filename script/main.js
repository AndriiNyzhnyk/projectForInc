let module = angular.module("MyApp", []);

// function for validation of "input" from letters and characters
function validInputNumber(input) {
    // filter number
    let value = input.value;
    let rep = /[-+*\.;":'a-zA-Zа-яА-Я]/;

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
    let value = input.value;
    let rep = /[-+*/()\.;":'0-9]/;

    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }

    if(+value.length > 40) {
        input.value = value.substring(0, value.length - 1);
    }
}


$("#code").on("click", function() {
    slider(false);
    dynamicColorText(this.id);
    hideDefaultText(this.id);
    auditActiveInput(this.id);
});

$("#fullName").on("click", function() {
    slider(false);
    dynamicColorText(this.id);
    hideDefaultText(this.id);
    auditActiveInput(this.id);
});

$("#expiry").on("click", function() {
    slider(false);
    dynamicColorText(this.id);
    hideDefaultText(this.id);
    auditActiveInput(this.id);
});


$("#cvc").on("click", function() {
    slider(true);
    dynamicColorText(this.id);
    hideDefaultText(this.id);
    auditActiveInput(this.id);
});

// connect "id input" to " id block text Angular"
function getPId(inputId) {
    let reqItem;
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

// function dynamic color text card
let previousReqItem;
function dynamicColorText(inputId) {
    let reqItem = getPId(inputId);

    if(reqItem != previousReqItem) {
        $("#" + reqItem + " p").css("color", "white");
        if(previousReqItem !== undefined) {
            $("#" + previousReqItem + " p").css("color", "#a8a3a3");
        }
        previousReqItem = reqItem;
    }
}

// function hide default text card
function hideDefaultText(inputId) {
    let id = getIdDefaultText(inputId);
    $("#" + id).hide();
}

function showDefaultText(id) {
    $("#" + id).show();
}

// connect "id input" to " id default text card"
function getIdDefaultText(inputId) {
    let reqItem;
    if(inputId == "code") {
        reqItem = "defaultCodeCard";
    } else if(inputId == "cvc") {
        reqItem = "defaultCvcCode";
    } else if(inputId == "expiry") {
        reqItem = "defaultTextAngular";
    } else {
        reqItem = "defaultNamePerson";
    }

    return reqItem;
}

function auditActiveInput(id) {
    setTimeout( () => {
        let elem = document.getElementById("" + id).value.length;

        if(elem == 0) {
            let elemShow = getIdDefaultText(id);
            showDefaultText("" + elemShow);
        }
    }, 2000);

}

// function control slider
let card2 = document.getElementById("card2");
let widthSlider = card2.offsetWidth;
let sup = 0;

function slider(way) {
    if (way == true && sup == 0) {
        card2.style.marginLeft = -widthSlider - 4 + "px";
        sup--;
    }

    if(way == false && sup < 0) {
        card2.style.marginLeft = widthSlider + 4 + "px";
        sup++;
    }
}

(function infoSystem() {
    let platform = navigator.platform;
    let osW = platform.slice(0, 7);

    if (osW === "Win32") {
        setSettingViewForWindows();
    }
})();

function setSettingViewForWindows() {
    $("#defaultCodeCard ul li").css("padding", "0");
    $("#defaultTextAngular ul li").css("padding", "0");
    $("#defaultCvcCode ul li").css("padding", "0");
}
