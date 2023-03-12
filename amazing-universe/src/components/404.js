import { Link } from 'react-router-dom';
import styles from './404.module.css';

export default function NotFound() {
    return (
        <main className={styles['not-found']}>
            <p>404</p>
            <p>
                You dropped here while eather looking for something we do not
                have<br></br> or you tried reaching a resource you are not
                authorized to access.
            </p>
            <Link to='/' className='postBtn'>
                Go back to Home page
            </Link>
        </main>
    );
}
