import React from 'react';
import { useSelector } from 'react-redux';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

const CountriesContainer = () => {
  const country = useSelector((state) => state.country.country);
  const selectedContinent = useSelector((state) => state.continent.continent);
  return (
    <>
      {!country ? <CountriesList id={selectedContinent} /> : <CountryDetails />}
    </>
  );
};

export default CountriesContainer;
