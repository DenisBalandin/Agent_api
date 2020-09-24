import React from 'react';
import Body from './components/Body';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Body/>
      </Router>
    </div>
  );
}

export default App;
