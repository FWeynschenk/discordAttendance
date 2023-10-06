# discordAttendance
Nodejs program that connects time spent in voice chats to google sheets

1. `git clone https://github.com/FWeynschenk/discordAttendance.git`   
2. `npm ci`
3. [Create a discord app](https://discord.com/developers/docs/getting-started#step-1-creating-an-app), name it, give it an icon, **invite it to your server**
4. fill out `.env` as specified below.
5. `node .` to start the bot.


## .env
 - `DISCORD_TOKEN=` Following [the steps for creating a discord app](https://discord.com/developers/docs/getting-started#configuring-your-bot) will get you a token.
 - `GOOGLE_SERVICE_ACCOUNT_EMAIL=`
 - `GOOGLE_PRIVATE_KEY=`
 - `GOOGLE_SHEET_ID=` Use the template below to create a sheet on your account; The id to use here is the string of random characters between slashes in your sheets url.

For the google authentication you need to;
 - Go to the [Google Developers Console](https://console.developers.google.com/)
 - Create/Select a project
 - [Enable the Google Sheets API](https://support.google.com/googleapi/answer/6158841)
 - [Create a service account](https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount)
   - You will have downloaded a JSON file containing a couple things including the `private key` and `email address` to use above.
 - **Share the sheets file with the email address created above with editor rights.** (just like you would invite any other collaborator)



## [google sheet template](https://docs.google.com/spreadsheets/d/12CrUAZ3K7wNYJcJO4f20cTcSksEZlc4621yoBonhOKs/template/preview)
 - The bot populates `AttendanceRecords` with (username, channelname, start, end)
 - The sheet `hourscalc` transforms the Nodejs date strings into gsheets compatible datetimes, calculates duration and DATEVALUE
 - `users` is a list of all unique usernames in `AttendanceRecords`
 - `tallied` shows the hours spent in voice chat; all time total per user, and per user per day
 - In the premade sheets I recommend only touching the dates on `tallied!A3:A` to be appropriate for your usecase. And making new sheets if you want to make graphs or transformations.

### Limitations
 - I hate timezones, everything is in UTC+00:00
