import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/userContext';

import { loginUser } from '../../../services/userServices';

import { useForm } from '../../../hooks/useForm';
import styles from '../Forms.module.css';
import { isAllRequiredOK } from '../../../utils/formValidators';

export default function LoginUserForm() {
    const { onUserChange } = useContext(userContext);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);

    const [formData, setFormdata] = useState({});

    const onSubmitHandler = (formValues) => {
        if (!isAllRequiredOK(Object.values(formValues))) {
            alert('Fill in all required fields!');
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
    );

    useEffect(() => {
        if (formData.password && formData.email) {
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
                <label htmlFor='email'>Email*:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formValues.email}
                    onChange={onChangeHandler}
                    required={true}
                />
                <label htmlFor='password'>Password*:</label>
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
                <p>*All fields are required</p>
            </form>
        )
    );
}
