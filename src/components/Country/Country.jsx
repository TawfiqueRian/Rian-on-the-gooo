import { useState } from 'react'
import './country.css'
export default function Country({country, handleVisitedCountry, handleVisitedFlag}){
    // console.log(country)
    const[visited, setVisited] = useState(false)
    
    
    const handleVisited = () => {
        // if(visited)
        // {
        //     setVisited(false)
        // }
        // else
        // {
        //     setVisited(true)
        // }
        setVisited(!visited)
        handleVisitedCountry(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h3>Area: {country.area.area}</h3>
            <h3>Population: {country.population.population}</h3>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
            <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>Add to Visited</button>
        </div>
    )
}