import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { editPost, getOnePost } from '../../services/postServices';

export default function EditPostForm() {
    const { postId } = useParams();
    const [formData, setFormdata] = useState({});
    const [currentPost, setCurrentPost] = useState(null);
    const [post, setPost] = useState('');
    useEffect(() => {
        getOnePost(postId).then((result) => setCurrentPost(result));
    }, [postId]);

    useEffect(() => {
        if (formData.title) {
            editPost(postId, formData).then((result) => {
                if (result) {
                    setPost(result);
                }
            });
        }
    }, [postId, formData]);

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
        <Navigate to={`/posts/${post._id}`} />
    ) : (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='title'>Title:</label>
            <input
                type='text'
                id='title'
                name='title'
                defaultValue={currentPost?.title}
                required={true}
            />
            <label htmlFor='description'>Description:</label>
            <textarea
                type='text'
                id='description'
                name='description'
                defaultValue={currentPost?.description}
            />
            <label htmlFor='author'>Source:</label>
            <input
                type='text'
                id='author'
                name='author'
                defaultValue={currentPost?.author}
                required={true}
            />
            <label htmlFor='date'>Date:</label>
            <input
                type='text'
                id='date'
                name='date'
                defaultValue={currentPost?.date}
            />
            <label htmlFor='imageUrl'>Image URL:</label>
            <input
                type='text'
                id='imageUrl'
                name='imageUrl'
                defaultValue={currentPost?.imageUrl}
                required={true}
            />
            <button type='submit' className='postBtn'>
                Edit
            </button>
        </form>
    );
}
