import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import CountryMatrixCard from './CountryMatrixCard';

const CountriesList = () => {
  const { continentId } = useParams();

  const continentData = useSelector(
    (state) => state.covidData.continents[continentId].countries,
  );
  const name = useSelector(
    (state) => state.covidData.continents[continentId].name,
  );
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 m-7 p-20 odd:bg-white">
        <h1 className="text-center text-5xl mb-3 sm:col-span-3">
          {name.split('_').join(' ')}
        </h1>
        {Object.keys(continentData).map((country) => {
          const countryName = continentData[country].name;
          const totalConfirmed = continentData[country].today_confirmed;
          const totalDeath = continentData[country].today_deaths;

          return (
            <CountryMatrixCard
              key={uuidv4()}
              selectedContinent={continentId}
              name={countryName}
              totalConfirmed={totalConfirmed}
              totalDeath={totalDeath}
              onClickSetCountry={country}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountriesList;
