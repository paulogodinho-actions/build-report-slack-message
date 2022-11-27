const fs = require('fs');
const outputFile = process.env.GITHUB_OUTPUT

fs.appendFile(outputFile, 'AAAA=BBBB\n', function (err) {
  if (err) throw err;
  console.log('Added to output');
});