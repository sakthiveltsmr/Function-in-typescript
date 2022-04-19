//function declaration
function main(num1, num2) {
    return console.log(num1 * num2);
}
main(2, 3);
//function with parameter assign value
function main2(num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    return console.log(num1 + num2);
}
main2(3);
//function with optional parameter
function main3(num1, num2) {
    if (num2) {
        return console.log(num1 + num2);
    }
    else {
        return console.log(num1);
    }
}
main3(2);
// function without using interface
function main4(person) {
    return console.log("".concat(person.firstname).concat(person.lastname));
}
var p = {
    firstname: "sakthi",
    lastname: "vel"
};
main4(p);
function main5(person) {
    console.log("".concat(person.firstname).concat(person.lastname));
}
var person = {
    firstname: "sathish",
    lastname: "kumar"
};
main5(person);
