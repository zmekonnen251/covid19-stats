import React from 'react';
import { useSelector } from 'react-redux';

const WorldTotal = () => {
  let totalConfirmed = 0;
  let totalDeaths = 0;
  let totalRecovered = 0;
  let totalOpenCases = 0;

  const covidData = useSelector((state) => state.covidData.continents);
  console.log(covidData);
  console.log(Object.keys(covidData));
  Object.keys(covidData).forEach((continent) => {
    Object.keys(covidData[continent].countries).forEach((country) => {
      totalConfirmed
        += +covidData[continent].countries[country].today_confirmed;
      totalDeaths += +covidData[continent].countries[country].today_deaths;
      totalOpenCases
        += +covidData[continent].countries[country].today_open_cases;
      totalRecovered
        += +covidData[continent].countries[country].today_recovered;
    });
  });
  return (
    <div role="presentation" className="col-span-2">
      <h1 className="text-4xl mb-3 text-center">World Total</h1>
      <div className="border p-8 cursor-pointer flex flex-col items-center gap-1">
        <h3 className="text-xl">
          Total Confirmed Cases :
          {totalConfirmed}
        </h3>
        <h3 className="text-xl">
          Total Deaths :
          {totalDeaths}
        </h3>
        <h3 className="text-xl">
          Total Recovered :
          {totalRecovered}
        </h3>
        <h3 className="text-xl">
          Total Open Cases :
          {totalOpenCases}
        </h3>
      </div>
    </div>
  );
};

export default WorldTotal;
