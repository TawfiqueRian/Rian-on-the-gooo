import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({promiseCountries}) => {
    const countryData = use(promiseCountries)
    const countries = countryData.countries
    const [vistedCountry, setVisitedCountry] = useState([])
    const [visitedflag, setVisitedFlag] = useState([])

    const handleVisitedCountry = (country) => {
        console.log('Clicked visited country', country)
        const newVisitedCountry = [...vistedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }
    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedflag, flag]
        setVisitedFlag(newVisitedFlag)
    }


    // console.log(countries)
    return (
        <div>
            <h2>In the {countries.length} countries...</h2>
            <h3>Visited contries: {vistedCountry.length}</h3>
            <ol>
                {
                    vistedCountry.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags'>
                {
                    visitedflag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country = {country} handleVisitedCountry = {handleVisitedCountry} handleVisitedFlag = {handleVisitedFlag} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;