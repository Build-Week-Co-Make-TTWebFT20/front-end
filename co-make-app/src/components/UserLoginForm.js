import React from "react";
import styled from "styled-components";

import axios from "axios";

export default function UserLogin(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
    // axios
    //   .get("https://reqres.in/api/users")
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <StyledForm>
      <div className="errors" style={{ color: "orangered" }}>
        <div>{errors.username}</div>
        <div>{errors.password}</div>
      </div>
      <h2>User Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          username:
          <input
            name="username"
            type="text"
            value={values.username}
            onChange={onChange}
          />
        </label>
        <label>
          password:
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={onChange}
          />
        </label>
        <div className="links">
          <button disabled={disabled}>login</button>
          <a href="/signup-user" class="button next">
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
