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
      <NavLink
        to={`/continent/${selectedContinent}/details/${name
          .split(' ')
          .join('_')}`}
        onClick={countryMatrixClickHandler}
        className="relative shadow-2xl shadow-slate-700  hover:bg-pink-600 hover:w-[99%] h-[200px] w-auto  p-16 cursor-pointer flex flex-col justify-between items-end gap-6"
        role="presentation"
      >
        <div
          className="absolute box-border inset-2 bottom-8 sm:left-[-12rem] z-0 opacity-20"
          style={{
            backgroundImage: `url(https://mapsvg.com/static/maps/geo-calibrated/${name
              .split('_')
              .join('-')
              .toLowerCase()}.svg)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute right-1 bottom-4">
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
