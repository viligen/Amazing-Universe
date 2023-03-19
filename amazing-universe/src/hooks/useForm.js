import { useState } from 'react';

export const useForm = (initValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initValues);

    const onChangeHandler = (ev) => {
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
