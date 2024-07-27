const typeDefs = `
    type Spotter {
        _id: ID!
        username: String!
        email: String!
        password: String!
        avatar: String
        spots: [ Sighting ]
        cryptids: [ Cryptid ]
    }

    type Cryptid {
        _id: ID!
        name: String!
        region: String!
        description: String!
        image: String
        spotter: Spotter
    }

    type Sighting {
        _id: ID!
        spotter: Spotter
        cryptid: Cryptid
        lat: Int!
        lon: Int!
        image: String
    }

    type Query {
    sightings: [Sighting]
    sighting(sightingId: ID!): Sighting
    sightingByCryptid(cryptidId: ID!): [Sighting]
    sightingBySpotter(spotterId: ID!): [Sighting]
    }
`


module.exports = typeDefs