import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../../services/postServices';

export default function CreatePostForm() {
    const navigate = useNavigate();
    const [formData, setFormdata] = useState({});
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (formData.title) {
            createPost(formData).then((result) => {
                if (result) {
                    setPost(result);
                    navigate('/myposts', { replace: true });
                }
            });
        }
    }, [formData, navigate]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        if (data.title.trim() === '' || data.imageUrl.trim() === '') {
            alert('Fill in all required fields!');
            return;
        } else {
            setFormdata(data);
        }
    };

    return (
        !post && (
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='title'>Title:</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    defaultValue=''
                    placeholder='Title is required and cannont be empty'
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
                    placeholder='Source is required and cannont be empty'
                    required={true}
                />
                <label htmlFor='date'>Date:</label>
                <input type='text' id='date' name='date' defaultValue='' />
                <label htmlFor='imageUrl'>Image URL:</label>
                <input
                    type='url'
                    id='imageUrl'
                    name='imageUrl'
                    defaultValue=''
                    placeholder='http://...'
                    required={true}
                />
                <button type='submit' className='postBtn'>
                    Create
                </button>
            </form>
        )
    );
}
