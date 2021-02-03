import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'

function AddIssue() {
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        city: '',
        state: '',
        zip: '',
        creator_id: '',
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
    }

    return (
        <form onSubmit={handleSubmit} className='addPostForm'>
            <label htmlFor="name">Name</label>
            <input
                id='name'
                name='name'
                onChange={handleChanges}
                value={formValues.name}
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
            <label htmlFor="state">State</label>
            <input
                id='state'
                name='state'
                onChange={handleChanges}
                value={formValues.state}
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

