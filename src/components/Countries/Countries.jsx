import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({promiseCountries}) => {
    const countryData = use(promiseCountries)
    const countries = countryData.countries
    console.log(countries)
    return (
        <div>
            <h2>In the {countries.length} countries...</h2>
            {
                countries.map(country => <Country key={country.cca3} country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;