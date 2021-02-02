import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'

function AddIssue() {
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        city: '',
        state: '',
        zip: null
    })

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id='name'
                name='name'
                onChange={handleChanges}
                value={formValues.name}
            />
            <label htmlFor="description">Description</label>
            <input
                id='description'
                name='description'
                onChange={handleChanges}
                value={formValues.description}
            />
            <label htmlFor="city">City</label>
            <input
                id='city'
                name='city'
                onChange={handleChanges}
                value={formValues.city}
            />
            <label htmlFor="state">State</label>
            <input
                id='state'
                name='state'
                onChange={handleChanges}
                value={formValues.state}
            />
            <label htmlFor="zip">Zip</label>
            <input
                id='zip'
                name='zip'
                onChange={handleChanges}
                value={formValues.zip}
            />
            <button>Add Issue</button>
        </form>
    )
}

export default AddIssue;
