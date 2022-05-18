import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../redux/reducer';

const DateInputForm = () => {
  const dispatch = useDispatch();

  const selectedDate = useSelector((state) => state.covidData.date);
  const [date, setDate] = useState(selectedDate);

  const DateChangeHandler = (event) => {
    const inputDate = event.target.value;
    setDate(inputDate);
  };

  useEffect(() => {
    dispatch(loadData(date));
  }, [date]);
  return (
    <>
      <form className="text-center  m-1 mt-5">
        <input
          type="date"
          onChange={DateChangeHandler}
          className="bg-inherit text-inherit border p-1 mt-2"
          value={selectedDate}
        />
      </form>
    </>
  );
};

export default DateInputForm;
