const { Schema, model } = require('mongoose')

const sightingSchema = new Schema({
    spotter: {
        type: 
            {
                type: Schema.Types.ObjectId,
                ref: 'Spotter'
            },
    },
    cryptid: {
        type: 
            {
                type: Schema.Types.ObjectId,
                ref: 'Cryptid'
            },
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String
    }
})

const Sighting = model('Sighting', sightingSchema)

module.exports = Sighting