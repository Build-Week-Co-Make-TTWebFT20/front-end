import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
      {/* link the login component here */}
      <Route exact path='/'/>
      {/* link the issues landing page here */}
      <PrivateRoute exact path='/issues'/>
      </Router>
      <h1>HEY HEY HAY</h1>
    </div>
  );
}

export default App;
