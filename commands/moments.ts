import { TextChannel } from "discord.js";
import { connection } from "mongoose";
import { ICommand } from "wokcommands";
import counterSchema from '../schema/counter-schema'

export default {
    category: 'EVMoments',
    description: 'See the current number of EV Moments',
    slash: true,

    callback: async ({interaction, args}) => {

        const newCount = await counterSchema.findById('1')

        interaction.reply({
            content: `Total EV Moments: **${newCount['counter']}**`
        })
    }
    
} as ICommand