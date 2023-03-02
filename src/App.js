import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CountryDetails from './components/CountryDetails';


function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);  


  const getCountries = async () => {
    try {
      let response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
      console.log(response);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);


  return (
    <div className='App'>

    <Header/>
    <br />
    <CountryDetails/>      
      
    </div>
  )
  

}
export default App;
