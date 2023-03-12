import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { userContext } from '../../context/userContext';
import { loginUser } from '../../services/userServices';

export default function LoginUserForm() {
    const [formData, setFormdata] = useState({});
    const [user, setUser] = useState('');
    // const ctxUser = userContext(user);
    // setUser(userContext)

    useEffect(() => {
        if (formData.password) {
            console.log(formData);
            loginUser(formData).then((result) => {
                if (result) {
                    setUser(result);
                    sessionStorage.setItem('user', JSON.stringify(result));
                }
            });
        }
    }, [formData]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.target));
        if (email.trim() === '' || password.trim() === '') {
            alert('Fill in all fields!');
            return;
        } else {
            setFormdata({ email, password });
        }
    };

    return user ? (
        <Navigate to='/dashboard' replace />
    ) : (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='emaile' name='email' defaultValue='' />
            <label htmlFor='password'>Password:</label>
            <input
                type='password'
                id='password'
                name='password'
                defaultValue=''
            />
            <button type='submit' className='postBtn'>
                Login
            </button>
        </form>
    );
}
