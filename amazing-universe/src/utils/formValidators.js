import styles from '../components/forms/Forms.module.css';

const requiredFields = [
    'email',
    'password',
    'repass',
    'title',
    'author',
    'imageUrl',
];

export const isValueEmpty = (field, value) => {
    if (requiredFields.includes(field.name) && value.trim() === '') {
        field.className = styles.red;
        return true;
    } else {
        field.className = styles.green;
        return false;
    }
};

export const isAllRequiredOK = (values) => {
    if (values.some((v) => v.trim() === '')) {
        return false;
    }
    return true;
};

export const isPassMatch = (pass, repass, field) => {
    if (repass && isValueEmpty(field, repass)) {
        field.className = styles.red;
        return false;
    } else {
        if (repass && repass !== pass) {
            field.className = styles.red;
            return false;
        } else if (repass && repass === pass) {
            field.className = styles.green;
            return true;
        }
    }
};

export const isFinalPassMatch = (pass, repass) => {
    if (pass !== repass) {
        return false;
    }
    return true;
};
