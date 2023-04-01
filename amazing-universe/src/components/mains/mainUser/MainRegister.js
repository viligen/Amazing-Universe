import { Link } from 'react-router-dom';
import RegisterUserForm from '../../forms/userForms/RegisterUserForm';

import styles from '../Mains.module.css'

export default function MainRegister() {
    return (
        <main>
            <section className={styles.section}>
                <h3>User Registration</h3>
                <RegisterUserForm />
                <p>
                    If you already have an account with us, please{' '}
                    <Link to='/login'>Log In here</Link>
                </p>
            </section>
        </main>
    );
}
