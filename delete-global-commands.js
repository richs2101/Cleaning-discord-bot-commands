const { REST, Routes } = require('discord.js');

// -----------------------------
// ⚠️ PUT YOUR BOT TOKEN + CLIENT ID HERE
// -----------------------------
const TOKEN = 'Enter your discord bot token here';
const CLIENT_ID = 'Enter your discord bot id here';
// -----------------------------

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log('Deleting ALL global slash commands...');

        // Overwrite with an empty array = delete everything
        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: [] }
        );

        console.log('✅ All global commands deleted! (May take up to 1 hour to disappear)');
    } catch (error) {
        console.error('❌ Error:', error);
    }
})();
