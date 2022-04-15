import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadData } from './redux/reducer';
import CountryDetails from './components/CountryDetails';
import Main from './components/Main';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';

const App = () => {
  const dispatch = useDispatch();

  const selectedCountry = useSelector((state) => state.country.country);
  const selectedContinent = useSelector((state) => state.continent.continent);
  const selectedDate = useSelector((state) => state.covidData.date);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <Router>
      <div className="box-border text-white bg-lightpink pb-3 mt-0">
        <NavBar
          selectedContinent={selectedContinent}
          selectedCountry={selectedCountry}
          selectedDate={selectedDate}
        />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            exact
            path="/continent/:continentId"
            element={<CountriesList />}
          />
          <Route
            exact
            path="continent/:continentId/details/:countryId"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
