import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { continentId, countryId } = useParams();

  const selectedCountryData = useSelector(
    (state) => state.covidData.continents[continentId].countries[
      countryId.split('_').join(' ')
    ],
  );

  return (
    <div className="relative mt-10 ">
      <div
        className="absolute opacity-10 z-0 inset-12"
        style={{
          backgroundImage: `url(https://mapsvg.com/static/maps/geo-calibrated/${countryId
            .split('_')
            .join('-')
            .toLowerCase()}.svg)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div
        role="presentation"
        className="z-10 py-10 opacity-70 flex flex-col ml-4 mr-4 sm:mt-14 sm:ml-28 sm:mr-28 mt-[5rem]"
      >
        <h1 className="text-center text-4xl mb-4">
          {selectedCountryData.name}
        </h1>
        <h1 className="text-center text-2xl mb-4">Total Data</h1>
        <div className=" rounded-lg bg-pink-800 opacity-90 p-3 sm:p-8 sm:text-center ">
          <h3 className="text-lg">
            Total Confirmed Cases :
            {` ${selectedCountryData.today_confirmed}`}
          </h3>
          <h3 className="text-lg">
            Total Deaths :
            {` ${selectedCountryData.today_deaths}`}
          </h3>
          <h3 className="text-lg">
            Total Deaths :
            {` ${selectedCountryData.today_open_cases}`}
          </h3>
          <h3 className="text-lg">
            Total Recovered :
            {` ${selectedCountryData.today_recovered}`}
          </h3>
        </div>
        <h1 className="text-center text-2xl mt-4 mb-4">Today&apos;s Data</h1>
        <div className="rounded-lg bg-pink-800 opacity-90 p-3 sm:p-8 flex flex-col sm:items-center gap-2 sm:text-center ">
          <h3 className="text-lg">
            Today&apos;s Confirmed Cases :
            {` ${selectedCountryData.today_new_confirmed}`}
          </h3>
          <h3 className="text-lg">
            Today&apos;s Recovered :
            {` ${selectedCountryData.today_new_recovered}`}
          </h3>
          <h3 className="text-lg">
            Today&apos;s Open Cases :
            {` ${selectedCountryData.today_new_open_cases}`}
          </h3>

          <h3 className="text-lg">
            Today&apos;s Deaths :
            {` ${selectedCountryData.today_new_deaths}`}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
