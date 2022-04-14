import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <div className="box-border text-white bg-lightpink pb-3">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </div>
  </Router>
);

export default App;
