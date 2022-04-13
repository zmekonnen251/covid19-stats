import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setCountry } from '../redux/reducer';

const CountryMatrixCard = (props) => {
  const dispatch = useDispatch();
  const {
    name, totalConfirmed, totalDeath, onClickSetCountry,
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
      <div role="presentation" onClick={countryMatrixClickHandler}>
        <h1>{name}</h1>
        <h3>
          Total Confirmed Cases :
          {totalConfirmed}
        </h3>
        <h3>
          Total Deaths :
          {totalDeath}
        </h3>
      </div>
    </>
  );
};

CountryMatrixCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalDeath: PropTypes.number.isRequired,
  onClickSetCountry: PropTypes.string.isRequired,
};

export default CountryMatrixCard;
