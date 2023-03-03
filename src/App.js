import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries`
      );
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/"element={loading ? <h1>Loading</h1> :
      <CountriesList countries={countries} /> }/>

      <Route path="/country/:id" element={loading ? (<h1>Loading</h1>) :(
      <CountryDetails countries={countries} /> )}/>
      </Routes>
    </div>
  );
}
export default App;
