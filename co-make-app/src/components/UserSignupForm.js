// create a user sign up form
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import schema from '../validation/schema';
import styled from "styled-components";


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
  

export default function UserSignupForm() {
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const { push } = useHistory();

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
    };
    // axios req posting form values to dummy api
     axios.post('https://comake-tt-webft-20.herokuapp.com/api/auth/register', newUser)
     .then(res => {
         console.log(res)
         setUsers([ ...users, newUser]);
         push('/login')
    //    localStorage.setItem('token', res.data.payload)
     })
     .catch(err => {
       console.log('user signup error: ', err.message)
       console.log(newUser)
     })
    
    setFormValues(initialValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])

    const onSubmit = event => {
        event.preventDefault()
        submit()
    };

    const onChange = event => {
        const { name, value } = event.target
        change(name, value)
    };

    return (
      <StyledForm>
        <div className="errors" style={{ color: "orangered" }}>
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.confirmPassword}</div>
        </div>
      <h2>Get started with your account!</h2>
        <form onSubmit={onSubmit}>
            <div>
                <h3>Your Information</h3>
                <div>
                  <label>
                    username:
                    <input
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={onChange}
                        placeholder='Username'
                    />
                  </label>
                </div>
                <div>
                  <label>
                    password:
                    <input
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange={onChange}
                        placeholder='Password'
                    />
                  </label>
                </div>
                <div>
                  <label>
                    confirm password:
                    <input
                        type='password'
                        name='confirmPassword'
                        value={formValues.confirmPassword}
                        onChange={onChange}
                        placeholder='Confirm Password'
                    />
                  </label>
                </div>
            </div>
            <div><br></br>
                <h3>Your Role</h3>
                <div>
                    <select
                        name='role'
                        value={formValues.role}
                        onChange={onChange}
                    >
                        <option value=''>-- Select --</option>
                        <option value='user'>Private Citizen</option>
                        <option value='official'> Government Official</option>
                    </select>
                </div><br></br>
                <button disabled={disabled}>Sign Up</button>
            </div>
        </form>
      </StyledForm>
    )
}

const StyledForm = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 5%;
  &.links {
    display: flex;
    flex-direction: column;
  }
`;