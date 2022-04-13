import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { loadData } from '../redux/reducer';
import ContinentMatrixCard from './ContinentMatrixCard';
import DateInputForm from './DateInputForm';

const ContinentSelector = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covidData.continents);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <>
      <h1>Hello from Covid Stats</h1>
      <DateInputForm />
      {Object.keys(data).map((continent) => {
        const continentName = data[continent].name;
        let totalConfirmed = 0;
        let totalDeath = 0;
        Object.keys(data[continent].countries).forEach((country) => {
          totalConfirmed += data[continent].countries[country].today_confirmed;
          totalDeath += data[continent].countries[country].today_deaths;
        });

        return (
          <ContinentMatrixCard
            key={uuidv4()}
            name={continentName}
            totalConfirmed={totalConfirmed}
            totalDeath={totalDeath}
            onClickSetContinent={continent}
          />
        );
      })}
    </>
  );
};

export default ContinentSelector;
