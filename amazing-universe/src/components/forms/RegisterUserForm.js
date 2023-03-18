import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { userContext } from '../../context/userContext';
import { registerUser } from '../../services/userServices';

export default function RegisterUserForm() {
    const [formData, setFormdata] = useState({});
    const [user, setUser] = useState('');
    // const ctxUser = userContext(user);
    // setUser(userContext)

    useEffect(() => {
        if (formData.password) {
            registerUser(formData).then((result) => {
                if (result) {
                    setUser(result);
                    sessionStorage.setItem('user', JSON.stringify(result));
                } else {
                    alert('Please register a brand new user!');
                }
            });
        }
    }, [formData]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { email, password, repass } = Object.fromEntries(
            new FormData(e.target)
        );
        if (
            email.trim() === '' ||
            password.trim() === '' ||
            password !== repass
        ) {
            alert('Fill in all fields correctly!');
            return;
        } else {
            setFormdata({ email, password });
        }
    };
    return user ? (
        <Navigate to='/' replace />
    ) : (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                id='emaile'
                name='email'
                defaultValue=''
                required={true}
            />
            <label htmlFor='password'>Password:</label>
            <input
                type='password'
                id='password'
                name='password'
                defaultValue=''
                required={true}
            />
            <label htmlFor='repass'>Repeat Password:</label>
            <input
                type='password'
                id='repass'
                name='repass'
                defaultValue=''
                required={true}
            />
            <button type='submit' className='postBtn'>
                Register
            </button>
        </form>
    );
}
