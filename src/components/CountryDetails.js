import React from 'react';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const selectedCountry = useSelector((state) => state.country.country);
  const selectedContinent = useSelector((state) => state.continent.continent);
  const selectedCountryData = useSelector(
    (state) => state.covidData.continents[selectedContinent].countries[selectedCountry],
  );

  return (
    <>
      <div
        role="presentation"
        className="flex flex-col ml-4 mr-4 mt-2 sm:ml-28 sm:mr-28 sm:mt-10"
      >
        <h1 className="text-center text-4xl mb-4">
          {selectedCountryData.name}
        </h1>
        <h1 className="text-center text-2xl mb-4">Total Data</h1>
        <div className="border p-3 sm:p-8 sm:text-center ">
          <h3 className="text-lg">
            Total Confirmed Cases :
            {selectedCountryData.today_confirmed}
          </h3>
          <h3 className="text-lg">
            Total Deaths :
            {selectedCountryData.today_deaths}
          </h3>
          <h3 className="text-lg">
            Total Deaths :
            {selectedCountryData.today_open_cases}
          </h3>
          <h3 className="text-lg">
            Total Recovered :
            {selectedCountryData.today_recovered}
          </h3>
        </div>
        <h1 className="text-center text-2xl mt-4 mb-4">Today&apos;s Data</h1>
        <div className="p-3 sm:p-8 border flex flex-col sm:items-center gap-2 sm:text-center ">
          <h3 className="text-lg">
            Today&apos;s Confirmed Cases :
            {selectedCountryData.today_new_confirmed}
          </h3>
          <h3 className="text-lg">
            Today&apos;s Recovered :
            {selectedCountryData.today_new_recovered}
          </h3>
          <h3 className="text-lg">
            Today&apos;s Open Cases :
            {selectedCountryData.today_new_open_cases}
          </h3>

          <h3 className="text-lg">
            Today&apos;s Deaths :
            {selectedCountryData.today_new_deaths}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
