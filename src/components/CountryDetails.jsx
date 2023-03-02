import {useState} from 'react'
import { Route } from 'react-router-dom';


function CountryDetails(countriesData) {

    const [countries, setCountries] = useState([]);

  return (
    <div>
    <p>Country Details</p>
    {countries.map((country) => {
        return (
          <div key={country._id} className="country">
            <h3>{country.alpha3Code}</h3>
          </div>
        );
      })}
    </div>

  )
}

export default CountryDetails