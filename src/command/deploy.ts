import { REST, Routes } from 'discord.js';
import hora from './hora.ts';

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!);
const commands = [hora.data.toJSON()];

await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID!),
    { body: commands }
);

console.log('Commands registered!');