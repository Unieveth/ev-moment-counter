import mongoose, {Schema} from 'mongoose'

const counterSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    counter: {
        type: Number,
        required: true,
    }
})

const name = 'counter'

export default mongoose.models[name] || mongoose.model(name, counterSchema, name)