// ZADANIE 3. SERWER WWW
const http = require('http');
const isString = require('is-string');

const hostname = '127.0.0.1';
const port = 8888;


const server = http.createServer((request, response) => {
    const results = [
        `isString('Hello, world!') => ${isString('Hello, world!')}`,
        `isString(123) => ${isString(123)}`,
        `isString({}) => ${isString({})}`,
        `isString('123') => ${isString('123')}`,
        `isString(['a', 'b', 'c']) => ${isString(['a', 'b', 'c'])}`
    ];

    results.forEach(result => {
        console.log(result);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Witaj, z serwera node.js !\n Tym razem dluzsza wiadomosc :)');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

