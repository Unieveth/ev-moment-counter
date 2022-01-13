import { TextChannel } from "discord.js";
import { connection } from "mongoose";
import { ICommand } from "wokcommands";
import counterSchema from '../schema/counter-schema'

export default {
    category: 'EVMoments',
    description: 'Add EV Moments',
    slash: true,
    minArgs: 1,
    expectedArgs: '<amount>',
    expectedArgsTypes: ['NUMBER'],

    callback: async ({interaction, args}) => {
        
        const arg = Number(args)

        await counterSchema.findOneAndUpdate({
            _id: '1'
        }, {
            _id: '1',
            $inc: { counter: arg }
        }, {
            upsert: true
        })

        const newCount = await counterSchema.findById('1')

        interaction.reply({
            content: `Added ${arg} new EV Moments.\n\nTotal EV Moments: **${newCount['counter']}**`
        })
    }
    
} as ICommand