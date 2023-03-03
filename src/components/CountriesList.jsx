import React from 'react';
import { Link } from 'react-router-dom';


function CountriesList({countries}) {


  return (
    
      <div>
        {countries.map(country => {
            return <div  key={country.alpha3Code} className="list-group-item list-group-item-action">
            <br />
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country" />
            <br />
            <Link to={`country/${country.alpha3Code}`}> {country.name.common}</Link>
            </div>
        })}
      </div>
    
  )
}


export default CountriesList
