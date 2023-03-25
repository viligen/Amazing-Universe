import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from '../../../context/userContext';

export default function AuthUserRequired() {
    const { user } = useContext(userContext);

    if (!user) {
        return <Navigate to='/login' replace />;
    } else {
        return <Outlet />;
    }
}
