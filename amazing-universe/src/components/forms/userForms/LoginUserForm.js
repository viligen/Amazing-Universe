import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/userContext';

import { loginUser } from '../../../services/userServices';

import { useForm } from '../../../hooks/useForm';
import styles from '../Forms.module.css'

export default function LoginUserForm() {
    const { onUserChange } = useContext(userContext);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    const [formData, setFormdata] = useState({});

    const onSubmitHandler = (formValues) => {
        if (Object.values(formValues).some((v) => v.trim() === '')) {
            alert('Fill in all fields!');
            return;
        } else {
            setFormdata({
                email: formValues.email,
                password: formValues.password,
            });
        }
    };

    const { formValues, onChangeHandler, onSubmit } = useForm(
        {
            email: '',
            password: '',
        },
        onSubmitHandler
        // }, (values)=>{console.log(values)}
    );

    useEffect(() => {
        if (formData.password && formData.email) {
            console.log(formData);
            loginUser(formData).then((result) => {
                if (result) {
                    setCurrentUser(JSON.stringify(result));
                    sessionStorage.setItem('user', JSON.stringify(result));
                    onUserChange(JSON.stringify(result));
                    navigate('/dashboard', { replace: true });
                }
            });
        }
    }, [formData, navigate, onUserChange]);

    return (
        !currentUser && (
            <form onSubmit={onSubmit} className={styles.form}>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formValues.email}
                    onChange={onChangeHandler}
                    required={true}
                />
                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formValues.password}
                    onChange={onChangeHandler}
                    required={true}
                />
                <button type='submit' className='postBtn'>
                    Login
                </button>
            </form>
        )
    );
}
