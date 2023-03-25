import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { deletePost } from '../../../services/postServices';
import styles from './DeletePost.module.css';

export default function DeletePost() {
    const { postId } = useParams();
    const { state } = useLocation();
    const [isConfirmed, setIsConfirmed] = useState(false);
    const postTitle = state.postTitle;
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
                You are about to delete post with title :<br></br> "{postTitle}"
            </p>
            <p className={styles.confirmMsg}>Please, confirm!</p>
            <button
                className='postBtn'
                onClick={() => {
                    setIsConfirmed(true);
                }}
            >
                Confirm to Delete
            </button>
        </article>
    );
}
