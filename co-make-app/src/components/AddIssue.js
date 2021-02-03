import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'

function AddIssue({ posts, setPost }) {
    const [formValues, setFormValues] = useState({
        post_name: '',
        description: '',
        city: '',
        abr_state: '',
        zip: '',
    })

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://comake-tt-webft-20.herokuapp.com/api/posts', formValues)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={handleSubmit} className='addPostForm'>
            <label htmlFor="post_name">Name</label>
            <input
                id='post_name'
                name='post_name'
                onChange={handleChanges}
                value={formValues.post_name}
                required
                maxLength='128'
            />
            <label htmlFor="description">Description</label>
            <input
                id='description'
                name='description'
                onChange={handleChanges}
                value={formValues.description}
                required
                maxLength='1200'
            />
            <label htmlFor="city">City</label>
            <input
                id='city'
                name='city'
                onChange={handleChanges}
                value={formValues.city}
                required
                maxLength='20'
            />
            <label htmlFor="abr_state">State</label>
            <input
                id='abr_state'
                name='abr_state'
                onChange={handleChanges}
                value={formValues.abr_state}
                required
                maxLength='2'
            />
            <label htmlFor="zip">Zip</label>
            <input
                id='zip'
                name='zip'
                onChange={handleChanges}
                value={formValues.zip}
                required
                maxLength='5'
            />
            <button>Add Issue</button>
        </form>
    )
}

export default AddIssue;


