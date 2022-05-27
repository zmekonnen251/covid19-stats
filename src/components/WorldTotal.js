import React from 'react';
import { useSelector } from 'react-redux';

const WorldTotal = () => {
  let totalConfirmed = 0;
  let totalDeaths = 0;
  let totalRecovered = 0;
  let totalOpenCases = 0;

  const covidData = useSelector((state) => state.covidData.continents);
  const selectedDate = useSelector((state) => state.covidData.date);

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
    <div
      role="presentation"
      className="rounded-lg opacity-70 p-10 bg-pink-800 hover:bg-pink-700 sm:col-span-2 mt-4"
    >
      <h1 className="text-4xl mb-3 text-center">World Total</h1>
      <h1 className="text-2xl mb-3 text-center">{selectedDate}</h1>
      <div className="relative hover:backdrop-brightness-20 p-2 sm:p-16 cursor-pointer flex flex-col items-end gap-1">
        <div
          className="absolute inset-2 sm:left-[-35rem] z-0 opacity-20"
          style={{
            backgroundImage:
              'url( https://mapsvg.com/static/maps/geo-calibrated/world.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <h3 className="text-xl">
          <span className="text-lg sm:text-xl">Total Confirmed Cases : </span>
          <span className="text-2xl">{totalConfirmed}</span>
        </h3>

        <h3 className="text-lg">
          <span className="text-lg sm:text-xl">Total Deaths : </span>
          <span className="text-2xl">{totalDeaths}</span>
        </h3>
        <h3 className="text-xl hidden sm:block">
          <span className="text-xl">Total Recovered : </span>
          <span className="text-2xl">{totalRecovered}</span>
        </h3>
        <h3 className="text-xl hidden sm:block">
          <span className="text-xl">Total Open Cases : </span>
          <span className="text-2xl">{totalOpenCases}</span>
        </h3>
      </div>
    </div>
  );
};

export default WorldTotal;
