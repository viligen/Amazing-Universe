import { Link } from 'react-router-dom';
import styles from './SmallPost.module.css';
import { userContext } from '../../../context/userContext';
import { useContext } from 'react';

export default function SmallPost({ post }) {
    const { user } = useContext(userContext);
    return (
        <article className={styles.smallCard}>
            <Link to={user ? `/posts/${post._id}` : `/login`}>
                <img src={post.imageUrl} alt={`${post.title} img`} />
                <h4>{post.title}</h4>
            </Link>
        </article>
    );
}
