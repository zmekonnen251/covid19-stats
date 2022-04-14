import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../redux/reducer';

const DateInputForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  const DateChangeHandler = (event) => {
    const inputDate = event.target.value;
    setDate(inputDate);
  };

  useEffect(() => {
    dispatch(loadData(date));
    console.log(date);
  }, [date]);
  return (
    <>
      <form className="text-center  m-2">
        <input
          type="date"
          onChange={DateChangeHandler}
          className="bg-inherit text-inherit border p-1 mt-2"
        />
      </form>
    </>
  );
};

export default DateInputForm;