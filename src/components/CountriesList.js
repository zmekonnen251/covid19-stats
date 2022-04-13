import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CountryMatrixCard from './CountryMatrixCard';

const CountriesList = () => {
  const selectedContinent = useSelector((state) => state.continent.continent);

  const continentData = useSelector(
    (state) => state.covidData.continents[selectedContinent].countries,
  );
  console.log('Hey from countries List', continentData);
  return (
    <>
      {Object.keys(continentData).map((country) => {
        const countryName = continentData[country].name;
        const totalConfirmed = continentData[country].today_confirmed;
        const totalDeath = continentData[country].today_deaths;

        return (
          <CountryMatrixCard
            key={uuidv4()}
            name={countryName}
            totalConfirmed={totalConfirmed}
            totalDeath={totalDeath}
            onClickSetCountry={country}
          />
        );
      })}
    </>
  );
};

export default CountriesList;
