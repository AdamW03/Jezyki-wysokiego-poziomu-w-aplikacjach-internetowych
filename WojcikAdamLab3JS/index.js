const fs = require("fs");
const data = fs.readFileSync('package.json');

console.log("Początel skryptu.")
console.log(data.toString());
console.log("Koniec skryptu");