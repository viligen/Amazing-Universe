import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import styles from './NewPostBtn.module.css';

export default function NewPostBtn() {
    const { user } = useContext(userContext);

    return (
        <Link to={user ? '/posts/create' : '/login'} className={styles.postBtn}>
            New Post
        </Link>
    );
}
