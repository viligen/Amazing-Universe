import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { userContext } from '../../../context/userContext';
import { getAllLikes, getOwnLike } from '../../../services/likeServices';
import { getOnePost } from '../../../services/postServices';
import './PostDetails.css';

export default function PostDetails() {
    let { postId } = useParams();
    // let user = sessionStorage.getItem('user')
    //     ? JSON.parse(sessionStorage.getItem('user'))
    //     : null;
    console.log(useContext(userContext));
    let { user } = useContext(userContext);
    const userId = user ? JSON.parse(user)._id : '';

    const [post, setPost] = useState(null);
    const [likes, setLikes] = useState(0);
    const [isLiked, setOwnLike] = useState(false);

    console.log(user, userId, post?._ownerId);

    useEffect(() => {
        getOnePost(postId).then((postData) => {
            setPost(postData);
        });
        getAllLikes(postId).then((count) => {
            setLikes(count);
        });

        user &&
            getOwnLike(postId, userId).then((isLiked) => {
                setOwnLike(isLiked);
                console.log(isLiked);
            });
    }, [postId, user, userId]);

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

            {user && post._ownerId !== userId && !isLiked && (
                <Link to={`/posts/${postId}/like`}>
                    <i className='fas fa-thumbs-up'></i>
                </Link>
            )}
            {user && post._ownerId === userId && (
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
