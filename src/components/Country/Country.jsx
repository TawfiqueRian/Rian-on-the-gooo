import './country.css'
export default function Country({country}){
    console.log(country)
    return (
        <div className="country">
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h3>Area: {country.area.area}</h3>
            <h3>Population: {country.population.population}</h3>
            <button>Not Visited</button>
        </div>
    )
}