// create a user sign up form
import React from 'react';

export default function UserSignupForm(props) {
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
    };

    const onChange = event => {
        const { name, value } = event.target
        change(name, value)
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Get started with yout account</h2>
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
                        <option value=''>--------- Select ---------</option>
                        <option value='user'>Private Citizen</option>
                        <option value='official'> Government Official</option>
                    </select>
                </div>
                <button disabled={disabled}>Sign Up</button>
            </div>
        </form>
    )
}