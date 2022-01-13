import { Client } from "discord.js"
import counterSchema from '../schema/counter-schema'

export default async (client: Client) => {
    const updateStatus = async () => {
       const newCount = await counterSchema.findById('1')
       client.user?.setPresence({
           status: "idle",
           activities: [
               {
                   name: `${newCount['counter']} EV Moments`,
                   type: 'WATCHING'
               }
           ]
       })

       setTimeout(updateStatus, 1000 * 60 * 1)
   }
   updateStatus()
}

export const config = {
    dbName: 'COUNTER_STATUS',
    displayName: 'Counter Status',
}