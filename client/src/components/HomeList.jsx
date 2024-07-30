const HomeList = ({ sightings }) => {
    return (
        <ul>
            {sightings && 
             sightings.map((sighting) => {
                return (
                <div  key={sighting._id}>
                    <li>{sighting.cryptid.name}</li>
                    <li>{sighting.spotter.username}</li>
                </div>
                )
            })}
        </ul>
    )



}


export default HomeList