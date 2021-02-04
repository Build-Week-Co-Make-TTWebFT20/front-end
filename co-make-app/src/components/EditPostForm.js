import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom';

const initialValues = {
    post_name: '',
    description: '',
    city: '',
    abr_state: '',
    zip: '',
}

function EditPostForm() {
    const [formValues, setFormValues] = useState(initialValues);
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .get(`https://comake-tt-webft-20.herokuapp.com/api/posts/${id}`)
            .then((res) => {
                setFormValues(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const editPost = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://comake-tt-webft-20.herokuapp.com/api/posts/${id}`, formValues)
            .then((res) => {
                console.log("happy path:", res)
            })
            .catch((err) => {
                console.log('sad path:', err.message)
            })
    }

    return (
        <form onSubmit={editPost} className='addPostForm'>
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
            <button>Update Post</button>
        </form>
    )
}

export default EditPostForm
