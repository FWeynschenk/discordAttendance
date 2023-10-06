import "dotenv/config";
import { voiceLeaveEvent } from "./src/discord.js";
import { addRow } from "./src/gsheet.js";

function onVoiceLeave(username, channelname, start, end) {
    addRow(username, channelname, start, end);
}

voiceLeaveEvent(onVoiceLeave);
