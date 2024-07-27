const { Schema, model } = require('mongoose')

const cryptidSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        region: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        spotter: {
            type: 
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Spotter'
                }
        },
        image: {
            type: String
        }
    }
)

const Cryptid = model('Cryptid', cryptidSchema)

module.exports = Cryptid