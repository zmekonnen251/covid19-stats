import axios from 'axios';
import getContinent from '../modules/continent';
import { LOAD_DATA, SET_CONTINENT, SET_COUNTRY } from './actionTypes';

const covidInitial = { date: '', continents: {} };
export const covid19Reducer = (state = covidInitial, action = {}) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const continentReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_CONTINENT:
      return action.payload;
    default:
      return state;
  }
};

export const countryReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export const loadData = (selectedDate = '') => {
  const date = new Date();
  const urlDate = selectedDate || date.toISOString().slice(0, 10);
  const url = `https://api.covid19tracking.narrativa.com//api/${urlDate}`;
  const continent = {
    date: '',
    continents: {
      Africa: { name: 'Africa', countries: {} },
      Europe: { name: 'Europe', countries: {} },
      North_America: { name: 'North_America', countries: {} },
      Oceania: { name: 'Oceania', countries: {} },
      Asia: { name: 'Asia', countries: {} },
      South_America: { name: 'South_America', countries: {} },
    },
  };

  return async (dispatch) => {
    const response = await axios.get(url);
    const dataWithSpecificDate = response.data.dates;

    const newDate = Object.keys(dataWithSpecificDate)[0];

    const finalData = dataWithSpecificDate[newDate];
    continent.date = newDate;
    Object.keys(finalData.countries).forEach((c) => {
      const country = finalData.countries[c];
      switch (getContinent(country.name.split('_').join(' '))) {
        case 'Europe':
          continent.continents.Europe.countries[country.name] = {
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          };
          break;
        case 'Africa':
          continent.continents.Africa.countries[country.name] = {
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          };
          break;
        case 'Asia':
          continent.continents.Asia.countries[country.name] = {
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          };
          break;
        case 'North_America':
          continent.continents.North_America.countries[country.name] = {
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          };
          break;
        case 'South_America':
          continent.continents.South_America.countries[country.name] = {
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          };
          break;
        case 'Oceania':
          continent.continents.Oceania.countries[country.name] = {
            name: country.name,
            today_confirmed: country.today_confirmed,
            today_deaths: country.today_deaths,
            today_new_confirmed: country.today_new_confirmed,
            today_new_deaths: country.today_new_deaths,
            today_new_open_cases: country.today_new_open_cases,
            today_new_recovered: country.today_new_recovered,
            today_open_cases: country.today_open_cases,
            today_recovered: country.today_recovered,
          };
          break;
        default:
          break;
      }
    });

    dispatch({ type: LOAD_DATA, payload: continent });
  };
};

export const setContinent = (continent = '') => ({
  type: SET_CONTINENT,
  payload: { continent },
});

export const setCountry = (country = '') => ({
  type: SET_COUNTRY,
  payload: { country },
});
