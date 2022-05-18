import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ContinentMatrixCard from './ContinentMatrixCard';
import DateInputForm from './DateInputForm';
import WorldTotal from './WorldTotal';

const ContinentSelector = () => {
  const data = useSelector((state) => state.covidData.continents);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Covid Stats</h1>
      <DateInputForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 m-7 border-box">
        <WorldTotal />
        {Object.keys(data).map((continent) => {
          const continentName = data[continent].name;
          let totalConfirmed = 0;
          let totalDeath = 0;
          Object.keys(data[continent].countries).forEach((country) => {
            totalConfirmed
              += data[continent].countries[country].today_confirmed;
            totalDeath += data[continent].countries[country].today_deaths;
          });

          return (
            <ContinentMatrixCard
              key={uuidv4()}
              name={continentName}
              totalConfirmed={totalConfirmed}
              totalDeath={totalDeath}
              onClickSetContinent={continent.split(' ').join('_')}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContinentSelector;
