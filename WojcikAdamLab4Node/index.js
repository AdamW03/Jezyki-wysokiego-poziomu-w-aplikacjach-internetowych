// ZADANIE 1. Wywołania zwrotne

const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    if (request.url === '/') {
        fs.readFile('./titles.json', function(err, data) {
            if (err) {
                console.error(err);
                response.end('titles.json error');
            }
            else {
                const titles = JSON.parse(data.toString());
                fs.readFile('./teamplate.html', function(err, data) {
                    if (err) {
                        console.error(err);
                        response.end('teamplate.html error');
                    } else {
                        const tmpl = data.toString();
                        const html = tmpl.replace('%', titles.join('</li><li>'));
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.end(html);
                    }
                });
            }
        });
    }
}).listen(8000, "127.0.0.1");