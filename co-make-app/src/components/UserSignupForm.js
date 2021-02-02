// create a user sign up form
import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function UserSignupForm(props) {
      const { push } = useHistory();
    const {
        values,
        submit, 
        change, 
        disabled, 
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
        // axios req posting form values to dummy api
        axios.post('https://reqres.in/api/users', values)
        .then(res => {
          localStorage.setItem('token', res.data.payload)
          push('/issues')
        })
        .catch(err => {
          console.log('user signup error: ', err)
        })
    };

    const onChange = event => {
        const { name, value } = event.target
        change(name, value)
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Get started with your account</h2>
            </div>
            <div>
                <h4>Your Information</h4>
                <div>
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        placeholder='Username'
                    />
                    <div>{errors.username}</div>
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                        placeholder='Password'
                    />
                    <div>{errors.password}</div>
                </div>
                <div>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={values.confirmPassword}
                        onChange={onChange}
                        placeholder='Confirm Password'
                    />
                    <div>{errors.confirmPassword}</div>
                </div>
            </div>
            <div>
                <h4>Your Role</h4>
                <div>
                    <select
                        name='role'
                        value={values.role}
                        onChange={onChange}
                    >
                        <option value=''>-- Select --</option>
                        <option value='user'>Private Citizen</option>
                        <option value='official'> Government Official</option>
                    </select>
                </div>
                <button disabled={disabled}>Sign Up</button>
            </div>
        </form>
    )
}