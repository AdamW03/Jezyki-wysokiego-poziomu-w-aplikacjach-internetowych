// ZADANIE 2. Obliczenia matematyczne.

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b !== 0 ? a / b : 'Nie można dzielić przez zerp';
}
function power(a, b) {
    return Math.pow(a, b);
}

exports.calculate = function (op, a, b) {
    switch (op) {
        case '1':
            return add(a, b);
            break;
        case '2':
            return subtract(a, b);
            break;
        case '3':
            return multiply(a, b);
            break;
        case '4':
            return divide(a, b);
            break;
        case '5':
            return power(a, b);
            break;
        default:
            return 'Nieprawidlowa operacja';
    }
}