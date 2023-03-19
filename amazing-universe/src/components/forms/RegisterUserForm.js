import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import { registerUser } from '../../services/userServices';

export default function RegisterUserForm() {
    const { onUserChange } = useContext(userContext);
    const navigate = useNavigate();
    const [formData, setFormdata] = useState({});
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (formData.password) {
            registerUser(formData).then((result) => {
                if (result) {
                    setUser(result);
                    sessionStorage.setItem('user', JSON.stringify(result));
                    onUserChange(JSON.stringify(result));
                    navigate('/dashboard', { replace: true });
                } else {
                    alert('Please register a brand new user!');
                }
            });
        }
    }, [formData, navigate, onUserChange]);

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
    return (
        !user && (
            <form onSubmit={onSubmitHandler}>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
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
        )
    );
}
