import { useQuery } from "@apollo/client"
import { ALL_SIGHTINGS } from '../utils/queries'
import HomeList from '../components/HomeList'


const Home = () => {

    const { loading, error, data } = useQuery(ALL_SIGHTINGS)
    const sightings = data?.sightings || []
    console.log(sightings)
     return (
        <div>
            {loading ? (
                <div>Loading....</div>
            ) : (
                <HomeList sightings={sightings} />
            )}
        </div>
     )
}


export default Home