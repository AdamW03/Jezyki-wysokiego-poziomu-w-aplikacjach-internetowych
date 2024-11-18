// ZADANIE 1. Przelicznik walut.

const rates = {
    USD: 4.02,  // kurs dolara do PLN
    EUR: 4.35,  // kurs euro do PLN
    GBP: 5.22,  // kurs funta do PLN
    JPY: 0.026, // kurs jena do PLN
    CHF: 4.64   // kurs franka szwajcarskiego do PLN
};

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.USDToPLN = function(amount) {
    return roundTwoDecimals(amount * rates.USD);
}

exports.EURToPLN = function(amount) {
    return roundTwoDecimals(amount * rates.EUR);
}

exports.GBPToPLN = function(amount) {
    return roundTwoDecimals(amount * rates.GBP);
}

exports.JPYToPLN = function(amount) {
    return roundTwoDecimals(amount * rates.JPY);
}

exports.CHFToPLN = function(amount) {
    return roundTwoDecimals(amount * rates.CHF);
}