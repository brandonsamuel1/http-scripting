var request = require('request');
var fs = require('fs');

console.log("Downloading image...")

request
  .get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    console.log("oh god, why, why is my face on fire");
    throw err;
  })
  .on('response', function(response) {
    console.log("Response Status Code: ", response.statusCode);
    console.log("Response Status Message: ", response.statusMessage);
    console.log("Response Content Type: ", response.headers['content-type']);
  })
  .on('end', function() {
    console.log("Image downloaded!");
  })
  .pipe(fs.createWriteStream('./future.jpg'));



// var req_thing = request.get('https://sytantris.github.io/http-examples/future.jpg');
// req_thing.on('error', () => {console.log("OH GOD NO")});
