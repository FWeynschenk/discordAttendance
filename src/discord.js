import { Client, Events, GatewayIntentBits } from "discord.js";
const token = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

const state = {};
export function voiceLeaveEvent(onLeave) {
    client.on(Events.VoiceStateUpdate, (oldState, newState) => {
        const username = newState.member.user.username;
        if (!username) { console.error("no username", newState, oldState); return; }

        if (state[username]) {
            onLeave(username, state[username].channelName, state[username].start, new Date());
        }
        const newChannelName = newState.channel?.name;
        if (newChannelName) { // if join channel
            state[username] = { channelName: newChannelName, start: new Date() };
        } else {
            delete state[username];
        }
    });
}
