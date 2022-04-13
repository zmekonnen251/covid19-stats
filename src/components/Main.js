import React from 'react';
import { useSelector } from 'react-redux';
import CountriesContainer from './CountriesContainer';
import ContinentSelector from './ContinentSelector';

const Main = () => {
  const continentSet = useSelector((state) => state.continent.continent);
  console.log(continentSet);
  return <>{!continentSet ? <ContinentSelector /> : <CountriesContainer />}</>;
};

export default Main;
