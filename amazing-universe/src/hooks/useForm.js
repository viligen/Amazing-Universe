import { useState } from 'react';
import { isPassMatch, isValueEmpty } from '../utils/formValidators';

export const useForm = (initValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initValues);

    const onChangeHandler = (ev) => {
        if (ev.target.name === 'repass') {
            if (!isPassMatch(formValues.password, ev.target.value, ev.target)) {
                // alert('Passwords mismatch!');
                // return;
            }
        } else if (isValueEmpty(ev.target, ev.target.value)) {
            // return;
        }
        setFormValues((state) => ({
            ...state,
            [ev.target.name]: ev.target.value,
        }));
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        onSubmitHandler(formValues);
    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
    };
};
