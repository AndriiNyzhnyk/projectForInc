var module = angular.module("MyApp", []);

function validInput(input) {
    console.log(input);
    var value = input.value;
    var rep = /[-\.;":'a-zA-Zа-яА-Я]/;

    if (rep.test(value)) {
        value = value.replace(rep, '');
        input.value = value;
    }
    
    if(+input.value.length > 19) {
        console.log(+input.value.length);
        input.value = value.substring(0, value.length - 1)
    }


}

