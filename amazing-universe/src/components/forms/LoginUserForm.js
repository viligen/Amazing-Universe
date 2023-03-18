import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';

import { loginUser } from '../../services/userServices';

export default function LoginUserForm() {
    const [formData, setFormdata] = useState({});

    const { onUserChange } = useContext(userContext);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if (formData.password) {
            console.log(formData);
            loginUser(formData).then((result) => {
                if (result) {
                    setCurrentUser(JSON.stringify(result));
                    sessionStorage.setItem('user', JSON.stringify(result));
                }
            });
        }
    }, [formData, currentUser]);

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

    return currentUser ? (
        (onUserChange(currentUser), (<Navigate to='/' replace />))
    ) : (
        // navigate('/', { replace: true })
        // <Navigate to='/' replace />
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
            <button type='submit' className='postBtn'>
                Login
            </button>
        </form>
    );
}
