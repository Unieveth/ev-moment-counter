import DiscordJS, { Intents } from 'discord.js'
import wokCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
  ],
})

client.on('ready', () => {
    
    new wokCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        featureDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: process.env.DEVGUILDID || '',
        botOwners: process.env.OWNER || '',
        mongoUri: process.env.MONGOURI || '',
    })
})

client.login(process.env.TOKEN)