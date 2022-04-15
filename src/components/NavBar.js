import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setContinent, setCountry } from '../redux/reducer';

const NavBar = ({ selectedContinent, selectedCountry, selectedDate }) => {
  const dispatch = useDispatch();

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
            {selectedContinent ? (
              <div>
                <FaAngleLeft className="inline" />
                {selectedDate}
              </div>
            ) : (
              ' '
            )}
          </button>
        </NavLink>
      </nav>
    </>
  );
};

NavBar.propTypes = {
  selectedContinent: PropTypes.string.isRequired,
  selectedCountry: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
};

export default NavBar;
