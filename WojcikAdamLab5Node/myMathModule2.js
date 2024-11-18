// ZADANIE 2. Obliczenia matematyczne.

let MyMathModule = function(){
    const a = 0;
}

MyMathModule.prototype.add = function(a, b) {
    return parseFloat(a) + parseFloat(b);
}

MyMathModule.prototype.subtract = function(a, b) {
    return a - b;
}

MyMathModule.prototype.multiply = function(a, b) {
    return a * b;
}

MyMathModule.prototype.divide = function(a, b) {
    return b !== 0 ? a / b : 'Nie można dzielić przez zero';
}

MyMathModule.prototype.power = function(a, b) {
    return Math.pow(a, b);
}

MyMathModule.prototype.calculate = function(op, a, b) {
    switch (op) {
        case '1':
            return this.add(a, b);
        case '2':
            return this.subtract(a, b);
        case '3':
            return this.multiply(a, b);
        case '4':
            return this.divide(a, b);
        case '5':
            return this.power(a, b);
        default:
            return 'Nieprawidlowa operacja';
    }
}

module.exports = exports = MyMathModule;