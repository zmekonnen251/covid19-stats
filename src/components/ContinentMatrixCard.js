import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { setContinent } from '../redux/reducer';

const ContinentMatrixCard = (props) => {
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
        className="relative border p-8 cursor-pointer flex flex-col items-center gap-1"
        role="presentation"
        onClick={continentMatrixClickHandler}
      >
        <h1 className="text-4xl">{name}</h1>
        <h3 className="text-lg">
          Total Confirmed Cases :
          {totalConfirmed}
        </h3>
        <h3 className="text-lg">
          Total Deaths :
          {totalDeath}
        </h3>
        <div className="absolute bottom-1 right-1 flex justify-end">
          <BsFillArrowDownRightSquareFill />
        </div>
      </div>
    </>
  );
};

ContinentMatrixCard.propTypes = {
  name: PropTypes.string.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalDeath: PropTypes.number.isRequired,
  onClickSetContinent: PropTypes.string.isRequired,
};

export default ContinentMatrixCard;
