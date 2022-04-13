import React from 'react';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const selectedCountry = useSelector((state) => state.country.country);
  const selectedContinent = useSelector((state) => state.continent.continent);
  const selectedCountryData = useSelector(
    (state) => state.covidData.continents[selectedContinent].countries[selectedCountry],
  );

  // name: 'Algeria';
  // today_confirmed: 265730;
  // today_deaths: 6874;
  // today_new_confirmed: 0;
  // today_new_deaths: 0;
  // today_new_open_cases: 0;
  // today_new_recovered: 0;
  // today_open_cases: 139704;
  // today_recovered: 119152;
  // const { name, today_confirmed, today_deaths } = selectedCountryData;
  return (
    <>
      <div role="presentation">
        <h1>{selectedCountryData.name}</h1>
        <h3>
          Total Confirmed Cases :
          {selectedCountryData.today_confirmed}
        </h3>
        <h3>
          Total Deaths :
          {selectedCountryData.today_deaths}
        </h3>
      </div>
    </>
  );
};

export default CountryDetails;
