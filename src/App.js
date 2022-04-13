import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Main />} />
    </Routes>
  </Router>
);

export default App;
