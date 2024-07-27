const db = require('../config/connection')
const { Cryptid, Sighting, Spotter } = require('../models')
const cleanDB = require('./cleanDB')

const cryptidData = require('./cryptidData.json')
const sightingData = require('./sightingData.json')
const spotterData = require('./spotterData.json')

db.once('open', async () => {
    await cleanDB('Cryptid', 'cryptids')
    await cleanDB('Sighting', 'sightings')
    await cleanDB('Spotter', 'spotters')

    const cryptids = await Cryptid.create(cryptidData)
    const sightings = await Sighting.create(sightingData)
    const spotters = await Spotter.create(spotterData)


    for (const sighting of sightings)  {
        const tempCryptid = cryptids[Math.floor(Math.random() * cryptids.length)]
        const tempSpotter = spotters[Math.floor(Math.random() * spotters.length)]
        console.log(sighting._id, tempCryptid, tempSpotter)
        const updateSighting = await Sighting.findByIdAndUpdate(sighting._id, {
            cryptid: tempCryptid._id, spotter: tempSpotter._id
        })
        console.log(updateSighting)
        
        const updateSpotter = await Spotter.findByIdAndUpdate(tempSpotter._id, {
            $addToSet: {
                spots: sighting._id
            }
        })
    }

    for (const cryptid of cryptids) {
        const tempSpotter = spotters[Math.floor(Math.random() * spotters.length)]

        const updateCryptid = await Cryptid.findByIdAndUpdate(cryptid._id, {
            spotter: tempSpotter._id
        })
        const updateSpotter = await Spotter.findByIdAndUpdate(tempSpotter._id, {
            $addToSet: {
                cryptids: cryptid._id
            }
        })

    }


    console.log('Success')
    process.exit(0)
})