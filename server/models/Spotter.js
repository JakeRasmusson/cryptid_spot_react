const { Schema, model } = require('mongoose')


const spotterSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false
    },
    spots: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Sighting'
        }
    ],
    cryptids: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cryptid'
        }
    ]
})

const Spotter = model('Spotter', spotterSchema)

module.exports = Spotter