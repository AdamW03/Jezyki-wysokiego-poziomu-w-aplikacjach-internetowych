// ZADANIE 1. Przelicznik walut.

let Currency = function(usd, eur, gbp, jpy, chf ){
    this.rates = {};
    this.rates.USD = usd;
    this.rates.EUR = eur;
    this.rates.GBP = gbp;
    this.rates.JPY = jpy;
    this.rates.CHF = chf;
}

Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}
Currency.prototype.USDToPLN = function(amount) {
    return this.roundTwoDecimals(amount * this.rates.USD);
}
Currency.prototype.EURToPLN = function(amount) {
    return this.roundTwoDecimals(amount * this.rates.EUR);
}
Currency.prototype.GBPToPLN = function(amount) {
    return this.roundTwoDecimals(amount * this.rates.GBP);
}
Currency.prototype.JPYToPLN = function(amount) {
    return this.roundTwoDecimals(amount * this.rates.JPY);
}
Currency.prototype.CHFToPLN = function(amount) {
    return this.roundTwoDecimals(amount * this.rates.CHF);
}

module.exports = exports = Currency;