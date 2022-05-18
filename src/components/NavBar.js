import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setContinent, setCountry } from '../redux/reducer';

const NavBar = () => {
  const dispatch = useDispatch();
  const selectedContinent = useSelector((state) => state.continent.continent);
  const selectedCountry = useSelector((state) => state.country.country);
  const selectedDate = useSelector((state) => state.covidData.date);
  console.log(selectedContinent);
  console.log(selectedCountry);

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
            className="m-3 font-bold flex text-lg mt-5"
          >
            <div>
              <FaAngleLeft className="inline" />
              {selectedDate}
            </div>
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
