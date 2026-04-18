import { Client, Events, GatewayIntentBits } from "discord.js"
import { greetNewMember } from "./events/guildMemberAdd.ts";
import hora from "./command/hora.ts";

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

    client.on("interactionCreate", async interaction => {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'hora') {
            await interaction.deferReply();
            await hora.execute(interaction);
        }
    });
});

client.login(token);