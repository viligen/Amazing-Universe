import { Link } from 'react-router-dom';

import LoginUserForm from '../../forms/userForms/LoginUserForm';

import styles from '../Mains.module.css';

export default function MainLogin() {
    return (
        <main>
            <section className={styles.section}>
                <h3>User Authentication</h3>
                <LoginUserForm />
                <p>
                    If you do not have an account with us, please{' '}
                    <Link to='/register'>Register here </Link>
                </p>
            </section>
        </main>
    );
}
