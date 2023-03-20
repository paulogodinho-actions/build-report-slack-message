const data = JSON.parse(process.argv[2])
console.log("--Input Data:--")
console.log(data)

// Prepare Extra Data
console.log("--Extra Info debbuging--")
console.log(data.extraInfo)
data.extraInfo = data.extraInfo.replaceAll("/n", "\\n")
console.log(data.extraInfo)

const msg = `
{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "<${data.runUrl}|${data.title}>\\n Build Number: ${data.buildNumber}\\n Branch: ${data.branch}\\n SHA: ${data.sha1}\\n ${data.extraInfo}"
			},
			"accessory": {
				"type": "image",
				"image_url": "${data.image}",
				"alt_text": "Image"
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "plain_text",
					"emoji": true,
					"text": "🖥️ Built on: ${data.machine}  |  🕓 Took: ${data.time}"
				}
			]
		},
		{
			"type": "divider"
		}
	]
}
`
console.log("--Attempting to parse as JSON:--")
console.log(msg)

const asJson = JSON.parse(msg)
const asSingleLineString =JSON.stringify(asJson)

console.log("--Slack Payload:--")
console.log(asSingleLineString)

const fs = require('fs');
const outputFile = process.env.GITHUB_OUTPUT
fs.appendFile(outputFile, `SLACK_MSG=${asSingleLineString}\n`, function (err) {
  if (err) throw err;
  console.log("--Set Output SLACK_MSG--")
});
