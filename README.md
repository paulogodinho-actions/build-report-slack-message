# build-report-slack-message
Action to send a message containing the result of your Workflow Run, build number, branch, commit SHA, machine that it was run on and duration. You can also send extra data and display anything else you want.

## Message Examples
![Mesage Sample](./readme-assets/example_01.png "Mesage Sample")

![Mesage Sample](./readme-assets/example_02.png "Mesage Sample")

## Calling Example
```
      - name: Call Slack Messaging
        if: always()
        uses: paulogodinho-actions/build-report-slack-message@main
        with:
          webhook-url: ${{ secrets.TESTING_WEBHOOK }}
```


## Usage
The only required parameter is `webhook-url` all other parameters are infered from the job that is running, **but they can be passed to the actions if you have custom values**

### Parameters:
- `webhook-url` - [Required] Webhook url created in Slack App, more info on how to create it, bellow.
- `title` - [Optional] Title of the message, if not set the name of the workflow will be used. SUCCESS|FAILURE|CANCELLED is apprended to the end of the title
- `status` - [Optional] The status you want to display, if not set the status is the one of the **job**. The accepted values are: `success`, `failure` and `cancelled`
- `branch` - [Optional] The branch were the current workflow is running, if not set the branch displayed will be the current one.
- `sha` - [Optional] SHA of the commit, if not set the SHA displayed will be current commit one.
- `machine-name` - [Optional]  Name of the machine that run this job, if not set the value will come from `os.hostname()` function.
- `extra-info` - [Optional] More data you want to put into the message, to create new lines please use `/n` instead of the regular `\n`.
- `image` - [Optional] Image to be displayed at the right of the message, there are automatically colored, Green for SUCESS, Red for FAILURE, and Blur for CANCELLED. The icon comes from [RemixIcons](https://remixicon.com/), if you want for the Android logo to be displayed on you message, set this value to `android-fill`, to set it to the App Store logo set to `app-store-line`. Please check [RemixIcons](https://remixicon.com/) for the complete list of supported Icons. If not set the image used will be `settings-5-fill`




