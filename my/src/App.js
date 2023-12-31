import React from 'react';
import './App.css'; // Import your custom CSS file for additional styling
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'; // Include Materialize JavaScript
import Navigation from './components/Navigation';

import LandingPage from './components/landing';



function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage /> 
    </div>
  );
}

export default App;
