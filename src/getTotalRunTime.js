const fs = require('fs');

const response = JSON.parse(process.argv[2])
console.log(`Run Started at: ${response.data.run_started_at}`)
const started = Date.parse(response.data.run_started_at);
const utcNow = new Date().getTime();
const runTime = new Date(utcNow - started);
const hours = runTime.getUTCHours().toString().padStart(2, '0')
const minutes = runTime.getUTCMinutes().toString().padStart(2, '0')
const seconds = runTime.getUTCSeconds().toString().padStart(2, '0')
const formatedTotalTime = `${hours}:${minutes}:${seconds}`
console.log(`Total Run Time: ${formatedTotalTime}`)

const outputFile = process.env.GITHUB_OUTPUT
fs.appendFile(outputFile, `total-run-time=${formatedTotalTime}\n`, function (err) {
    if (err) throw err;
    console.log('Added to output');
  });