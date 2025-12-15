const { REST, Routes } = require('discord.js');

const TOKEN = 'Enter your discord bot token';
const CLIENT_ID = 'Enter your discord bot id';   // aka APP ID
const GUILD_ID = 'Enter your discord server id';

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Deleting all guild application commands...');

        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: [] } // empty array = deletes everything
        );

        console.log('✓ All guild slash commands removed.');
    } catch (error) {
        console.error(error);
    }
})();
