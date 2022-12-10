console.log(process.argv)

return

console.log(`Run Started at: ${response.data.run_started_at}`)
const started = Date.parse(response.data.run_started_at);
const utcNow = new Date().getTime();
const runTime = new Date(utcNow - started);
const hours = runTime.getUTCHours().toString().padStart(2, '0')
const minutes = runTime.getUTCMinutes().toString().padStart(2, '0')
const seconds = runTime.getUTCSeconds().toString().padStart(2, '0')
const formatedTotalTime = `${hours}:${minutes}:${seconds}`
console.log(`Total Run Time: ${formatedTotalTime}`)
// core.setOutput('total-run-time', formatedTotalTime)