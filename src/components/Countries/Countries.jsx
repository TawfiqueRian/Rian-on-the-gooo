import React, { use } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({promiseCountries}) => {
    const countryData = use(promiseCountries)
    const countries = countryData.countries
    console.log(countries)
    return (
        <div>
            <h2>In the {countries.length} countries...</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3} country = {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;