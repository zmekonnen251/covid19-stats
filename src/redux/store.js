import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { covid19Reducer, continentReducer, countryReducer } from './reducer';

const rootReducer = combineReducers({
  covidData: covid19Reducer,
  continent: continentReducer,
  country: countryReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
