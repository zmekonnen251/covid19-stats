import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setContinent, setCountry } from '../redux/reducer';

const NavBar = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.country.country);
  const selectedContinent = useSelector((state) => state.continent.continent);
  const selectedDate = useSelector((state) => state.covidData.date);
  console.log(selectedDate);
  return (
    <>
      <nav>
        <NavLink exact="true" to="/">
          <button
            type="button"
            onClick={() => {
              if (selectedCountry) {
                dispatch(setCountry(null));
              } else if (selectedContinent) {
                dispatch(setContinent(null));
              }
            }}
          >
            {' '}
            {'<'}
            {`${selectedDate}`}
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
