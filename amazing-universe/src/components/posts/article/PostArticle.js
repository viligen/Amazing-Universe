import { Link } from 'react-router-dom';
import styles from './PostArticle.module.css';

export default function PostArticle({ post }) {
    return (
        <article className={styles.card}>
            <img src={post.imageUrl} alt='img' />
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <Link to={`/posts/${post._id}`} className='postBtn'>
                Reveal More
            </Link>
        </article>
    );
}
