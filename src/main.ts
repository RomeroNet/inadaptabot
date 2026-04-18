import { Client, Events, GatewayIntentBits, GuildMember } from "discord.js"
import { greetNewMember } from "./events/guildMemberAdd.ts";

const token = process.env.TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ]
});

client.once(Events.ClientReady, async (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);

    client.on("guildMemberAdd", greetNewMember);
});

client.login(token);