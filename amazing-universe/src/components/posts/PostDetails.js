import { useState, useEffect } from 'react';
import { getOnePost } from '../../services/postServices';
import './PostDetails.css';

let likes;
let _id = 'ff436770-76c5-40e2-b231-77409eda7a61';

export default function PostDetails(p_id = _id) {
    const [post, setPost] = useState(null);
    useEffect(() => {
        getOnePost(_id).then((postData) => {
            setPost(postData);
        });
    }, []);

    let user = sessionStorage.getItem('user');
    return post ? (
        <article className='cardLarge'>
            <img src={post.imageUrl} alt={post.title + 'img'} />
            <h4>{post.title}</h4>
            <p>
                <b>Description</b>: {post.description}
            </p>

            <p>
                <b>Source</b>: {post.author}
            </p>
            <p>
                <b>Date</b>: {post.date}
            </p>
            <p>
                <b>Likes</b>: {likes}
            </p>

            {user && post._ownerId !== user._id && (
                <a href='/'>
                    <i className='fas fa-thumbs-up'></i>
                </a>
            )}
            {user && post._ownerId === user._id && (
                <>
                    <a href='/'>
                        <i className='fas fa-edit'></i>
                    </a>
                    <a href='/'>
                        <i className='fas fa-trash-alt'></i>
                    </a>
                </>
            )}
            <a href='/dashboard'>
                <i className='fas fa-window-close'></i>
            </a>
        </article>
    ) : (
        <p>Loading...</p>
    );
}
