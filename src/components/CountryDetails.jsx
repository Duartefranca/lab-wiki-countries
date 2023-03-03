import { useState, useEffect } from 'react';
import { Route, useParams, Link } from 'react-router-dom';

function CountryDetails({ countries }) {
    const { id } = useParams();
    const [country] = countries.filter((el) => el.alpha3Code === id);
  
    return (
      <div>                 
         <img
           src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>{' '}
           <br />
           <h1>{country.name.official}</h1>

           <br />
                 
           <h4>Capital: {country.capital[0]}</h4>        
           <h4>Area: {country.area}</h4>
           <h4>Borders
                 {country.borders.map((border, i) => (
                   <li>
                     <Link to={`/country/${border}`}>{border}</Link>
                   </li>
                   ))}               
            </h4>    
           
           <Link to="/">Countries List</Link>
         
      </div>
    );
  }
  
export default CountryDetails;
