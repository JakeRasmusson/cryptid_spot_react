const { Spotter, Cryptid, Sighting } = require('../models')

const resolvers = {
    Query: {
        sightings: async () => {
            return Sighting.find().populate('spotter').populate('cryptid')
        },
        sighting: async (parent, { sightingId }) => {
            return Sighting.findById({ _id: sightingId })
        },
        sightingByCryptid: async(parent, { cryptidId }) => {
            console.log(cryptidId)
            const sighting = await Sighting.find({ cryptid: { '$in': [cryptidId ]}})
            console.log(sighting)
            return sighting
        },
        sightingBySpotter: async (parent, { spotterId }) => {
            return Sighting.find({ spotter: spotterId })
        }
    }
}


module.exports = resolvers