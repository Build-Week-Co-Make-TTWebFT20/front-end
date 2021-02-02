import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as yup from 'yup';
import schema from './validation/schema';
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import UserSignupForm from './components/UserSignupForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';


const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
  role: '',
};

const initialErrors = {
  username: '',
  password: '',
  confirmPassword: '',
  role: '',
};

const initialDisabled = true;

function App(props) {

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const change = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, 
          [name]: ''
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    
      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
    };
    setUsers([ ...users, newUser]);
    setFormValues(initialValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])

  return (
    <div className="App">
      <Router>
        {/* link the login component here */}
        <Route path='/signup-user'>
         <UserSignupForm
          values={formValues}
          change={change}
          submit={submit}
          errors={formErrors}
          disabled={disabled} 
         />
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
