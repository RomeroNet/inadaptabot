import { GuildMember, TextChannel } from "discord.js";

const WELCOME_CHANNEL_ID = process.env.WELCOME_CHANNEL_ID as string;

export function greetNewMember(member: GuildMember) {
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);

    if (!channel) {
        console.log('Welcome channel not found.');
        return;
    }

    if (channel instanceof TextChannel) {
        channel.send(`Que onda, ${member.user.globalName}! Chavalesh! Todo bien, todo correcto? Y yo que me alegro!`);
    }
}