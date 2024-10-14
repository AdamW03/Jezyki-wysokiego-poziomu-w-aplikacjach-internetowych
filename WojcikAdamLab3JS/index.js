const fs = require("fs");

console.log("Początel skryptu.")

fs.readFile('package.json', function(err, data) {
    if (err) { return console.error(err); }
    console.log(data.toString());
});

console.log("Koniec skryptu.");