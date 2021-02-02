import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import UserSignupForm from './components/UserSignupForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';


function App() {

  return (
    <div className="App">
      <Router>
        {/* link the login component here */}
        <Route path='/signup-user'>
         <UserSignupForm />
        </Route>
        {/* link the login component here */}
        <Route exact path='/' component={Home} />
        {/* link the issues landing page here */}
        <PrivateRoute exact path='/issues' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
