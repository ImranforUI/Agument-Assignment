import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

let App = () => {
  return (
    <React.Fragment className="App">
      <Router>
        <Navbar />
        <Sidebar/>
      </Router>
    </React.Fragment>
  );
}

export default App;
