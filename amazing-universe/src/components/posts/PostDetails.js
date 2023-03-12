import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getOnePost } from '../../services/postServices';
import './PostDetails.css';

export default function PostDetails() {
    let likes;
    let { postId } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        getOnePost(postId).then((postData) => {
            setPost(postData);
        });
    }, [postId]);

    let user = sessionStorage.getItem('user');

    return post ? (
        <article className='cardLarge'>
            <img src={post.imageUrl} alt={post.title + ' img'} />
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

            {user && post._ownerId !== JSON.parse(user)._id && (
                <Link to='/'>
                    <i className='fas fa-thumbs-up'></i>
                </Link>
            )}
            {user && post._ownerId === JSON.parse(user)._id && (
                <>
                    <Link to={`/posts/${postId}/edit`}>
                        <i className='fas fa-edit'></i>
                    </Link>
                    <Link to={`/posts/${postId}/delete`}>
                        <i className='fas fa-trash-alt'></i>
                    </Link>
                </>
            )}
            <Link to='/dashboard'>
                <i className='fas fa-window-close'></i>
            </Link>
        </article>
    ) : (
        <p>Loading...</p>
    );
}
