import { Link } from 'react-router-dom';
import styles from './PostArticle.module.css';
import { userContext } from '../../../context/userContext';
import { useContext } from 'react';

export default function PostArticle({ post }) {
    const { user } = useContext(userContext);
    return (
        <article className={styles.card}>
            <img src={post.imageUrl} alt={`${post.title} img`} />
            <h4>{post.title}</h4>
            <p>{post.description}</p>

            <Link
                to={user ? `/posts/${post._id}` : `/login`}
                className='postBtn'
            >
                Reveal More
            </Link>
        </article>
    );
}
