import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadData } from './redux/reducer';
import CountryDetails from './components/CountryDetails';
import Main from './components/Main';
import NavBar from './components/NavBar';

const App = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.country.country);
  console.log(selectedCountry);

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <Router>
      <div className="box-border text-white bg-lightpink pb-3 mt-0">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <React.Fragment
            exact
            path="/Details"
            element={<CountryDetails selectedCountry={selectedCountry || ''} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
