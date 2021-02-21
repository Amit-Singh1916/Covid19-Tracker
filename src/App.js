import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './common/FontawesomeIcons';

import HomePage from './views/HomePage';
import StatePage from './views/StatePage';
import { fetchCovidData } from './storage/countryData';
import { fetchnotifiData } from './storage/notifiData';

import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidData());
    dispatch(fetchnotifiData());
  }, [ dispatch ])

  return (                                                                      //If url not matched redirect to homepage
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/state/:stateCode" component={StatePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;   
