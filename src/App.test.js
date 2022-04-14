import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  covid19Reducer,
  continentReducer,
  countryReducer,
} from './redux/reducer';

import Main from './components/Main';
import CountryMatrixCard from './components/CountryMatrixCard';
import ContinentMatrixCard from './components/ContinentMatrixCard';

const rootReducer = combineReducers({
  covidData: covid19Reducer,
  continent: continentReducer,
  country: countryReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

afterEach(cleanup);

describe('Home Page', () => {
  test('Home page renders correctly', () => {
    const homePage = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Main />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(homePage).toMatchSnapshot();
  });
});

describe('Countries List ', () => {
  test('Countries Card renders correctly', () => {
    const countryCard = renderer
      .create(
        <Provider store={store}>
          <Router>
            <CountryMatrixCard
              name="Ethiopia"
              totalConfirmed={20000}
              totalDeath={1000}
              onClickSetCountry="Ethiopia"
            />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(countryCard).toMatchSnapshot();
  });
});

describe('Countries List ', () => {
  test('Continent Card renders correctly', () => {
    const continentCard = renderer
      .create(
        <Provider store={store}>
          <Router>
            <ContinentMatrixCard
              key={uuidv4()}
              name="Europe"
              totalConfirmed={500000}
              totalDeath={50000}
              onClickSetContinent={'Europe'}
            />
            ;
          </Router>
        </Provider>
      )
      .toJSON();
    expect(continentCard).toMatchSnapshot();
  });
});
