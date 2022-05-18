import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
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
      <nav className="fixed top-0 w-full z-20 opacity-1 flex justify-between items-center h-10 px-3 bg-pink-800 mb-2">
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
        <BsFillGearFill width="10px" />
      </nav>
    </>
  );
};

export default NavBar;
