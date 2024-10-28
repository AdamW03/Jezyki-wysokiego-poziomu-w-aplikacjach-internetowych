// ZADANIE 2. Obliczenia matematyczne.

const myMathModule1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
let myMathModule2 = new MyMathModule();
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Podaj pierwsza liczbe: ", function (liczba1) {
    rl.question("Podaj druga liczbe: ", function (liczba2) {
        console.log(`\nPodane liczby to ${liczba1} oraz ${liczba2}`);
        console.log("\n1 - Dodawanie");
        console.log("2 - Odejmowanie");
        console.log("3 - Mnozenie");
        console.log("4 - Dzielenie");
        console.log("5 - Potegowanie");
        rl.question("Wybierz operacje z powyzszych poprzez liczbe: ", function (operacja) {
            console.log(`\nWynik wybranej operacji (${operacja}) na podanych liczbahc to: ` + myMathModule1.calculate(operacja,liczba1,liczba2));
            console.log("\n\tA w wersji obiektowej: " + myMathModule2.calculate(operacja,liczba1,liczba2));
        })
    });
});