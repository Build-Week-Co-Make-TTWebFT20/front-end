import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import schemaLogin from "../validation/schemaLogin";

const initialValues = {
  username: "",
  password: "",
};

const initialErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

export default function UserLogin(props) {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
    };
    setUsers([...users, newUser]);
    setFormValues(initialValues);
    axios
      .post('https://comake-tt-webft-20.herokuapp.com/api/auth/login', formValues)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        push('/posts');
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    yup
      .reach(schemaLogin, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schemaLogin.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <StyledForm>
      <div className="errors" style={{ color: "orangered" }}>
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
      </div>
      <h2>User Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          username:
          <input
            name="username"
            type="text"
            value={formValues.username}
            onChange={onChange}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={onChange}
          />
        </label>
        <div className="links">
          <button disabled={disabled}>login</button>
          <a href="/signup-user" className="button next">
            Register Now
          </a>
        </div>
      </form>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  padding: 20px;

  &.links {
    display: flex;
    flex-direction: column;
  }
`;
