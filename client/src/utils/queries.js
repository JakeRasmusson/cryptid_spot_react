import { gql } from '@apollo/client'


export const ALL_SIGHTINGS = gql`
    query sightings {
  sightings {
    _id
    spotter {
        username
    }
    cryptid {
        name
    }
    image
  }
}
`