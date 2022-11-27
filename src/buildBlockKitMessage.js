const fs = require('fs');


const outputFile = process.env.GITHUB_OUTPUT

fs.readFile(outputFile, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
});
  


fs.appendFile(outputFile, 'AAAA=BBBB', function (err) {
  if (err) throw err;
  console.log('Added to output');
});

fs.readFile(outputFile, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
});

console.log("Yep");