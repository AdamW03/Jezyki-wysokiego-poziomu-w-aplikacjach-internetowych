// ZADANIE 1. Wywołania zwrotne

// v1
// const http = require('http');
// const fs = require('fs');
//
// http.createServer(function(request, response) {
//     if (request.url === '/') {
//         fs.readFile('./titles.json', function(err, data) {
//             if (err) {
//                 console.error(err);
//                 response.end('titles.json error');
//             }
//             else {
//                 const titles = JSON.parse(data.toString());
//                 fs.readFile('./teamplate.html', function(err, data) {
//                     if (err) {
//                         console.error(err);
//                         response.end('teamplate.html error');
//                     } else {
//                         const tmpl = data.toString();
//                         let html = tmpl.replace('%', titles.join('</li><li>'));
//                         response.writeHead(200, {'Content-Type': 'text/html'});
//                         response.end(html);
//                     }
//                 });
//             }
//         });
//     }
// }).listen(8000, "127.0.0.1");

// v2
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    getTitles(res);
}).listen(8000, "127.0.0.1");

function getTitles(res) {
    fs.readFile('./titles.json', function (err, data) {
        if (err) {
            hadError(err, res);
        } else {
            getTeamplate(JSON.parse(data.toString()), res);
        }
    });
}

function getTeamplate(titles, res) {
    fs.readFile('./teamplate.html', function (err, data) {
        if (err) {
            hadError(err, res);
        } else {
            formatHtml(titles, data.toString(), res);
        }
    });
}

function formatHtml(titles, tmpl, res) {
    let html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}

function hadError(err, res) {
    console.error(res);
    res.end('Error');
}