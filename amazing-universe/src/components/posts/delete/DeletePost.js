import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { deletePost } from '../../../services/postServices';
import styles from './DeletePost.module.css';

export default function DeletePost() {
    const { postId } = useParams();
    const { state } = useLocation();
    const [isConfirmed, setIsConfirmed] = useState(false);
    const postTitle = state ? state.postTitle : '';
    const navigate = useNavigate();
    useEffect(() => {
        if (postId && isConfirmed) {
            deletePost(postId).then((result) =>
                navigate('/dashboard', { replace: true })
            );
        }
    }, [isConfirmed, postId, navigate]);

    return (
        <article className={styles.cardLarge}>
            <p className={styles.msg}>
                You are about to delete your post with title:
            </p>
            <h2 className={styles.title}>{postTitle}</h2>

            <p className={styles.confirmMsg}>Please, confirm or go back to details!</p>
            <button
                className='postBtn'
                onClick={() => {
                    setIsConfirmed(true);
                }}
            >
                Confirm to Delete
            </button>
            <Link to={`/posts/${postId}`} className={styles.undo}>
                <i className='fas fa-undo'></i>
            </Link>
        </article>
    );
}
