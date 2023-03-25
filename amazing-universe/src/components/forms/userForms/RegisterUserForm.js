import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/userContext';
import { registerUser } from '../../../services/userServices';
import {
    isAllRequiredOK,
    isFinalPassMatch,
} from '../../../utils/formValidators';
import { useForm } from '../../../hooks/useForm';

import styles from '../Forms.module.css';

export default function RegisterUserForm() {
    const { onUserChange } = useContext(userContext);
    const navigate = useNavigate();
    const [formData, setFormdata] = useState({});
    const [user, setUser] = useState(null);

    const onSubmitHandler = (formValues) => {
        if (!isAllRequiredOK(Object.values(formValues))) {
            alert('Fill in all required fields!');
            return;
        } else if (!isFinalPassMatch(formValues.password, formValues.repass)) {
            alert('Passwords mismatch!');
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
            repass: '',
        },
        onSubmitHandler
    );

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

    return (
        !user && (
            <form onSubmit={onSubmit} className={styles.form}>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formValues.email}
                    required={true}
                    onChange={onChangeHandler}
                />
                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formValues.password}
                    required={true}
                    onChange={onChangeHandler}
                />
                <label htmlFor='repass'>Repeat Password:</label>
                <input
                    type='password'
                    id='repass'
                    name='repass'
                    value={formValues.repass}
                    required={true}
                    onChange={onChangeHandler}
                />
                <button type='submit' className='postBtn'>
                    Register
                </button>
            </form>
        )
    );
}
