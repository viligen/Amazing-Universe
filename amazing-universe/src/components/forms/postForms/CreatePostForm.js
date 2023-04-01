import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../../services/postServices';
import { useForm } from '../../../hooks/useForm';

import { isAllRequiredOK } from '../../../utils/formValidators';

import styles from '../Forms.module.css';

export default function CreatePostForm() {
    const navigate = useNavigate();
    const [formData, setFormdata] = useState({});
    const [post, setPost] = useState(null);

    const onSubmitHandler = (formValues) => {
        if (
            !isAllRequiredOK([
                formValues.title,
                formValues.author,
                formValues.imageUrl,
            ])
        ) {
            alert('Fill in all required fields!');
            return;
        } else {
            setFormdata({
                title: formValues.title,
                description: formValues.description,
                author: formValues.author,
                date: formValues.date,
                imageUrl: formValues.imageUrl,
            });
        }
    };
    const { formValues, onChangeHandler, onSubmit } = useForm(
        {
            title: '',
            description: '',
            author: '',
            date: '',
            imageUrl: '',
        },
        onSubmitHandler
    );

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

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     const data = Object.fromEntries(new FormData(e.target));
    //     if (data.title.trim() === '' || data.imageUrl.trim() === '') {
    //         alert('Fill in all required fields!');
    //         return;
    //     } else {
    //         setFormdata(data);
    //     }
    // };

    return (
        !post && (
            <form onSubmit={onSubmit} className={styles.form}>
                <label htmlFor='title'>Title*:</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={formValues.title}
                    placeholder='Title is required and cannot be empty...'
                    required={true}
                    onChange={onChangeHandler}
                />
                <label htmlFor='description'>Description:</label>
                <textarea
                    type='text'
                    id='description'
                    name='description'
                    value={formValues.description}
                    onChange={onChangeHandler}
                />
                <label htmlFor='author'>Source*:</label>
                <input
                    type='text'
                    id='author'
                    name='author'
                    value={formValues.author}
                    placeholder='Source is required and cannot be empty...'
                    required={true}
                    onChange={onChangeHandler}
                />
                <label htmlFor='date'>Date:</label>
                <input
                    type='text'
                    id='date'
                    name='date'
                    value={formValues.date}
                    onChange={onChangeHandler}
                />
                <label htmlFor='imageUrl'>Image URL*:</label>
                <input
                    type='url'
                    id='imageUrl'
                    name='imageUrl'
                    value={formValues.imageUrl}
                    placeholder='http://...'
                    required={true}
                    onChange={onChangeHandler}
                />
                <button type='submit' className='postBtn'>
                    Create
                </button>
                <p>*Required fields</p>
            </form>
        )
    );
}
