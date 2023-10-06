import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const jwt = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
    ],
});

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, jwt);

await doc.loadInfo();

const sheetTitle = "AttendanceRecords";

let sheet = doc.sheetsByTitle[sheetTitle];
if (!sheet) {
    sheet = await doc.addSheet({ title: sheetTitle, headerValues: ["username", "channelname", "start", "end"] });
}

export async function addRow(username, channelname, start, end) {
    await sheet.addRow([username, channelname, start, end]);
}
