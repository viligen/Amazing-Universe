import { Link } from 'react-router-dom';
import RegisterUserForm from '../../forms/userForms/RegisterUserForm';

export default function MainRegister() {
    return (
        <main>
            <section>
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
