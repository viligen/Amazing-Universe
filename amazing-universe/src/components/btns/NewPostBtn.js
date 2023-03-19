import { Link } from 'react-router-dom';
import styles from './NewPostBtn.module.css';

export default function NewPostBtn() {
    const user = sessionStorage.getItem('user');

    return (
        <Link to={user ? '/posts/create' : '/login'} className={styles.postBtn}>
            New Post
        </Link>
    );
}
