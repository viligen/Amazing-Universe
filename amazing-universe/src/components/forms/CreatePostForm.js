import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { createPost } from '../../services/postServices';

export default function CreatePostForm() {
    const [formData, setFormdata] = useState({});
    const [post, setPost] = useState('');

    useEffect(() => {
        if (formData.title) {
            createPost(formData).then((result) => {
                if (result) {
                    setPost(result);
                }
            });
        }
    }, [formData]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        if (data.title.trim() === '' || data.imageUrl.trim() === '') {
            alert('Fill in all fields!');
            return;
        } else {
            setFormdata(data);
        }
    };

    return post ? (
        <Navigate to='/dashboard' />
    ) : (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='title'>Title:</label>
            <input
                type='text'
                id='title'
                name='title'
                defaultValue=''
                required={true}
            />
            <label htmlFor='description'>Description:</label>
            <textarea
                type='text'
                id='description'
                name='description'
                defaultValue=''
            />
            <label htmlFor='author'>Source:</label>
            <input
                type='text'
                id='author'
                name='author'
                defaultValue=''
                required={true}
            />
            <label htmlFor='date'>Date:</label>
            <input type='text' id='date' name='date' defaultValue='' />
            <label htmlFor='imageUrl'>Image URL:</label>
            <input
                type='text'
                id='imageUrl'
                name='imageUrl'
                defaultValue=''
                required={true}
            />
            <button type='submit' className='postBtn'>
                Create
            </button>
        </form>
    );
}
