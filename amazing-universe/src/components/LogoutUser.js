import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { logoutUser } from '../services/userServices';

export default function LogoutUser() {
    useEffect(() => {
        logoutUser();
        sessionStorage.removeItem('user');
    }, []);

    return <Navigate to='/' />;
}
