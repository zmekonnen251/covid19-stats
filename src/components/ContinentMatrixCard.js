import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setContinent } from '../redux/reducer';
import classes from './MatrixCard.module.css';

const MatrixCard = (props) => {
  const dispatch = useDispatch();
  const [continent, setContinentLocal] = useState('');
  const {
    name, totalConfirmed, totalDeath, onClickSetContinent,
  } = props;

  const continentMatrixClickHandler = () => {
    setContinentLocal(onClickSetContinent);
  };

  useEffect(() => {
    dispatch(setContinent(continent));
  }, [continent]);

  return (
    <>
      <div
        className={classes.card}
        role="presentation"
        onClick={continentMatrixClickHandler}
      >
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

MatrixCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalDeath: PropTypes.number.isRequired,
  onClickSetContinent: PropTypes.string.isRequired,
};

export default MatrixCard;
