var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', (err) => {
        throw err;
       })
       .on('response', (response) => {
        console.log(response.statusMessage);
        console.log(response.headers['content-type']);
       })
       .on('data', () => {
        console.log("Downloading image...");
       })
       .on('end', () => {
        console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));