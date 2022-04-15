import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { setCountry } from '../redux/reducer';

const CountryMatrixCard = (props) => {
  const dispatch = useDispatch();
  const {
    name,
    totalConfirmed,
    totalDeath,
    onClickSetCountry,
    selectedContinent,
  } = props;
  const [country, setLocalCountry] = useState('');

  const countryMatrixClickHandler = () => {
    setLocalCountry(onClickSetCountry);
  };

  useEffect(() => {
    dispatch(setCountry(country));
  }, [country]);

  return (
    <>
      <NavLink to={`/continent/${selectedContinent}/details/${name}`}>
        <div
          role="presentation"
          onClick={countryMatrixClickHandler}
          className="relative border p-8 cursor-pointer flex flex-col items-center gap-1"
        >
          <h1 className="text-3xl">{name}</h1>
          <h3 className="text-lg">
            Total Confirmed Cases :
            {` ${totalConfirmed}`}
          </h3>
          <h3 className="text-lg">
            Total Deaths :
            {` ${totalDeath}`}
          </h3>
          <div className="absolute bottom-1 right-1 flex justify-end">
            <BsFillArrowDownRightSquareFill />
          </div>
        </div>
      </NavLink>
    </>
  );
};

CountryMatrixCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalDeath: PropTypes.number.isRequired,
  selectedContinent: PropTypes.string.isRequired,
  onClickSetCountry: PropTypes.string.isRequired,
};

export default CountryMatrixCard;
