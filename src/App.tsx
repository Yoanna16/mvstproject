import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Repos from './components/Repos';

function App() {
  return (
    <Router>
      <>
      <Header /> 
      <Repos/>
      </>
    </Router>

  );
}

export default App;
