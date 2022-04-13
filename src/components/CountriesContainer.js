import React from 'react';
import { useSelector } from 'react-redux';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

const CountriesContainer = () => {
  const country = useSelector((state) => state.country.country);
  return <>{!country ? <CountriesList /> : <CountryDetails />}</>;
};

export default CountriesContainer;
