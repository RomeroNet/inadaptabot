import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { getCountryTime } from "../service/DateService.ts";

export default {
    data: new SlashCommandBuilder().setName('hora').setDescription('Muestra la hora de Mexico, Chile y España.'),
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.editReply(
`La hora actual de Mexico es: ${getCountryTime("Mexico")}
La hora actual de Chile es: ${getCountryTime("Chile")}
La hora actual de España es: ${getCountryTime("Spain")}
Espacio patrocinado por el bicho pelao`
        );
    }
}